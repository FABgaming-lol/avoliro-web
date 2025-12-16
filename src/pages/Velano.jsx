import FadeIn from '../components/FadeIn'
import './DivisionPage.css'

export default function Velano() {
    const specs = [
        "Websites",
        "Web applications",
        "Internal systems",
        "Performance optimization",
        "Scalability",
        "Technical reliability"
    ]

    return (
        <div className="page-division">
            <section className="section bg-secondary">
                <div className="container">
                    <FadeIn>
                        <span className="overline">Development and Engineering</span>
                        <h1 className="display-title">Velano</h1>
                        <p className="intro-text">
                            Velano builds how the system functions.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <FadeIn>
                        <h3>Responsibilities</h3>
                        <ul className="specs-list">
                            {specs.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>

                        <div className="mt-xl">
                            <p>Velano ensures the system operates cleanly, securely, and efficiently.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}
