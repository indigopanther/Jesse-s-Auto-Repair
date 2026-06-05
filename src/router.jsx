// Tiny dependency-free client-side router (clean URLs + back/forward + #anchors).
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const RouterContext = createContext(null)

function scrollToHash(hash) {
  if (!hash) return false
  const el = document.getElementById(hash)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return true
  }
  return false
}

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => window.location.pathname || '/')

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || '/')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // After a route (and its DOM) renders, honor any #hash target in the URL.
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace('#', ''))
    if (hash) requestAnimationFrame(() => scrollToHash(hash))
  }, [path])

  const navigate = useCallback((to) => {
    const hashIndex = to.indexOf('#')
    const pathname = hashIndex === -1 ? to : to.slice(0, hashIndex)
    const hash = hashIndex === -1 ? '' : to.slice(hashIndex + 1)
    const target = pathname || window.location.pathname
    const samePage = target === window.location.pathname

    window.history.pushState({}, '', to)
    setPath(target)

    if (hash) {
      requestAnimationFrame(() => {
        if (!scrollToHash(hash)) window.scrollTo({ top: 0 })
      })
    } else {
      window.scrollTo({ top: 0, behavior: samePage ? 'smooth' : 'auto' })
    }
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

  const current = path === to || (to.includes('#') && to.slice(0, to.indexOf('#')) === path)
  return (
    <a
      href={to}
      className={className}
      aria-current={current ? 'page' : undefined}
      onClick={handle}
      {...rest}
    >
      {children}
    </a>
  )
}
