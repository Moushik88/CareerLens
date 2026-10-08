const strengths = [
  'Python',
  'SQL',
  'Machine Learning',
  'Product Thinking',
  'Portfolio Proof',
]

const evidenceBlocks = [
  {
    title: 'Claim → Evidence engine',
    description:
      'Every skill claim is checked against downloadable work, project links, and documented outcomes.',
  },
  {
    title: 'Skill gap detection',
    description:
      'The platform highlights missing capabilities and suggests a realistic 30-day action plan.',
  },
  {
    title: 'AI resume feedback',
    description:
      'Students get actionable rewriting recommendations that are grounded in role-specific expectations.',
  },
]

const metrics = [
  { label: 'Readiness', value: '87%' },
  { label: 'Consistency', value: '92%' },
  { label: 'Target Fit', value: '8.9/10' },
]

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">CL</div>
          <div>
            <p className="brand-name">CareerLens</p>
            <p className="brand-tag">Employability analyzer</p>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#results">Results</a>
        </nav>

        <button type="button" className="primary-button">
          Analyze profile
        </button>
      </header>

      <main className="content">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">AI-powered career readiness</p>
            <h1>Show the evidence. Not just the claim.</h1>
            <p className="lede">
              CareerLens helps students and placement teams evaluate real readiness using
              resumes, project proof, skills, and role-specific demand.
            </p>

            <div className="cta-row">
              <button type="button" className="primary-button large">
                Upload resume
              </button>
              <button type="button" className="secondary-button">
                Load demo profile
              </button>
            </div>

            <ul className="chip-list" aria-label="Core skills">
              {strengths.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <aside className="score-panel" aria-label="Profile summary">
            <div className="score-ring">
              <span>87</span>
            </div>
            <div className="score-meta">
              <p className="score-label">Profile strength</p>
              <h2>AI Engineer</h2>
            </div>

            <div className="metrics">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-box">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="features" className="feature-grid" aria-label="Key features">
          {evidenceBlocks.map((block) => (
            <article key={block.title} className="feature-card">
              <span className="feature-icon">✦</span>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </article>
          ))}
        </section>

        <section id="workflow" className="workflow-panel">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>From resume upload to role-fit roadmap</h2>
          </div>

          <div className="steps">
            <div className="step">
              <span>01</span>
              <h3>Upload profile</h3>
              <p>PDF, DOCX, TXT, or Markdown resumes with portfolio links and public evidence.</p>
            </div>
            <div className="step">
              <span>02</span>
              <h3>Analyze claims</h3>
              <p>Map every asserted skill to project work, GitHub activity, and external proof.</p>
            </div>
            <div className="step">
              <span>03</span>
              <h3>Act on gaps</h3>
              <p>Receive a role-specific roadmap with prioritized learning actions and feedback.</p>
            </div>
          </div>
        </section>

        <section id="results" className="results-panel">
          <div className="result-copy">
            <p className="eyebrow">Results that matter</p>
            <h2>Career readiness, not just keyword matching.</h2>
            <p>
              The platform tells students where they are strongest, where they are weak, and
              what needs to be demonstrated next to succeed in a target role.
            </p>
          </div>

          <div className="report-card" aria-label="Result summary card">
            <div className="report-row">
              <span>Resume quality</span>
              <strong>High confidence</strong>
            </div>
            <div className="report-row">
              <span>Project proof</span>
              <strong>Strong evidence</strong>
            </div>
            <div className="report-row">
              <span>Target gap</span>
              <strong>System design</strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
