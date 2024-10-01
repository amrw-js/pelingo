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
              className='flex w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 placeholder-gray-500 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-1 dark:border-gray-700 dark:bg-slate-900 dark:focus:ring-inset'
              displayValue={displayOption}
              onChange={changeQuery}
            />
            <ComboboxButton className='absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2'>
              <ChevronDownIcon className={cn('h-4 w-4', arrowClassName)} aria-hidden='true' />
            </ComboboxButton>
          </div>
          {open && (
            <ComboboxOptions
              anchor='bottom'
              static
              className='absolute z-50 mt-1 max-h-64 w-full origin-top overflow-auto rounded-md border bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm dark:bg-slate-900'
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
                        : 'text-gray-900 dark:text-white',
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
