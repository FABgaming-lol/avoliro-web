import FadeIn from '../components/FadeIn'
import './Systems.css'

export default function Systems() {
    const components = [
        { name: "Brand Foundation", desc: "Core identity and strategic positioning." },
        { name: "Digital Presence", desc: "Web architecture and user interfaces." },
        { name: "Marketing Structure", desc: "Acquisition channels and messaging pipelines." },
        { name: "Automation", desc: "Operational workflow efficiency where required." },
        { name: "Growth Alignment", desc: "Long-term scaling strategy." },
    ]

    return (
        <div className="page-systems">
            <section className="section">
                <div className="container">
                    <FadeIn>
                        <h1>Business Systems</h1>
                        <p className="intro-text">
                            AVOLIRO does not offer standalone services.
                            <br />
                            Every engagement is delivered as a complete business system.
                        </p>
                    </FadeIn>

                    <div className="systems-grid">
                        {components.map((comp, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="system-card">
                                <h3>{comp.name}</h3>
                                <p>{comp.desc}</p>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.6}>
                        <div className="mt-xl">
                            <h3>This approach ensures:</h3>
                            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                <li>• Consistency</li>
                                <li>• Reliability</li>
                                <li>• Long-term scalability</li>
                            </ul>
                            <p>Systems outperform isolated work.</p>
                            <p>AVOLIRO builds systems.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}
