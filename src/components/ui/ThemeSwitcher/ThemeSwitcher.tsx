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
      className='fixed bottom-6 right-6 flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-lg transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-100 hover:shadow-xl dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:border-indigo-300 dark:hover:bg-slate-700'
    >
      {!darkMode ? <MoonIcon className='h-5 w-5 text-indigo-500' /> : <SunIcon className='h-5 w-5 text-yellow-400' />}
      <span className='ml-2'>{!darkMode ? 'Dark mode' : 'Light mode'}</span>
    </button>
  )
}

export default ThemeSwitcher
