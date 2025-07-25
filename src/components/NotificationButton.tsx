'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'

export function NotificationButton() {
  const [permission, setPermission] = useState('default')
  const [subscription, setSubscription] = useState<PushSubscription | null>(null)

  useEffect(() => {
    const checkSubscription = async () => {
      if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
        setPermission(Notification.permission)
        const reg = await navigator.serviceWorker.ready
        const sub = await reg.pushManager.getSubscription()
        if (sub) {
          setSubscription(sub)
        }
      }
    }
    checkSubscription()
  }, [])

  const subscribe = async () => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const perm = await Notification.requestPermission()
      setPermission(perm)
      if (perm === 'granted') {
        const reg = await navigator.serviceWorker.ready
        const sub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
        })
        setSubscription(sub)
      }
    }
  }

  const sendNotification = async () => {
    if (!subscription) {
      alert('Error: No subscription found.')
      return
    }
    try {
      await fetch('/api/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscription }),
      })
      alert('Notification sent successfully!')
    } catch (e) {
      alert('Error sending notification.')
      console.error(e)
    }
  }

  if (permission === 'denied') {
    return <p className="text-sm text-red-500">You have blocked notifications.</p>
  }

  if (subscription) {
    return (
      <Button
        onClick={sendNotification}
        className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg"
      >
        <Bell className="h-5 w-5" /> Send Demo Notification
      </Button>
    )
  }

  return (
    <Button
      onClick={subscribe}
      className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg"
    >
      <Bell className="h-5 w-5" /> Enable Notifications
    </Button>
  )
}