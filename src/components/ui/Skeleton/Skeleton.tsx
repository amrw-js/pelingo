const ParagraphSkeleton = () => {
  return (
    <div className='animate-pulse space-y-2'>
      <div className='h-4 w-5/6 rounded bg-slate-300 dark:bg-slate-700'></div>
      <div className='h-4 w-full rounded bg-slate-300 dark:bg-slate-700'></div>
      <div className='h-4 w-4/6 rounded bg-slate-300 dark:bg-slate-700'></div>
      <div className='h-4 w-3/4 rounded bg-slate-300 dark:bg-slate-700'></div>
      <div className='h-4 w-2/3 rounded bg-slate-300 dark:bg-slate-700'></div>
    </div>
  )
}

export default ParagraphSkeleton
