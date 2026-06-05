// Tiny dependency-free client-side router (clean URLs + back/forward support).
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const RouterContext = createContext(null)

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => window.location.pathname || '/')

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || '/')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to) => {
    if (to === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    window.history.pushState({}, '', to)
    setPath(to)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  return useContext(RouterContext)
}

// Drop-in <Link to="/services">. External (http/tel/mailto) links use a plain anchor.
export function Link({ to, className, children, onClick, ...rest }) {
  const { path, navigate } = useRouter()
  const isExternal = /^https?:\/\//i.test(to) || to.startsWith('tel:') || to.startsWith('mailto:')

  if (isExternal) {
    const isHttp = to.startsWith('http')
    return (
      <a
        href={to}
        className={className}
        target={isHttp ? '_blank' : undefined}
        rel={isHttp ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    )
  }

  const handle = (e) => {
    e.preventDefault()
    if (onClick) onClick(e)
    navigate(to)
  }

  return (
    <a
      href={to}
      className={className}
      aria-current={path === to ? 'page' : undefined}
      onClick={handle}
      {...rest}
    >
      {children}
    </a>
  )
}
