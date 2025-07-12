import { useState, useEffect } from 'react'

export default function Title() {
  const [title, setTitle] = useState('')

  useEffect(() => {
    const appTitle = import.meta.env.VITE_APP_TITLE || 'Default Title'
    setTitle(appTitle)
  }, [])

  return (
    <h1 className="title">
      {title}
    </h1>
  )
}