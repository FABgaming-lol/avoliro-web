import FadeIn from '../components/FadeIn'
import './HowItWorks.css'

export default function HowItWorks() {
    const steps = [
        { title: "Step 1 — Evaluation", desc: "We assess the business, goals, and requirements. Only suitable projects are accepted." },
        { title: "Step 2 — System Planning", desc: "A complete business system is planned before execution begins. Brand, technology, and growth are aligned at this stage." },
        { title: "Step 3 — Design and Development", desc: "Design and engineering are executed together. Nothing is built in isolation." },
        { title: "Step 4 — Deployment", desc: "The system is launched in a controlled and stable state." },
        { title: "Step 5 — Ongoing Optimization", desc: "The system is refined for performance, clarity, and scalability." }
    ]

    return (
        <div className="page-how-it-works">
            <section className="section">
                <div className="container">
                    <FadeIn>
                        <h1>How AVOLIRO Works</h1>
                    </FadeIn>

                    <div className="steps-list">
                        {steps.map((step, index) => (
                            <FadeIn key={index} delay={index * 0.1} className="step-item">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.6}>
                        <p className="intro-text mt-lg">
                            No rushed execution. No disconnected decisions. Only structured delivery.
                        </p>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}
