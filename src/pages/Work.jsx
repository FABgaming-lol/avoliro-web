import FadeIn from '../components/FadeIn'
import './Work.css'

export default function Work() {
    const projects = [
        { client: "Aeros Systems", scope: "Full System Architecture", year: "2024", desc: "Rebranded and re-platformed a logistics provider." },
        { client: "Veridian", scope: "Brand & Digital", year: "2023", desc: "Established visual identity and e-commerce infrastructure." },
        { client: "Nexus Capital", scope: "Automation & Growth", year: "2023", desc: "Designed lead acquisition workflow and internal automation." }
    ]

    return (
        <div className="page-work">
            <section className="section">
                <div className="container">
                    <FadeIn>
                        <h1>Selected Work</h1>
                        <p className="intro-text">
                            AVOLIRO presents only selected projects.
                            <br />
                            Each project represents a complete system build.
                        </p>
                        <p className="intro-text" style={{ fontSize: '1rem', marginTop: '1rem' }}>
                            No experimental work. No unfinished execution.<br />
                            Details are kept minimal by design.
                        </p>
                    </FadeIn>

                    <div className="work-list">
                        <div className="work-header">
                            <span>Client</span>
                            <span>Scope</span>
                            <span>Year</span>
                            <span>Description</span>
                        </div>
                        {projects.map((p, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="work-row">
                                <div className="work-client">
                                    <h3>{p.client}</h3>
                                    <p className="work-desc-mobile">{p.desc}</p>
                                </div>
                                <div className="work-scope">{p.scope}</div>
                                <div className="work-year">{p.year}</div>
                                <div className="work-desc">{p.desc}</div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
