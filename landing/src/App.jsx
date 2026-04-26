export default function App() {
  return (
    <>
      {/* ===== NAV ===== */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #222', padding: '0.75rem 2rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem' }}>📱</span>
          <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>MyPhone Remote</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontSize: '0.9rem' }}>
          <a href="#features" style={{ color: '#888', textDecoration: 'none' }}>Features</a>
          <a href="#how" style={{ color: '#888', textDecoration: 'none' }}>How It Works</a>
          <a href="#pricing" style={{ color: '#888', textDecoration: 'none' }}>Pricing</a>
          <a href="#pricing" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
            Get Started
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-badge">
          <span className="dot" />
          No App Store Required
        </div>

        <h1>
          Your iPhone.<br />
          Your Mac.{' '}
          <span className="accent">One touch.</span>
        </h1>

        <p className="hero-tagline">
          Turn your iPhone into a wireless remote control for your Mac. Screen mirror, touch control, and AI vision — just open Safari.
        </p>

        <div className="hero-cta">
          <a href="#pricing" className="btn btn-primary">
            🚀 Get Started Free
          </a>
          <a href="#how" className="btn btn-secondary">
            See How It Works
          </a>
        </div>

        {/* Visual demo */}
        <div className="hero-demo">
          <div className="demo-frame">
            <div className="demo-mac">
              <div className="dock" />
            </div>
            <div className="demo-connection" />
            <div className="demo-phone">
              <div className="play-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section" id="features">
        <div className="section-label">Features</div>
        <h2>Everything you need to control your Mac from your phone</h2>
        <p className="subtitle">
          No companion app. No Bluetooth pairing. No USB cable. Just WiFi and a browser.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🖥️</div>
            <h3>Live Screen Mirror</h3>
            <p>See your Mac desktop on your iPhone in real time. Adaptive quality keeps it smooth even on older hardware.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👆</div>
            <h3>Touch Control</h3>
            <p>Tap to click, double-tap to double-click, drag to move, pinch to zoom. Every iPhone gesture maps to your Mac.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⌨️</div>
            <h3>Hotkey Panel</h3>
            <p>30+ keyboard shortcuts at your fingertips — Spotlight, Mission Control, Cmd+Tab, app switching, and more.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🕹️</div>
            <h3>D-Pad Navigation</h3>
            <p>Arrow keys and Enter/Esc for precise navigation. Perfect for the app switcher and keyboard-driven workflows.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✏️</div>
            <h3>Annotation Overlay</h3>
            <p>Draw directly on your screen with pencil and highlighter tools. Erase or clear with one tap.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Vision API</h3>
            <p>Let AI agents see your screen in real time. Multiple agents can share the same view simultaneously.</p>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section" id="how" style={{ background: '#0d0d0d' }}>
        <div className="section-label">How It Works</div>
        <h2>Three steps. Thirty seconds. Zero friction.</h2>
        <p className="subtitle">
          No App Store download. No account creation. No subscription wall to start.
        </p>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Run the server</h3>
            <p>One command on your Mac starts the MyPhone Remote server.</p>
            <div className="step-code">
              curl -sSL myphoneremote.com/install.sh | bash
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Open Safari</h3>
            <p>Type the URL shown in terminal on your iPhone. That's it — no app to install.</p>
            <div className="step-code">
              http://192.168.x.x:8080
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>You're in control</h3>
            <p>Your Mac screen appears on your iPhone. Touch, swipe, and control your Mac from anywhere in the room.</p>
            <div className="step-code">
              ✅ Connected — touch to click
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="section" id="pricing">
        <div className="section-label">Pricing</div>
        <h2>Start free. Upgrade when you need more.</h2>
        <p className="subtitle">
          The free tier covers everyday use. Pro unlocks full control. AI Agent gives your agents superpowers.
        </p>

        <div className="pricing-grid">
          {/* FREE */}
          <div className="pricing-card free">
            <div className="pricing-tier">Free</div>
            <div className="pricing-price">
              $0 <span className="period">forever</span>
            </div>
            <ul className="pricing-features">
              <li>Live screen mirror</li>
              <li>Tap to click</li>
              <li>Double-tap to double-click</li>
              <li>Basic hotkeys (5)</li>
              <li className="disabled">Drag & scroll</li>
              <li className="disabled">Pinch to zoom</li>
              <li className="disabled">Full hotkey panel</li>
              <li className="disabled">D-Pad navigation</li>
              <li className="disabled">Annotations</li>
              <li className="disabled">AI vision API</li>
              <li className="disabled">Voice bridge</li>
            </ul>
            <a href="#" className="btn btn-pricing free-btn">Get Started Free</a>
          </div>

          {/* PRO */}
          <div className="pricing-card pro">
            <div className="pricing-popular">Most Popular</div>
            <div className="pricing-tier">Pro</div>
            <div className="pricing-price">
              $4.99 <span className="period">/mo</span>
            </div>
            <ul className="pricing-features">
              <li>Live screen mirror</li>
              <li>Tap to click</li>
              <li>Double-tap to double-click</li>
              <li>Full hotkey panel (30+)</li>
              <li>Drag & scroll</li>
              <li>Pinch to zoom (8×)</li>
              <li>D-Pad navigation</li>
              <li>Right-click mode</li>
              <li>Annotations (pencil + highlighter)</li>
              <li className="disabled">AI vision API</li>
              <li className="disabled">Voice bridge</li>
            </ul>
            <a href="#" className="btn btn-pricing pro-btn">Subscribe to Pro</a>
            <div className="pricing-annual">or $39/year — save 34%</div>
          </div>

          {/* AI AGENT */}
          <div className="pricing-card ai-tier">
            <div className="pricing-popular">For Builders</div>
            <div className="pricing-tier">AI Agent</div>
            <div className="pricing-price">
              $14.99 <span className="period">/mo</span>
            </div>
            <ul className="pricing-features">
              <li>Everything in Pro</li>
              <li>AI Vision API (/ai/frame)</li>
              <li>Multi-agent shared vision</li>
              <li>Voice bridge (STT + TTS)</li>
              <li>Annotation → AI pipeline</li>
              <li>AI screen reader endpoint</li>
              <li>Webhook notifications</li>
              <li>Priority support</li>
            </ul>
            <a href="#" className="btn btn-pricing ai-btn">Subscribe to AI Agent</a>
            <div className="pricing-annual">or $119/year — save 33%</div>
          </div>
        </div>

        {/* Privacy banner */}
        <div className="privacy-banner">
          <h3>🔒 Your data never leaves your WiFi</h3>
          <p>
            All screen data, touch input, and voice stays on your local network. 
            No cloud servers. No telemetry. No account required for the free tier.
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="footer-links">
          <a href="https://github.com/whodaniel/MyPhone-Remote">GitHub</a>
          <a href="mailto:support@myphoneremote.com">Support</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
        <p>© 2026 whodaniel. Built for the Agentic Era.</p>
      </footer>
    </>
  )
}
