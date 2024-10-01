import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

import ToolPlaceholder from '../ToolPlaceholder/ToolPlaceholder'
import CopyToClipboardButton from '../ui/CopyToClipboardButton/CopyToClipboardButton'
import Skeleton from '../ui/Skeleton/Skeleton'

interface IOutputCardProps {
  value: string
  translationTool: string
  loading?: boolean
}

const OutputCard: FC<IOutputCardProps> = (props) => {
  const { value, loading, translationTool } = props

  const renderContent = () => {
    if (loading)
      return (
        <motion.div
          className='relative h-full w-full rounded-md border border-dashed border-slate-400 p-4'
          key='loading'
        >
          <Skeleton />
        </motion.div>
      )

    if (!value)
      return (
        <motion.div key='placeholder' className='h-full w-full'>
          <ToolPlaceholder translationTool={translationTool} />
        </motion.div>
      )

    return (
      <motion.div key='output' className='relative h-full w-full rounded-md border border-dashed border-slate-400 p-4'>
        <p className='whitespace-pre text-slate-900 dark:text-slate-100'>{value}</p>
        <CopyToClipboardButton text={value} />
      </motion.div>
    )
  }

  return (
    <div className='h-64 w-full overflow-hidden rounded-md bg-white shadow-md lg:h-full dark:bg-slate-800'>
      <AnimatePresence>{renderContent()}</AnimatePresence>
    </div>
  )
}

export default OutputCard
