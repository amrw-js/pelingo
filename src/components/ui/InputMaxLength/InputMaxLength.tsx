import cn from 'clsx'
import { type FC } from 'react'

interface ICharLimitIndicatorProps {
  charCount: number
  maxLength: number
  className?: string
}

const getLabelColor = (warning: boolean, error: boolean, viewMode?: boolean): string => {
  if (error) return 'text-red-500'

  if (warning) return 'text-yellow-500'

  if (!viewMode) return 'text-gray-500'

  return 'text-gray-800'
}

const InputMaxLength: FC<ICharLimitIndicatorProps> = (props) => {
  const { charCount, maxLength, className } = props

  const warning = charCount > maxLength - 6
  const error = charCount >= maxLength

  return (
    <p className={cn('absolute bottom-2 right-14', getLabelColor(warning, error), className)}>
      {charCount}/{maxLength}
    </p>
  )
}

export default InputMaxLength
