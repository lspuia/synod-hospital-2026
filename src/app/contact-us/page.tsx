import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Synod Hospital, Durtlang',
  description: 'Contact information and location of Synod Hospital, Durtlang, Mizoram.',
};

const phoneList = [
  { label: 'Casualty', nums: ['8415921575', '9426744550', '7085091022 (EPABX)'] },
  { label: 'Administrative Office', nums: ['0389-2361122'] },
  { label: 'Co-ordinator', nums: ['0389-2361183'] },
  { label: 'Nursing School', nums: ['0389-2361720'] },
  { label: 'ICU', nums: ['0389-2362240'] },
  { label: 'NICU', nums: ['9436757228'] },
  { label: 'Lawmna ward (Obstetrics ward)', nums: ['9402328097'] },
  { label: 'K Ward', nums: ['9774186936'] },
  { label: 'Grace Home', nums: ['9366095152'] },
  { label: 'Naupang ward (Paediatrics ward)', nums: ['9366047857'] },
  { label: 'NCB (Private cabin - old)', nums: ['8119967754'] },
  { label: 'Pi Puii In (Private cabin - new)', nums: ['8974927270'] },
  { label: 'Medical ward', nums: ['7085894067'] },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader kicker="We're Here to Help" title="Contact Us" />

      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: 'clamp(28px, 4vw, 52px) 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
          {/* Contact Details */}
          <div>
            <p style={{ margin: '0 0 2px', fontWeight: 600, fontFamily: 'var(--font-heading)', fontSize: '20px' }}>The Director</p>
            <p style={{ margin: '0 0 12px', lineHeight: 1.7 }}>
              Synod Hospital<br />
              Durtlang, Aizawl<br />
              Mizoram – 796015
            </p>
            <a href="https://goo.gl/maps/9rgVFEuG9AZk2uyM6" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, textDecoration: 'underline' }}>
              Get Directions
            </a>
            <div style={{ margin: '16px 0 24px' }}>
              <span style={{ color: 'var(--muted)' }}>Email: </span>
              <a href="mailto:synodhospital@gmail.com" style={{ fontWeight: 600 }}>synodhospital@gmail.com</a>
            </div>

            {/* Phone List */}
            <div>
              {phoneList.map((item) => (
                <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', padding: '12px 0', borderBottom: '1px solid var(--divider)' }}>
                  <span style={{ fontWeight: 600, lineHeight: 1.4 }}>{item.label}</span>
                  <span style={{ display: 'flex', flexDirection: 'column', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                    {item.nums.map((n) => (
                      <a key={n} href={`tel:${n.replace(/[^0-9+]/g, '')}`} style={{ textDecoration: 'underline' }}>{n}</a>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div style={{ alignSelf: 'start' }}>
            <SectionHeading size="sm">Find Us</SectionHeading>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 0,
                paddingBottom: '78%',
                marginTop: '16px',
                border: '6px solid var(--surface)',
                outline: '1px solid var(--divider)',
              }}
            >
              <iframe
                title="Synod Hospital, Durtlang — location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3028166101444!2d92.7310205!3d23.7722288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374deb1b210503d7%3A0x494329e0d07f4050!2sSynod%20Hospital%20Durtlang!5e0!3m2!1sen!2sin!4v1784142142251!5m2!1sen!2sin"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
