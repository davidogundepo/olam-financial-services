'use client';
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Olam Financial Services</title>
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
          <h1 style={{ color: 'var(--gold)', marginBottom: '2rem', fontSize: '3rem' }}>Privacy Policy</h1>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 style={{ color: 'var(--emerald)', marginTop: '2rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>At Olam Financial Services, we prioritize your confidentiality. We collect personal and financial information exclusively to provide bespoke wealth management and advisory services. This securely stored data may include identification, investment history, and income declarations.</p>

          <h2 style={{ color: 'var(--emerald)', marginTop: '2rem', marginBottom: '1rem' }}>2. How We Use Your Data</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>Your personal data is utilized strictly for account administration, regulatory compliance, mathematical risk modeling, and delivering tailored investment portfolios. We firmly abide by global financial privacy regulations such as the NDPR and GDPR.</p>

          <h2 style={{ color: 'var(--emerald)', marginTop: '2rem', marginBottom: '1rem' }}>3. Data Sharing & Security</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>We absolutely do not sell your personal data. Your information is only shared with trusted institutional partners critical to executing your trades or when explicitly mandated by legal authorities. Our servers employ bank-grade encryption to ensure absolute security.</p>

          <h2 style={{ color: 'var(--emerald)', marginTop: '2rem', marginBottom: '1rem' }}>4. Contact Us</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>For any queries regarding your data privacy, please contact our data protection officer at <strong>david.oludepo@gmail.com</strong>.</p>
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
