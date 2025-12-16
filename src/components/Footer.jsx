import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo-link">
                            <img src="/avoliro-logo.png" alt="AVOLIRO" className="footer-logo-img" />
                        </Link>
                        <p className="authority-text">
                            AVOLIRO builds complete business systems through structured design, engineering, and strategy.<br />
                            Projects are accepted by evaluation only.
                        </p>
                    </div>

                    <div className="footer-links">
                        <Link to="/systems">Systems</Link>
                        <Link to="/divisions">Divisions</Link>
                        <Link to="/work">Work</Link>
                        <Link to="/apply">Apply</Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} AVOLIRO. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
