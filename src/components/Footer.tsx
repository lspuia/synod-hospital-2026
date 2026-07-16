export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--divider)',
        marginTop: '20px',
        padding: '40px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--content-max-width)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'space-between' }}>
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '17px',
                marginBottom: '12px',
              }}
            >
              Synod Hospital, Durtlang
            </h4>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)', margin: 0 }}>
              Durtlang, Aizawl<br />
              Mizoram – 796015
            </p>
          </div>
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '17px',
                marginBottom: '12px',
              }}
            >
              Contact
            </h4>
            <p style={{ fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
              <span style={{ color: 'var(--muted)' }}>Casualty:</span>{' '}
              <a href="tel:8415921575" style={{ fontWeight: 600 }}>8415921575</a><br />
              <span style={{ color: 'var(--muted)' }}>Email:</span>{' '}
              <a href="mailto:synodhospital@gmail.com" style={{ fontWeight: 600 }}>synodhospital@gmail.com</a>
            </p>
          </div>
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '17px',
                marginBottom: '12px',
              }}
            >
              Hours
            </h4>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)', margin: 0 }}>
              OPD: 9:00 AM – 1:00 PM<br />
              Emergency: 24 × 7
            </p>
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid var(--divider)',
            paddingTop: '20px',
            fontSize: '13px',
            color: 'var(--muted)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <span>© {new Date().getFullYear()} Synod Hospital. All rights reserved.</span>
          <span>
            Website Sponsored & Developed by{' '}
            <a
              href="https://whitewalls.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-link"
            >
              White Walls Interior Design Studio
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
