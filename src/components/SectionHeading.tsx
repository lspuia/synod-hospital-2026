interface SectionHeadingProps {
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm';
  id?: string;
  className?: string;
}

export default function SectionHeading({ children, size = 'md', id, className = '' }: SectionHeadingProps) {
  const fontSize = {
    lg: 'clamp(28px, 3.6vw, 40px)',
    md: 'clamp(26px, 3.4vw, 36px)',
    sm: 'clamp(22px, 2.6vw, 30px)',
  }[size];

  return (
    <div id={id} className={`svc-anchor ${className}`}>
      <div
        style={{
          height: '2px',
          width: '56px',
          background: 'var(--rule)',
          marginBottom: '14px',
        }}
      />
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize,
          margin: 0,
        }}
      >
        {children}
      </h2>
    </div>
  );
}
