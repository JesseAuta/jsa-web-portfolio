import { QRCodeSVG } from 'qrcode.react'

const expertise = [
  {
    number: '01',
    title: 'Web and Software development',
    description:
      'Building thoughtful web applications and software with a focus on clear, user-friendly experiences and dependable delivery.',
    tags: ['Web applications', 'React & Next.js', 'TypeScript'],
  },
  {
    number: '02',
    title: 'IT systems administration',
    description:
      'Supporting the systems, tools, and day-to-day technology that help teams stay connected and productive.',
    tags: ['IT systems', 'Administration', 'Support'],
  },
  {
    number: '03',
    title: 'IT & services',
    description:
      'Bringing a service-minded approach to IT: solving practical problems and making technology easier to work with.',
    tags: ['IT services', 'Troubleshooting', 'User-first'],
  },
]

const portfolioUrl = 'https://jesseauta.github.io/jsa-web-portfolio/'

const experiences = [
  {
    type: 'CURRENT ROLE',
    title: 'IT Services Specialist & Systems Administrator',
    organization: 'Digital Impacts',
    description:
      'Working across web and software development and systems administration, bringing a service-first perspective to the technology people rely on.',
    mark: 'DI',
  },
  {
    type: 'INTERNSHIP',
    title: 'Intern',
    organization: 'Crowds One Voice',
    description: 'Internship experience with Crowds One Voice.',
    mark: 'CV',
  },
  {
    type: 'TEAM PROJECT',
    title: 'JOM — Auto Repair Service Platform',
    organization: 'JOM team project',
    description:
      'Collaborated on a web platform for an auto repair service, featuring service search and an interactive location map.',
    mark: 'JOM',
    link: 'https://github.com/JesseAuta/JOM',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M11.667 3.333h5v5M16.25 3.75l-7.5 7.5" />
      <path d="M15 10.833v4.584a1.25 1.25 0 0 1-1.25 1.25H4.583a1.25 1.25 0 0 1-1.25-1.25V6.25A1.25 1.25 0 0 1 4.583 5h4.584" />
    </svg>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Jesse Auta home">
          <span className="wordmark-mark">J</span>
          <span>JESSE AUTA</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </nav>

        <div className="header-socials">
          <a
            className="header-link"
            href="https://github.com/JesseAuta"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ExternalIcon />
          </a>
          <a
            className="header-link"
            href="https://www.linkedin.com/in/jesse-auta-8a6681195/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            LinkedIn <ExternalIcon />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              IT · WEB · SYSTEMS
            </div>
            <h1>
              Technology,
              <br />
              made <span className="highlight">useful.</span>
            </h1>
            <p className="hero-description">
              I’m Jesse — an IT Services Specialist &amp; Systems
              Administrator focused on web and software development at Digital
              Impacts.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#expertise">
                Explore my work <ArrowIcon />
              </a>
              <a
                className="text-link"
                href="https://github.com/JesseAuta"
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub <ExternalIcon />
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract systems illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-cross cross-one" />
            <div className="art-cross cross-two" />
            <div className="art-center">
              <span className="center-kicker">THINK</span>
              <span className="center-symbol">&amp;</span>
              <span className="center-kicker">BUILD</span>
            </div>
            <div className="art-label label-top">PEOPLE FIRST</div>
            <div className="art-label label-bottom">DETAILS MATTER</div>
            <span className="art-node node-one" />
            <span className="art-node node-two" />
            <span className="art-node node-three" />
          </div>

          <a className="scroll-cue" href="#about">
            <span className="scroll-line" />
            SCROLL TO EXPLORE
          </a>
          <span className="hero-index">01 / 05</span>
        </section>

        <section className="intro section-shell" id="about">
          <div className="section-heading">
            <span className="section-number">01 — ABOUT</span>
            <span className="section-rule" />
          </div>
          <div className="intro-content">
            <h2>
              I bring people and
              <br />
              <span>technology together.</span>
            </h2>
            <div className="intro-aside">
              <p>
                My work sits at the intersection of IT services, web and
                software development, and systems administration. I care about
                making technology practical: easy to use, reliable, and built
                around real needs.
              </p>
              <p className="intro-note">
                Clear thinking. Useful solutions. A thoughtful experience.
              </p>
            </div>
          </div>
        </section>

        <section className="expertise section-shell" id="expertise">
          <div className="section-heading">
            <span className="section-number">02 — WHAT I DO</span>
            <span className="section-rule" />
          </div>
          <div className="expertise-heading">
            <h2>My areas of focus</h2>
            <p>
              A practical blend of digital craft, systems thinking, and
              dependable IT service.
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-card" key={item.number}>
                <div className="card-topline">
                  <span className="card-number">{item.number}</span>
                  <span className="card-arrow">
                    <ArrowIcon />
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="tag-list" aria-label={`${item.title} skills`}>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-shell" id="projects">
          <div className="section-heading">
            <span className="section-number">03 — SELECTED PROJECT</span>
            <span className="section-rule" />
          </div>
          <div className="project-heading">
            <h2>A little of what I build</h2>
            <p>
              A responsive portfolio bringing my work, skills, and approach
              together in one place.
            </p>
          </div>
          <article className="project-feature">
            <div className="project-visual" aria-hidden="true">
              <div className="project-window">
                <div className="project-window-bar">
                  <span />
                  <span />
                  <span />
                  <span className="project-window-label">JESSE AUTA</span>
                </div>
                <div className="project-window-content">
                  <span className="project-window-kicker">IT · WEB · SYSTEMS</span>
                  <span className="project-window-title">
                    Technology,
                    <br />
                    made <strong>useful.</strong>
                  </span>
                  <span className="project-window-line" />
                  <span className="project-window-block" />
                </div>
              </div>
              <span className="project-visual-caption">PERSONAL WEBSITE · 2026</span>
            </div>
            <div className="project-details">
              <span className="project-type">PERSONAL PORTFOLIO</span>
              <h3>Jesse Auta — Portfolio</h3>
              <p>
                Designed and built with React, TypeScript, and Vite. A
                responsive portfolio showcasing my experience in web and
                software development and IT systems administration.
              </p>
              <ul className="tag-list" aria-label="Project technologies">
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
              </ul>
              <a
                className="project-link"
                href="https://github.com/JesseAuta/jsa-web-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                View source <ExternalIcon />
              </a>
            </div>
          </article>
        </section>

        <section className="experience section-shell" id="experience">
          <div className="section-heading">
            <span className="section-number">04 — EXPERIENCE</span>
            <span className="section-rule" />
          </div>
          {experiences.map((experience) => (
            <article className="experience-panel" key={experience.organization}>
              <div className="experience-date">
                {experience.type === 'CURRENT ROLE' && <span className="status-dot" />}
                {experience.type}
              </div>
              <div className="experience-details">
                <h2>{experience.title}</h2>
                <p className="experience-company">{experience.organization}</p>
                <p className="experience-summary">{experience.description}</p>
                {experience.link && (
                  <a
                    className="project-link experience-link"
                    href={experience.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View JOM on GitHub <ExternalIcon />
                  </a>
                )}
              </div>
              <span className="experience-mark" aria-hidden="true">
                {experience.mark}
                <span>.</span>
              </span>
            </article>
          ))}
        </section>

        <section className="closing section-shell" id="contact">
          <div className="closing-copy">
            <span className="section-number">05 — CONNECT</span>
            <h2>
              Let’s make
              <br />
              technology <span>work.</span>
            </h2>
            <p>
              Explore my GitHub profile to see what I’m building and learning.
            </p>
            <a
              className="button button-primary"
              href="https://github.com/JesseAuta"
              target="_blank"
              rel="noreferrer"
            >
              Find me on GitHub <ExternalIcon />
            </a>
            <a
              className="text-link contact-linkedin"
              href="https://www.linkedin.com/in/jesse-auta-8a6681195/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <ExternalIcon />
            </a>
          </div>
          <a
            className="portfolio-qr"
            href={portfolioUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Scan the QR code or open Jesse Auta's portfolio"
          >
            <QRCodeSVG
              value={portfolioUrl}
              size={132}
              level="Q"
              marginSize={2}
              title="QR code linking to Jesse Auta's portfolio"
            />
            <span>SCAN TO VISIT</span>
          </a>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">J</span>
          <span>JESSE AUTA</span>
        </a>
        <span className="footer-note">IT · WEB · SYSTEMS</span>
        <a
          className="footer-github"
          href="https://github.com/JesseAuta"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB <ExternalIcon />
        </a>
        <a
          className="footer-github"
          href="https://www.linkedin.com/in/jesse-auta-8a6681195/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile (opens in a new tab)"
        >
          LINKEDIN <ExternalIcon />
        </a>
        <span className="copyright">© {new Date().getFullYear()} JESSE AUTA</span>
      </footer>
    </>
  )
}

export default App
