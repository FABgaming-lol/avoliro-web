import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const links = [
        { name: 'Home', path: '/' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'Systems', path: '/systems' },
        {
            name: 'Divisions',
            path: '/divisions',
            dropdown: [
                { name: 'Brandora', path: '/brandora' },
                { name: 'InkForge', path: '/inkforge' },
                { name: 'Velano', path: '/velano' }
            ]
        },
        { name: 'Work', path: '/work' },
    ]

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo-container">
                    <img src="/avoliro-logo.png" alt="AVOLIRO" className="logo-img" />
                </Link>

                {/* Desktop */}
                <div className="nav-links desktop-only">
                    {links.map(link => {
                        if (link.dropdown) {
                            return (
                                <div className="nav-item-dropdown" key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`nav-link ${location.pathname.includes(link.path) || link.dropdown.some(d => location.pathname === d.path) ? 'active' : ''}`}
                                    >
                                        {link.name} <ChevronDown size={14} className="dropdown-icon" />
                                    </Link>
                                    <div className="dropdown-menu">
                                        {link.dropdown.map(item => (
                                            <Link key={item.path} to={item.path} className="dropdown-link">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                    <Link to="/apply" className="nav-link nav-cta">Apply for Evaluation</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        {links.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="mobile-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/apply" className="mobile-link highlight" onClick={() => setIsOpen(false)}>Apply for Evaluation</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
