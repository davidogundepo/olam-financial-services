'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out to Olam Financial Services. Our advisors will contact you shortly.');
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main id="top">
        <header className="pill-header slide-up-delay-1">
          <div className="header-content">
            <div className="logo-img-wrapper" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Olam Financial Services Logo" className="logo-image" style={{cursor: 'pointer'}} />
            </div>
            
            <div className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
              <span></span><span></span><span></span>
            </div>

            <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="#about" onClick={closeMobileMenu}>The Firm</a></li>
                <li><a href="#services" onClick={closeMobileMenu}>Expertise</a></li>
                <li><a href="#team" onClick={closeMobileMenu}>Leadership</a></li>
                <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="hero-split">
          <div className="container hero-grid">
            <div className="hero-text fade-in-up">
              <h1>Architects of <span>Generational</span> Wealth.</h1>
              <p>Experience sophisticated wealth management, strategic advisory, and personalized financial planning designed exclusively for the modern elite.</p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">Schedule Consultation</a>
                <a href="#services" className="btn btn-secondary">Our Expertise</a>
              </div>
            </div>
            <div className="hero-image-wrapper slide-left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Financial Architecture" />
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2 className="section-title slide-up">First-Class Expertise</h2>
            <p className="section-subtitle slide-up">We offer a comprehensive suite of financial solutions tailored to your unique objectives and designed to preserve and grow your assets.</p>
            
            <div className="service-row slide-up-delay-1">
              <div className="service-text">
                <div className="service-icon-large">💼</div>
                <h3>Wealth Management</h3>
                <p>Bespoke portfolio management strategies ensuring your assets are optimized for growth while mitigating risk in volatile markets. We align our advanced quantitative models with your personal legacy goals.</p>
              </div>
              <div className="service-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" alt="Wealth Management" />
              </div>
            </div>

            <div className="service-row slide-up-delay-2">
              <div className="service-text">
                <div className="service-icon-large">📈</div>
                <h3>Investment Advisory</h3>
                <p>Data-driven insights and exclusive investment opportunities tailored to institutional and high-net-worth individual clients. Gain access to private markets and algorithmic trading strategies entirely hands-free.</p>
              </div>
              <div className="service-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Investment Advisory" />
              </div>
            </div>

            <div className="service-row slide-up-delay-3">
              <div className="service-text">
                <div className="service-icon-large">🛡️</div>
                <h3>Risk Management</h3>
                <p>Comprehensive analysis to identify vulnerabilities and construct robust frameworks that protect against absolute financial uncertainties. Peace of mind engineered by world-class forensic analysts.</p>
              </div>
              <div className="service-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" alt="Risk Management" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="about-box slide-up">
              <h2>A Legacy of Excellence</h2>
              <p>At Olam Financial Services, we believe that true wealth management transcends numbers—it&apos;s about empowering your vision for the future. Founded on principles of integrity, transparency, and uncompromising excellence, we curate financial strategies that align with your highest aspirations.</p>
              <p>Our team of seasoned professionals brings decades of global market experience, providing you with a tactical advantage and profound peace of mind. We don&apos;t just manage wealth; we engineer legacies.</p>
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container">
            <h2 className="section-title slide-up">Executive Leadership</h2>
            <p className="section-subtitle slide-up">Meet the masterminds orchestrating world-class financial strategy.</p>
            
            <div className="team-grid">
              <div className="team-member slide-up-delay-1">
                <div className="team-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="http://i.pinimg.com/1200x/e5/bd/59/e5bd59648226ae3180f95d1c1d4f10cf.jpg" alt="Obasohan Dimitris" />
                </div>
                <div className="team-info">
                  <h3>Obasohan Dimitris</h3>
                  <p>Managing Director</p>
                </div>
              </div>
              <div className="team-member slide-up-delay-2">
                <div className="team-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://i.pinimg.com/736x/de/46/73/de46731ccd0e1c9d3c00808f5f6a2f33.jpg" alt="Fatima Balogun" />
                </div>
                <div className="team-info">
                  <h3>Fatima Balogun</h3>
                  <p>Head of Risk Management</p>
                </div>
              </div>
              <div className="team-member slide-up-delay-3">
                <div className="team-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://i.pinimg.com/736x/78/9e/3c/789e3c79419d714d1623d04c05213a05.jpg" alt="Adebayo" />
                </div>
                <div className="team-info">
                  <h3>Adebayo</h3>
                  <p>Chief Investment Officer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-card slide-up">
              <div className="contact-info">
                <h3>Confidential Dialogue</h3>
                <p>Step into a new echelon of financial service. Reach out to our advisors to begin a highly confidential dialogue regarding your investment objectives and structuring needs.</p>
                
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>14 Adeola Odeku St, Victoria Island, Lagos</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>07079693500</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>david.oludepo@gmail.com</span>
                </div>
              </div>
              
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Private Email Address" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Nature of Inquiry" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Transmit Message</button>
              </form>
            </div>
          </div>
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
                <a href="#about">Platform</a>
                <a href="#about">The Firm</a>
                <a href="#services">Expertise</a>
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
