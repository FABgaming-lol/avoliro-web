import FadeIn from '../components/FadeIn'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <div className="page-home">
            <section className="hero section">
                <div className="container">
                    <FadeIn>
                        <h1 className="hero-title">AVOLIRO builds complete business systems.</h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="hero-subtext">
                            Most businesses fail not because of lack of effort, but because everything is built separately.
                            <br /><br />
                            One person handles branding. Another builds the website. Another runs marketing.
                            <br />
                            Nothing connects. Decisions conflict. Growth stalls.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <div className="hero-cta">
                            <Link to="/apply" className="btn">Apply for Evaluation</Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section bg-secondary">
                <div className="container">
                    <FadeIn>
                        <h2>AVOLIRO removes fragmentation.</h2>
                        <p>
                            We design, build, and structure businesses as one connected system.
                            Brand, technology, and growth are aligned from the start.
                        </p>
                        <p>
                            AVOLIRO operates under a selective engagement model.<br />
                            Projects are accepted by evaluation only.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <FadeIn>
                        <h2>Process Overview</h2>
                        <div className="process-flow">
                            <span className="step">Evaluate</span> <span className="arrow">→</span>
                            <span className="step">Design</span> <span className="arrow">→</span>
                            <span className="step">Build</span> <span className="arrow">→</span>
                            <span className="step">Launch</span> <span className="arrow">→</span>
                            <span className="step">Scale</span>
                        </div>
                        <p className="mt-lg">
                            Each stage is structured. Each stage is controlled. Each stage supports the next.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="section bg-secondary">
                <div className="container">
                    <FadeIn>
                        <h2>WHY AVOLIRO</h2>
                        <p className="mb-lg">Fragmented execution creates weak brands.</p>

                        <h3 className="mb-md">Disconnected services cause:</h3>
                        <ul className="mb-xl" style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                            <li>• Inconsistent identity</li>
                            <li>• Poor technical foundations</li>
                            <li>• Inefficient marketing</li>
                            <li>• Slow growth</li>
                        </ul>

                        <h2>AVOLIRO works differently.</h2>
                        <p>
                            We do not sell services. We build systems.
                        </p>
                        <p>
                            Every engagement is designed to function as a single, scalable unit.
                        </p>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}
