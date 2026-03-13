'use client';
import Head from 'next/head';

export default function Home() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out. A representative will contact you shortly.');
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main id="top">
        <header className="fixed-header">
          <div className="container header-content">
            <div className="logo-img-wrapper">
              <a href="#top">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Olam Financial Services Logo" className="logo-image" style={{cursor: 'pointer'}} />
              </a>
            </div>
            <nav>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            <button className="mobile-menu-btn">☰</button>
          </div>
        </header>

        <section className="hero">
          <div className="container">
            <div className="hero-content fade-in-up">
              <h1>Elevating Your Financial Future.</h1>
              <p>Experience sophisticated wealth management, strategic advisory, and personalized financial planning designed for the modern elite.</p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">Schedule Consultation</a>
                <a href="#services" className="btn btn-secondary">Explore Services</a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2 className="section-title slide-up">First-Class Services</h2>
            <p className="section-subtitle slide-up">We offer a comprehensive suite of financial solutions tailored to your unique objectives and designed to preserve and grow your wealth.</p>
            
            <div className="services-grid">
              <div className="service-card slide-up-delay-1">
                <div className="service-icon">💼</div>
                <h3>Wealth Management</h3>
                <p>Bespoke portfolio management strategies ensuring your assets are optimized for growth while mitigating risk in volatile markets.</p>
              </div>
              <div className="service-card slide-up-delay-2">
                <div className="service-icon">📈</div>
                <h3>Investment Advisory</h3>
                <p>Data-driven insights and exclusive investment opportunities tailored to institutional and high-net-worth individual clients.</p>
              </div>
              <div className="service-card slide-up-delay-3">
                <div className="service-icon">🛡️</div>
                <h3>Risk Management</h3>
                <p>Comprehensive analysis to identify vulnerabilities and construct robust frameworks that protect against financial uncertainties.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="about-content">
              <div className="about-text slide-right">
                <h2 className="section-title" style={{textAlign: 'left'}}>A Legacy of Excellence</h2>
                <p>At Olam Financial Services, we believe that true wealth management transcends numbers—it's about empowering your vision for the future. Founded on principles of integrity, transparency, and uncompromising excellence, we curate financial strategies that align with your highest aspirations.</p>
                <p>Our team of seasoned professionals brings decades of global market experience, providing you with a tactical advantage and profound peace of mind. We don't just manage wealth; we engineer legacies.</p>
              </div>
              <div className="about-image slide-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" alt="Corporate meeting" />
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container">
            <h2 className="section-title slide-up">Our Leadership</h2>
            <p className="section-subtitle slide-up">Meet the visionary minds orchestrating world-class financial strategies.</p>
            
            <div className="team-grid">
              <div className="team-member slide-up-delay-1">
                <div className="team-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Obasohan Dimitris" />
                </div>
                <h3>Obasohan Dimitris</h3>
                <p>Managing Director</p>
              </div>
              <div className="team-member slide-up-delay-2">
                <div className="team-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Elena Rodriguez" />
                </div>
                <h3>Elena Rodriguez</h3>
                <p>Chief Investment Officer</p>
              </div>
              <div className="team-member slide-up-delay-3">
                <div className="team-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Marcus Chen" />
                </div>
                <h3>Marcus Chen</h3>
                <p>Head of Risk Management</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-container slide-up">
              <div className="contact-info">
                <h3>Connect With Us</h3>
                <p>Step into a new echelon of financial service. Reach out to our advisors to begin a confidential dialogue about your objectives.</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span>Nigeria</span>
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
              </div>
              
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="How can we assist you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{alignSelf: 'flex-start'}}>Send Message</button>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="footer-logo-wrapper">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/logo.png" alt="Olam Financial Services Logo" className="footer-logo-img" />
            </div>
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} Olam Financial Services. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
