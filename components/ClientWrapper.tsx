"use client"
import { useEffect, useState } from "react"

export default function ClientWrapper() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
    console.log("Client-only logic loaded.")
  }, [])

  return null
}
