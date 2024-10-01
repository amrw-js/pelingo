import { MoonIcon, SunIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', !!darkMode)
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem('dark', JSON.stringify(!prevMode))
      return !prevMode
    })
  }

  useEffect(() => {
    setDarkMode(localStorage.getItem('dark') === 'true')
  }, [])

  return (
    <button
      onClick={toggleTheme}
      className='text-navy-800 absolute bottom-6 right-6 mt-auto flex items-center gap-2 rounded-xl border-2 border-dashed border-slate-500 bg-white px-4 py-2 text-sm font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none dark:border-indigo-200 dark:bg-slate-950 dark:text-white dark:shadow-indigo-200'
    >
      {!darkMode ? <MoonIcon className='h-5 w-5' /> : <SunIcon className='h-5 w-5' />}
      {!darkMode ? 'Dark mode' : 'Light mode'}
    </button>
  )
}

export default ThemeSwitcher
