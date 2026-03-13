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

        <footer>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Olam Financial Services. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
