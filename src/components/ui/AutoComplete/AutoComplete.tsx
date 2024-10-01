import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import cn from 'clsx'
import { motion } from 'framer-motion'
import { ChangeEvent, useMemo, useState } from 'react'

import { toLowerCase } from '../../../utils/toLowerCase'

interface IAutoCompleteProps<T> {
  value: string
  options: T[]
  arrowClassName?: string
  containerClassName?: string
  onChange: (value: T) => void
  displayOption: (option: T) => string
  onClose?: () => void
  displayValue: (value: T) => string
  onChangeQuery?: (value: string) => void
}

const AutoComplete = <T,>(props: IAutoCompleteProps<T>) => {
  const {
    value,
    options,
    arrowClassName,
    containerClassName,
    onChange,
    onClose,
    onChangeQuery,
    displayOption,
    displayValue,
  } = props

  const [searchQuery, setSearchQuery] = useState('')
  const filteredOptions = useMemo(
    () =>
      !searchQuery
        ? options
        : options.filter((option) => toLowerCase(displayOption(option)).includes(toLowerCase(searchQuery))),
    [options, searchQuery, displayOption],
  )

  const comboboxValue = useMemo(
    () => options.find((option) => displayValue(option) === value),
    [options, value, displayValue],
  )

  const changeQuery = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(value)
    onChangeQuery?.(value)
  }

  const closeMenu = () => {
    setSearchQuery('')
    onClose?.()
  }

  return (
    <Combobox immediate value={comboboxValue} onChange={onChange} onClose={closeMenu}>
      {({ open }) => (
        <>
          <div className={cn('relative w-full', containerClassName)}>
            <ComboboxInput
              className='flex w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 placeholder-gray-500 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              displayValue={displayOption}
              onChange={changeQuery}
            />
            <ComboboxButton className='absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2'>
              <ChevronDownIcon
                className={cn('h-4 w-4 text-gray-500 dark:text-slate-200', arrowClassName)}
                aria-hidden='true'
              />
            </ComboboxButton>
          </div>
          {open && (
            <ComboboxOptions
              static
              anchor='bottom'
              className='absolute z-50 mt-1 !max-h-[15.625rem] w-[var(--input-width)] origin-top overflow-auto rounded-md border border-gray-200 bg-white py-1 text-base shadow-lg ring-1 ring-black/5 empty:invisible focus:outline-none sm:text-sm dark:border-gray-600 dark:bg-slate-800 dark:ring-white/10'
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onAnimationComplete={closeMenu}
            >
              {filteredOptions.map((option) => (
                <ComboboxOption
                  key={displayValue(option)}
                  value={option}
                  className={({ focus, selected }) =>
                    cn(
                      'relative cursor-pointer select-none rounded px-6 py-2',
                      focus || selected
                        ? 'bg-indigo-50 text-indigo-900 dark:bg-indigo-600 dark:text-white'
                        : 'text-gray-900 dark:text-gray-100',
                    )
                  }
                >
                  {displayOption(option)}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          )}
        </>
      )}
    </Combobox>
  )
}

export default AutoComplete
