import FadeIn from '../components/FadeIn'
import './DivisionPage.css'

export default function Brandora() {
    const specs = [
        "Brand research",
        "Market positioning",
        "Naming systems",
        "Messaging structure",
        "Brand architecture",
        "Strategic consistency"
    ]

    return (
        <div className="page-division">
            <section className="section bg-secondary">
                <div className="container">
                    <FadeIn>
                        <span className="overline">Brand Strategy and Positioning</span>
                        <h1 className="display-title">Brandora</h1>
                        <p className="intro-text">
                            Brandora defines what the brand is and how it communicates.
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
                            <p>Brandora does not design visuals.</p>
                            <p>Brandora defines direction.</p>
                            <p>Every decision downstream is guided by this foundation.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}
