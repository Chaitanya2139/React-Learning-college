import React, { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Booklist = () => {
    const [books, setBooks] = useState([])
    const [form, setForm] = useState({ title: '', author: '', genre: '' })
    const { theme, toggleTheme } = useContext(ThemeContext)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const addBook = () => {
        if (!form.title || !form.author) return
        setBooks([...books, form])
        setForm({ title: '', author: '', genre: '' })
    }

    return (
        <div className="container">
            <div className="top-row">
                <h2 className="heading">Book List</h2>
                <div className="muted">{books.length} books</div>
            </div>

            <div className="form-row">
                <input className="input" name="title" value={form.title} onChange={handleChange} placeholder="Book Title" />
                <input className="input" name="author" value={form.author} onChange={handleChange} placeholder="Author" />
                <input className="input" name="genre" value={form.genre} onChange={handleChange} placeholder="Genre" />

                <button className="btn primary" onClick={addBook}>Add Book</button>
            </div>

            <div className="booklist border-t pt-4">
                {books.length === 0 ? (
                    <p className="muted italic text-center">No books added yet. Start building your library!</p>
                ) : (
                    <ul>
                        {books.map((book, index) => (
                            <li key={index} className="book-item">
                                <div>
                                    <strong>{book.title}</strong>
                                    <div className="muted">by {book.author}</div>
                                </div>
                                <div className="muted">{book.genre}</div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="theme-box">
                <h1>Current theme: {theme}</h1>
                <button className="btn" onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </div>
    )
}

export default Booklist

