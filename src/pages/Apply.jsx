import FadeIn from '../components/FadeIn'
import { useEffect } from 'react'

export default function Apply() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div className="page-apply">
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <FadeIn>
                        <h1 className="text-center mb-lg">Apply for Evaluation</h1>
                        <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
                            AVOLIRO works with a limited number of businesses.
                            <br />
                            This is not a general contact form. This is an application for evaluation.
                        </p>

                        <div className="text-center mb-xl" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <p style={{ marginBottom: '0.5rem' }}>AVOLIRO is not suitable for:</p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>• One-off tasks</li>
                                <li>• Rush projects</li>
                                <li>• Low-budget execution</li>
                            </ul>
                            <p style={{ marginTop: '2rem' }}>
                                If your business requires a structured, long-term system, you may apply below.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <iframe
                            data-tally-src="https://tally.so/embed/ODa6qk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                            loading="lazy"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title="Apply for Evaluation"
                            style={{ background: 'transparent' }}
                        >
                        </iframe>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}
