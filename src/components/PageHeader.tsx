interface PageHeaderProps {
  kicker: string;
  title: string;
  maxWidth?: string;
}

export default function PageHeader({ kicker, title, maxWidth = '1120px' }: PageHeaderProps) {
  return (
    <div
      style={{
        padding: 'clamp(36px, 6vw, 72px) 24px clamp(28px, 4vw, 40px)',
        borderBottom: '1px solid var(--divider)',
      }}
    >
      <div style={{ maxWidth, margin: '0 auto' }}>
        <div className="kicker" style={{ marginBottom: '12px' }}>
          {kicker}
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: 'clamp(38px, 6vw, 68px)',
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
