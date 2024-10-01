import { FC } from 'react'

interface IOutputCardProps {
  value: string
  loading?: boolean
}

const OutputCard: FC<IOutputCardProps> = (props) => {
  const { value } = props

  return (
    <div className='h-full rounded-md bg-slate-100 p-4'>
      <p>{value}</p>
    </div>
  )
}

export default OutputCard
