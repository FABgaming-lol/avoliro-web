import FadeIn from '../components/FadeIn'
import { Link } from 'react-router-dom'
import './Divisions.css'

export default function Divisions() {
    const divisions = [
        { name: "Brandora", role: "Brand Strategy and Positioning", desc: "Defines what the brand is and how it communicates.", path: "/brandora" },
        { name: "InkForge", role: "Design and Visual Identity", desc: "Executes how the brand looks.", path: "/inkforge" },
        { name: "Velano", role: "Development and Engineering", desc: "Builds how the system functions.", path: "/velano" },
    ]

    return (
        <div className="page-divisions">
            <section className="section">
                <div className="container">
                    <FadeIn>
                        <h1>AVOLIRO Divisions</h1>
                        <p className="intro-text">
                            AVOLIRO operates through specialized internal divisions.
                            Each division has a defined responsibility and clear boundaries.
                        </p>
                        <p className="intro-text">
                            Divisions work together as part of one system.
                        </p>
                    </FadeIn>

                    <div className="divisions-list">
                        {divisions.map((div, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="division-card">
                                <div className="division-info">
                                    <h3>{div.name}</h3>
                                    <div className="division-role">{div.role}</div>
                                    <p>{div.desc}</p>
                                </div>
                                <Link to={div.path} className="btn-outline">View Division</Link>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.4}>
                        <p className="mt-xl text-center" style={{ color: 'var(--text-secondary)' }}>
                            Each division has its own dedicated scope and execution standards.
                        </p>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}
