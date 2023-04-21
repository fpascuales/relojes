import React, { useEffect, useState } from 'react'
import "./Clock.css"
const Clock = () => {
  const date = new Date()
    const [clockState, setClockState] = useState(date.toLocaleTimeString())
    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setClockState(date.toLocaleTimeString())
        }, 1000)
    }, [])

  return (
    <div>
        <p className='clock'>{clockState}</p>
    </div>
  )
}

export default Clock