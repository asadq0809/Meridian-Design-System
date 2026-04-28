import React, { useState } from 'react';
import './tokens.css';
import './StyleGuide.css';
import Button from './Button';
import Badge from './Badge';
import Alert from './Alert';

const Section = ({ title, children }) => (
  <section className="sg-section">
    <h2 className="sg-section__title">{title}</h2>
    <div className="sg-section__content">{children}</div>
  </section>
);

const Row = ({ label, children }) => (
  <div className="sg-row">
    {label && <span className="sg-row__label">{label}</span>}
    <div className="sg-row__items">{children}</div>
  </div>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 3v10M3 8h10" strokeLinecap="round"/>
  </svg>
);

export default function StyleGuide() {
  const [loadingBtn, setLoadingBtn] = useState(false);

  const handleLoadingDemo = () => {
    setLoadingBtn(true);
    setTimeout(() => setLoadingBtn(false), 2000);
  };

  return (
    <div className="sg-root">

      {/* Header */}
      <header className="sg-header">
        <div className="sg-header__inner">
          <div className="sg-header__brand">
            <span className="sg-header__logo">M</span>
            <div>
              <h1 className="sg-header__title">Meridian Design System</h1>
              <p className="sg-header__subtitle">Component Library · React · v1.0.0</p>
            </div>
          </div>
          <div className="sg-header__badges">
            <Badge variant="success" dot>3 Components</Badge>
            <Badge variant="primary">v1.0.0</Badge>
          </div>
        </div>
      </header>

      <main className="sg-main">

        {/* ── BUTTONS ── */}
        <Section title="Button">

          <Row label="Primary">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </Row>

          <Row label="Secondary">
            <Button variant="secondary" size="sm">Small</Button>
            <Button variant="secondary" size="md">Medium</Button>
            <Button variant="secondary" size="lg">Large</Button>
          </Row>

          <Row label="Ghost">
            <Button variant="ghost" size="sm">Small</Button>
            <Button variant="ghost" size="md">Medium</Button>
            <Button variant="ghost" size="lg">Large</Button>
          </Row>

          <Row label="Destructive">
            <Button variant="destructive" size="sm">Small</Button>
            <Button variant="destructive" size="md">Medium</Button>
            <Button variant="destructive" size="lg">Large</Button>
          </Row>

          <Row label="With icons">
            <Button variant="primary" iconRight={<ArrowRightIcon />}>Continue</Button>
            <Button variant="secondary" iconLeft={<PlusIcon />}>Add item</Button>
            <Button variant="ghost" iconRight={<ArrowRightIcon />}>Learn more</Button>
          </Row>

          <Row label="States">
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="secondary" disabled>Disabled</Button>
            <Button
              variant="primary"
              loading={loadingBtn}
              onClick={handleLoadingDemo}
            >
              {loadingBtn ? 'Saving...' : 'Click to load'}
            </Button>
          </Row>

        </Section>

        {/* ── BADGES ── */}
        <Section title="Badge">

          <Row label="Variants">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </Row>

          <Row label="With dot">
            <Badge variant="default" dot>Inactive</Badge>
            <Badge variant="primary" dot>In progress</Badge>
            <Badge variant="success" dot>Active</Badge>
            <Badge variant="warning" dot>Pending</Badge>
            <Badge variant="error" dot>Failed</Badge>
          </Row>

          <Row label="In context">
            <div className="sg-inline">
              <span className="sg-inline__text">Asad Qureshi</span>
              <Badge variant="success" dot>Active</Badge>
            </div>
            <div className="sg-inline">
              <span className="sg-inline__text">Saima Raza</span>
              <Badge variant="warning" dot>Pending</Badge>
            </div>
            <div className="sg-inline">
              <span className="sg-inline__text">John Doe</span>
              <Badge variant="error" dot>Disabled</Badge>
            </div>
          </Row>

        </Section>

        {/* ── ALERTS ── */}
        <Section title="Alert">

          <div className="sg-alerts">
            <Alert variant="info" title="Heads up" dismissible>
              This is an informational message with some useful context for the user.
            </Alert>
            <Alert variant="success" title="Changes saved" dismissible>
              Your profile has been updated successfully. Changes are live.
            </Alert>
            <Alert variant="warning" title="Review required" dismissible>
              Your session will expire in 5 minutes. Save your work to avoid losing changes.
            </Alert>
            <Alert variant="error" title="Authentication failed" dismissible>
              Invalid email or password. Please check your credentials and try again.
            </Alert>
          </div>

          <Row label="Title only">
            <div style={{ width: '100%' }}>
              <Alert variant="info" title="Simple info message without body text." />
            </div>
          </Row>

          <Row label="Body only">
            <div style={{ width: '100%' }}>
              <Alert variant="success">
                Your changes have been saved without a title.
              </Alert>
            </div>
          </Row>

        </Section>

        {/* ── TOKEN REFERENCE ── */}
        <Section title="Token Reference">
          <div className="sg-tokens">
            <div className="sg-token-group">
              <h3 className="sg-token-group__title">Primary</h3>
              <div className="sg-swatches">
                {[
                  ['50',  '#EFF6FF'],
                  ['100', '#DBEAFE'],
                  ['300', '#93C5FD'],
                  ['500', '#2563EB'],
                  ['600', '#1D4ED8'],
                  ['700', '#1E40AF'],
                  ['900', '#1E3A8A'],
                ].map(([stop, hex]) => (
                  <div key={stop} className="sg-swatch">
                    <div className="sg-swatch__color" style={{ background: hex }} />
                    <span className="sg-swatch__stop">{stop}</span>
                    <span className="sg-swatch__hex">{hex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sg-token-group">
              <h3 className="sg-token-group__title">Semantic</h3>
              <div className="sg-swatches">
                {[
                  ['Success', '#22C55E'],
                  ['Warning', '#F59E0B'],
                  ['Error',   '#EF4444'],
                  ['Info',    '#2563EB'],
                ].map(([name, hex]) => (
                  <div key={name} className="sg-swatch">
                    <div className="sg-swatch__color" style={{ background: hex }} />
                    <span className="sg-swatch__stop">{name}</span>
                    <span className="sg-swatch__hex">{hex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

      </main>

      <footer className="sg-footer">
        <p>Meridian Design System · Built by <strong>Asad Qureshi</strong> · Figma + React</p>
      </footer>

    </div>
  );
}
