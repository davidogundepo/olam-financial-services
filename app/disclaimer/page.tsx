'use client';
import Head from 'next/head';
import Link from 'next/link';

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer | Olam Financial Services</title>
      </Head>
      <main className="legal-page">
        <header className="pill-header" style={{ position: 'relative', marginTop: '20px', background: 'rgba(30, 41, 59, 1)' }}>
          <div className="header-content">
            <div className="logo-img-wrapper">
              <Link href="/">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Olam Financial Services Logo" className="logo-image" style={{cursor: 'pointer'}} />
              </Link>
            </div>
            <nav>
              <ul>
                <li><Link href="/">Back to Home</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="container" style={{ padding: '6rem 2rem', color: 'var(--text-main)' }}>
          <h1 style={{ color: 'var(--gold)', marginBottom: '2rem', fontSize: '3rem' }}>Investment Disclaimer</h1>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 style={{ color: 'var(--emerald)', marginTop: '2rem', marginBottom: '1rem' }}>1. No Guarantee of Returns</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>Past performance is not indicative of future results. All investments involve substantial risk, including the absolute loss of principal. Olam Financial Services cannot guarantee profit nor protect against structural loss in volatile markets.</p>

          <h2 style={{ color: 'var(--emerald)', marginTop: '2rem', marginBottom: '1rem' }}>2. General Information Only</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>Information provided on this website is intended solely for educational and informational purposes. It does not constitute targeted financial, tax, or legal advice until a formal fiduciary relationship is established.</p>

          <h2 style={{ color: 'var(--emerald)', marginTop: '2rem', marginBottom: '1rem' }}>3. Assumption of Risk</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>By utilizing our services, you acknowledge that you are sophisticated enough to understand market risks, and that you assume complete responsibility for your resultant financial outcomes.</p>
        </section>

        <footer className="elegant-footer">
          <div className="container">
            <div className="footer-top">
              <div className="footer-brand">
                <div className="footer-logo-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="Olam Financial Services Logo" className="footer-logo-img" />
                </div>
                <p>Engineered for generational growth, built upon unyielding foundations of quantitative rigor and global insights.</p>
                <div className="social-links">
                  <a href="#" className="social-icon">LinkedIn</a>
                  <a href="#" className="social-icon">Twitter</a>
                  <a href="#" className="social-icon">Bloomberg</a>
                </div>
              </div>
              <div className="footer-nav-col">
                <h4>Navigation</h4>
                <Link href="/#about">Platform</Link>
                <Link href="/#about">The Firm</Link>
                <Link href="/#services">Expertise</Link>
              </div>
              <div className="footer-nav-col">
                <h4>Legal</h4>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/disclaimer">Disclaimer</Link>
              </div>
              <div className="footer-newsletter">
                <h4>Market Insights</h4>
                <p>Subscribe to our exclusive quantitative research newsletter.</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Institutional Email" required />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="footer-bottom elegant-footer-bottom">
              <p>&copy; {new Date().getFullYear()} Olam Financial Services. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
