import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const AppProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const mobileMenu = document.querySelector('#mobile-menu')
    if (window.HSOverlay && mobileMenu) {
      try {
        window.HSOverlay.close('#mobile-menu')
      } catch (e) {}
    }
    document.getElementById('mobile-menu-backdrop')?.remove()
    document.body.classList.remove('hs-overlay-body-open')
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''

    import('preline').then(() => {
      if (typeof window.HSStaticMethods?.autoInit === 'function') {
        window.HSStaticMethods.autoInit()
      }
    })
  }, [location.pathname])

  return <>{children}</>
}

export default AppProvidersWrapper
