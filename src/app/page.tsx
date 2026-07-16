'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          maxWidth: 'var(--content-max-width)',
          margin: '0 auto',
          padding: 'clamp(40px, 7vw, 96px) 24px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: 'clamp(28px, 4vw, 56px)',
            alignItems: 'center',
          }}
        >
          {/* Left column - Text */}
          <div>
            <div className="kicker" style={{ marginBottom: '18px' }}>
              Established 1928 · Presbyterian Church of Mizoram
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: 'clamp(42px, 7vw, 86px)',
                lineHeight: 0.98,
                letterSpacing: '-0.02em',
                margin: '0 0 24px',
              }}
            >
              Synod Hospital,
              <br />
              Durtlang
            </h1>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                maxWidth: '52ch',
                color: 'var(--ink)',
                margin: '0 0 12px',
              }}
            >
              Synod Hospital is a multispeciality secondary hospital located in Durtlang, on the
              outskirts of Aizawl, the capital of the state of Mizoram.
            </p>
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                maxWidth: '52ch',
                color: 'var(--muted)',
                margin: '0 0 30px',
              }}
            >
              We provide quality medical care at affordable rates, with our primary focus on the
              poor and the needy.
            </p>
            <Link href="/about-us" className="btn-outlined">
              Learn More →
            </Link>
          </div>

          {/* Right column - Image plate */}
          <div
            className="plate"
            onClick={() => setLightboxOpen(true)}
            style={{
              cursor: 'zoom-in',
              minHeight: '340px',
              position: 'relative',
            }}
          >
            <Image
              src="/images/synod-hospital-durtlang-casualty-facade.jpg"
              alt="Synod Hospital campus"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(24, 22, 19, 0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(20px, 5vw, 64px)',
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '22px',
              right: '26px',
              fontFamily: 'var(--font-heading)',
              fontSize: '34px',
              lineHeight: 1,
              color: 'var(--paper)',
              background: 'transparent',
              border: 0,
              cursor: 'pointer',
            }}
          >
            ×
          </button>
          <Image
            src="/images/synod-hospital-durtlang-casualty-facade.jpg"
            alt="Synod Hospital campus"
            width={1200}
            height={800}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              border: '8px solid var(--paper)',
              boxShadow: '0 24px 80px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>
      )}
    </>
  );
}
