import { FC } from 'react'

import ToolPlaceholder from '../ToolPlaceholder/ToolPlaceholder'
import Skeleton from '../ui/Skeleton/Skeleton'

interface IOutputCardProps {
  value: string
  translationTool: string
  loading?: boolean
}

const OutputCard: FC<IOutputCardProps> = (props) => {
  const { value, loading, translationTool } = props

  if (loading) {
    return (
      <div className='h-full w-full rounded-md bg-slate-100 p-4 shadow-md'>
        <Skeleton />
      </div>
    )
  }

  if (!value) {
    return <ToolPlaceholder translationTool={translationTool} />
  }

  return (
    <div className='h-full w-full rounded-lg bg-slate-100 p-4 shadow-md'>
      <p className='whitespace-pre'>{value}</p>
    </div>
  )
}

export default OutputCard
