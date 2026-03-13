import Head from 'next/head';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Olam Financial Services</title>
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
          <h1 style={{ color: 'var(--gold)', marginBottom: '2rem', fontSize: '3rem' }}>Terms of Service</h1>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 style={{ color: 'var(--emerald)', marginTop: '2rem', marginBottom: '1rem' }}>1. Agreement to Terms</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>By accessing and utilizing the advisory and wealth management services of Olam Financial Services, you enter into a legally binding agreement with our firm. If you do not agree to these terms, simply abstain from utilizing our services.</p>

          <h2 style={{ color: 'var(--emerald)', marginTop: '2rem', marginBottom: '1rem' }}>2. Financial Services</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>Olam Financial Services offers strategic portfolio structuring, risk management, and quantitative advisory. All advisory services are conducted with fiduciary responsibility, utilizing the information provided by the client.</p>

          <h2 style={{ color: 'var(--emerald)', marginTop: '2rem', marginBottom: '1rem' }}>3. User Representations</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>You warrant that all information provided to Olam Financial Services is accurate, truthful, and lawfully yours to distribute. Engaging in fraudulent reporting or failing to KYC requirements will result in immediate termination of services.</p>

          <h2 style={{ color: 'var(--emerald)', marginTop: '2rem', marginBottom: '1rem' }}>4. Governing Law</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.</p>
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
