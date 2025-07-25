'use client'

import { useEffect } from 'react'

export function ServiceWorkerRegistrar() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => console.log('Service Worker registration successful, scope is:', registration.scope))
        .catch((error) => console.log('Service Worker registration failed:', error))
    }
  }, [])

  return null // This component renders nothing.
}