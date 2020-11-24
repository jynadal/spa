import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
    <div className="__dml header">
        <ul>
            <Link to="/" className="link">Home</Link>
            <Link to="/products" className="link">Store</Link>
            <Link to="/about-us" className="link">About us</Link>
        </ul>
    </div>
    )
}
