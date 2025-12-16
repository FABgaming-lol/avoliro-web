import FadeIn from '../components/FadeIn'
import './PricingPhilosophy.css'
import './DivisionPage.css' // Reusing display title styles

export default function PricingPhilosophy() {
    return (
        <div className="page-division">
            <section className="section bg-secondary">
                <div className="container">
                    <FadeIn>
                        <span className="overline">Structure & Responsibility</span>
                        <h1 className="display-title">Pricing Philosophy</h1>
                        <p className="intro-text">
                            AVOLIRO does not sell services.<br />
                            AVOLIRO prices systems.
                        </p>
                        <p className="pricing-intro">
                            Pricing is based on scope, responsibility, and impact, not hours or tasks.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <FadeIn>
                        <div className="pricing-section">
                            <p>Every engagement is different.</p>
                            <p>Every system is built for a specific business.</p>
                            <p>For this reason, fixed public price lists are not used.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="pricing-section">
                            <h3>Why AVOLIRO Does Not Use Fixed Pricing</h3>
                            <p>Most agencies price by:</p>
                            <ul className="pricing-list">
                                <li>Individual services</li>
                                <li>Hours worked</li>
                                <li>Feature counts</li>
                            </ul>
                            <p>This approach creates fragmented work and short-term thinking.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="pricing-section">
                            <p>AVOLIRO prices based on:</p>
                            <ul className="pricing-list">
                                <li>Business complexity</li>
                                <li>System depth</li>
                                <li>Long-term responsibility</li>
                                <li>Strategic impact</li>
                            </ul>
                            <p>Pricing reflects the level of ownership AVOLIRO takes in the outcome.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="pricing-section">
                            <h3>What Pricing Represents</h3>
                            <p>AVOLIRO pricing includes:</p>
                            <ul className="pricing-list">
                                <li>Strategic planning before execution</li>
                                <li>Cross-division collaboration</li>
                                <li>Design, engineering, and alignment</li>
                                <li>System stability and scalability</li>
                                <li>Controlled delivery, not rushed output</li>
                            </ul>
                            <p>You are not paying for assets.</p>
                            <p>You are paying for structure and reliability.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="pricing-section">
                            <h3>Engagement Structure</h3>
                            <p>AVOLIRO engagements are structured as complete system builds.</p>
                            <p>This means:</p>
                            <ul className="pricing-list">
                                <li>No standalone tasks</li>
                                <li>No partial execution</li>
                                <li>No disconnected deliverables</li>
                            </ul>
                            <p>If a system cannot be built correctly, the project is not accepted.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <div className="pricing-section">
                            <h3>Investment Range (Transparency Without Numbers)</h3>
                            <p>While exact pricing is determined after evaluation, engagements generally fall into defined investment tiers based on system depth.</p>

                            <div className="investment-tier">
                                <h4>Smaller systems</h4>
                                <p>Focused scope. Clear objectives.</p>
                                <p>Built for early-stage or controlled launches.</p>
                            </div>

                            <div className="investment-tier">
                                <h4>Mid-level systems</h4>
                                <p>Broader scope. Multiple components.</p>
                                <p>Built for growth and operational stability.</p>
                            </div>

                            <div className="investment-tier">
                                <h4>Full systems</h4>
                                <p>High complexity. Multiple integrations.</p>
                                <p>Built for scale, reliability, and long-term operation.</p>
                            </div>

                            <p>Exact pricing is discussed only after evaluation.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <div className="pricing-section">
                            <h3>What AVOLIRO Is Not Priced For</h3>
                            <p>AVOLIRO is not priced for:</p>
                            <ul className="pricing-list">
                                <li>One-off tasks</li>
                                <li>Design-only or development-only work</li>
                                <li>Rush deadlines</li>
                                <li>Price comparison shopping</li>
                            </ul>
                            <p>If cost is the primary decision factor, AVOLIRO is not the right fit.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.7}>
                        <div className="pricing-section">
                            <h3>Evaluation Before Pricing</h3>
                            <p>Every project begins with an evaluation.</p>
                            <p>During evaluation:</p>
                            <ul className="pricing-list">
                                <li>Business goals are reviewed</li>
                                <li>System requirements are defined</li>
                                <li>Scope and responsibility are clarified</li>
                            </ul>
                            <p>Only after this process is pricing determined.</p>
                            <p>This ensures:</p>
                            <ul className="pricing-list">
                                <li>Accurate scope</li>
                                <li>Fair pricing</li>
                                <li>Controlled execution</li>
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <div className="pricing-section mt-xl">
                            <h3>Final Note</h3>
                            <p>AVOLIRO pricing is designed to:</p>
                            <ul className="pricing-list">
                                <li>Protect quality</li>
                                <li>Maintain system integrity</li>
                                <li>Ensure long-term success</li>
                            </ul>
                            <p>This approach limits the number of clients.</p>
                            <p>It ensures focus, clarity, and results.</p>
                            <p className="mt-lg">If your business requires a structured, long-term system, you may apply for evaluation.</p>
                        </div>
                    </FadeIn>

                </div>
            </section>
        </div>
    )
}
