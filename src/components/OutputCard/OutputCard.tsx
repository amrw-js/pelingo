import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

import ToolPlaceholder from '../ToolPlaceholder/ToolPlaceholder'
import Skeleton from '../ui/Skeleton/Skeleton'

interface IOutputCardProps {
  value: string
  translationTool: string
  loading?: boolean
}

const ANIMATION_PROPS = {
  initial: { opacity: 0, height: 0, y: 10 },
  animate: { opacity: 1, height: '100%', y: 0 },
  exit: { opacity: 0, height: 0, y: -10 },
  transition: { duration: 0.3, ease: 'easeInOut' },
}

const OutputCard: FC<IOutputCardProps> = (props) => {
  const { value, loading, translationTool } = props

  const renderContent = () => {
    if (loading)
      return (
        <motion.div key='loading' {...ANIMATION_PROPS}>
          <Skeleton />
        </motion.div>
      )

    if (!value)
      return (
        <motion.div key='placeholder' {...ANIMATION_PROPS}>
          <ToolPlaceholder translationTool={translationTool} />
        </motion.div>
      )

    return (
      <motion.div key='output' {...ANIMATION_PROPS}>
        <p className='whitespace-pre'>{value}</p>
      </motion.div>
    )
  }

  return (
    <div className='h-full w-full overflow-hidden rounded-md bg-slate-100 p-4 shadow-md'>
      <AnimatePresence>{renderContent()}</AnimatePresence>
    </div>
  )
}

export default OutputCard
