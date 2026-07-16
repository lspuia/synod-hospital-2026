import PageHeader from '@/components/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Synod Hospital, Durtlang website.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader kicker="Legal" title="Privacy Policy" />

      <div style={{ maxWidth: '820px', margin: '0 auto', padding: 'clamp(28px, 4vw, 52px) 24px 80px' }}>
        <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '32px' }}>
          Last updated: July 2026
        </p>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '0 0 12px' }}>Introduction</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 12px' }}>
            Synod Hospital, Durtlang (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website www.synodhospital.org. This Privacy Policy explains our practices regarding information when you visit our website.
          </p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '0 0 12px' }}>Information We Collect</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 12px' }}>
            This website is purely informational and does not collect any personal information from visitors. We do not use contact forms, registration systems, user accounts, or any other means to gather personal data.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 12px' }}>
            We do not knowingly collect, store, or process any personally identifiable information from visitors to this website.
          </p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '0 0 12px' }}>Cookies and Tracking</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 12px' }}>
            This website does not use cookies for tracking purposes. We do not use analytics services or third-party tracking tools that collect visitor information.
          </p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '0 0 12px' }}>Third-Party Services</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 12px' }}>
            Our website may contain embedded content from third parties (such as Google Maps). These services may collect information about your visit according to their own privacy policies. We encourage you to review the privacy policies of any third-party services you interact with.
          </p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '0 0 12px' }}>External Links</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 12px' }}>
            This website may contain links to external websites. We are not responsible for the privacy practices or content of those external sites. We encourage you to read the privacy policies of any website you visit.
          </p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '0 0 12px' }}>Contact Information</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 12px' }}>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0' }}>
            Synod Hospital<br />
            Durtlang, Aizawl<br />
            Mizoram – 796015<br />
            Email: <a href="mailto:synodhospital@gmail.com" style={{ fontWeight: 600 }}>synodhospital@gmail.com</a>
          </p>
        </section>

        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '0 0 12px' }}>Changes to This Policy</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0' }}>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>
        </section>
      </div>
    </>
  );
}
