'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/general-information', label: 'General Information' },
  { href: '/college-of-nursing', label: 'College of Nursing' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 860);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--paper)',
        borderBottom: '1px solid var(--divider)',
        padding: '14px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--content-max-width)',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'var(--ink)',
          }}
        >
          <Image
            src="/images/synod-hospital-durtlang-mizoram.png"
            alt="Synod Hospital emblem"
            width={88}
            height={88}
            style={{ objectFit: 'contain', flex: 'none' }}
          />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '19px',
                letterSpacing: '0.01em',
              }}
            >
              Synod Hospital
            </span>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '12px',
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}
            >
              Durtlang
            </span>
          </span>
        </Link>

        {/* Hamburger button (mobile) */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--ink)', margin: '4px 0' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--ink)', margin: '4px 0' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--ink)', margin: '4px 0' }} />
          </button>
        )}

        {/* Navigation */}
        <nav
          style={{
            display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '0' : '24px',
            position: isMobile ? 'absolute' : 'static',
            top: isMobile ? '100%' : 'auto',
            left: isMobile ? '0' : 'auto',
            right: isMobile ? '0' : 'auto',
            background: isMobile ? 'var(--paper)' : 'transparent',
            borderBottom: isMobile ? '1px solid var(--divider)' : 'none',
            padding: isMobile ? '16px 24px' : '0',
          }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '15px',
                  letterSpacing: '0.01em',
                  color: isActive ? 'var(--gold)' : 'var(--ink)',
                  textDecoration: 'none',
                  padding: isMobile ? '12px 0' : '0',
                  borderBottom: isMobile ? '1px solid var(--divider)' : 'none',
                }}
              >
                {item.label}
                {isActive && !isMobile && (
                  <i
                    style={{
                      display: 'block',
                      height: '2px',
                      background: 'var(--rule)',
                      marginTop: '5px',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
