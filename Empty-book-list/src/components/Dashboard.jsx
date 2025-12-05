import React from 'react'
import { useState, useEffect } from 'react';

const Dashboard = () => {
    const [time, setTime] = useState(new Date())
    const [quote, setQuote] = useState({ quote: 'Loading...', author: '' })

    useEffect(() => {
        const timerID = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(timerID)
    }, [])

    const fetchNewQuote = async () => {
        try {
            const response = await fetch('https://dummyjson.com/quotes/random')
            const data = await response.json()
            // API returns { id, quote, author }
            setQuote({ quote: data.quote ?? data.content ?? 'No quote', author: data.author ?? '' })
        } catch (error) {
            setQuote({ quote: 'Failed to fetch quote', author: 'System' })
        }
    }

    useEffect(() => { fetchNewQuote() }, [])

    return (
        <div className="container">
            <h2 className="heading">Dashboard</h2>
            <div className="dashboard-card">
                <p className="muted">Current time</p>
                <h1 className="time-large">{time.toLocaleTimeString()}</h1>

                <div>
                    <p>{quote.quote}</p>
                    <p className="muted">-{quote.author}</p>
                </div>

                <button className="btn" onClick={fetchNewQuote}>Get new quote</button>
            </div>
        </div>
    )
}

export default Dashboard
