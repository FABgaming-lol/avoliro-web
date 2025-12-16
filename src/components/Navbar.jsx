import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
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
        { name: 'Pricing', path: '/pricing-philosophy' },
    ]

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Link to="/" className="logo-container">
                        <img src="/avoliro-logo.png" alt="AVOLIRO" className="logo-img" />
                    </Link>
                </motion.div>

                {/* Desktop */}
                <div className="nav-links desktop-only">
                    {links.map((link, i) => {
                        if (link.dropdown) {
                            return (
                                <motion.div
                                    className="nav-item-dropdown"
                                    key={link.path}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                >
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
                                </motion.div>
                            )
                        }
                        return (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Link
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        )
                    })}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: links.length * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Link to="/apply" className="nav-link nav-cta">Apply for Evaluation</Link>
                    </motion.div>
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
