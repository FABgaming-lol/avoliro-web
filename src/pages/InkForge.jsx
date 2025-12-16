import FadeIn from '../components/FadeIn'
import './DivisionPage.css'

export default function InkForge() {
    const specs = [
        "Logo systems",
        "Visual identity",
        "Typography",
        "Color systems",
        "Marketing visuals",
        "Brand guidelines"
    ]

    return (
        <div className="page-division">
            <section className="section bg-secondary">
                <div className="container">
                    <FadeIn>
                        <span className="overline">Design and Visual Identity</span>
                        <h1 className="display-title">InkForge</h1>
                        <p className="intro-text">
                            InkForge executes how the brand looks.
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
                            <p>InkForge designs based on Brandora’s strategy.</p>
                            <p>No visuals are created without strategic alignment.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}
