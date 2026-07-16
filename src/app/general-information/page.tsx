import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import Plate from '@/components/Plate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'General Information | Synod Hospital, Durtlang',
  description: 'Patient and visitor information for Synod Hospital, Durtlang.',
};

const busTimings = [
  { h: '06:45 AM', k: '08:00 AM' },
  { h: '09:00 AM', k: '10:00 AM' },
  { h: '01:30 PM', k: '02:30 PM' },
  { h: '04:30PM (Summer)', k: '05:30PM (Summer)' },
  { h: '04:00PM (Winter)', k: '05:00PM (Winter)' },
];

const visitingHours = [
  { from: '06:00 AM', to: '08:00 AM' },
  { from: '12:00 Noon', to: '01:00 PM' },
  { from: '03:00 PM', to: '06:00 PM' },
];

const frasersRoster = [
  { day: 'Monday', docs: ['Dr Lalramengmawii (Eye)', 'Dr R Lalrammuana (Surg)'] },
  { day: 'Tuesday', docs: ['Dr Rualthankhuma (ENT)', 'Dr Samuel Sailo (Paed)', 'Dr Regina Lalramhluni (Eye)'] },
  { day: 'Wednesday', docs: ['Dr John Malsawma (Paed)', 'Dr Vanlalkima (Obs & Gynae)', 'Dr Regina Lalramhluni (Eye)'] },
  { day: 'Thursday', docs: ['Dr Lalthakima (Ortho)', 'Dr Lalramengmawii (Eye)', 'Dr K Lalruatkimi (ENT)'] },
  { day: 'Friday', docs: ['Dr John Malsawma (Paed)', 'Dr Mac Malsawmtluanga (Eye)'] },
  { day: 'Saturday', docs: ['Dr R Lalrindiki (Eye)'] },
];

const milleniumRoster = [
  { day: 'Monday', docs: ['Dr Samuel Sailo (Paed)'] },
  { day: 'Tuesday', docs: ['Dr Rualthankhuma (ENT)'] },
  { day: 'Wednesday', docs: ['Dr John Malsawma (Paed)'] },
  { day: 'Thursday', docs: ['Dr Samuel Sailo (Paed)', 'Dr K Lalruatkimi (ENT)'] },
  { day: 'Friday', docs: ['Dr John Malsawma (Paed)', 'Dr Lalthakimi Darngawn (Obs & Gynae)'] },
  { day: 'Saturday', docs: ['Dr Lalthakima (Ortho)', 'Dr R Lalrammuana (Surg)'] },
];

export default function GeneralInfoPage() {
  return (
    <>
      <PageHeader kicker="For Patients & Visitors" title="General Information" />

      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: 'clamp(28px, 4vw, 52px) 24px 80px' }}>
        {/* Timings Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px', marginBottom: '48px' }}>
          {/* Hospital Timings */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '15px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 14px' }}>Hospital Timings</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', padding: '10px 0', borderBottom: '1px solid var(--divider)' }}>
              <span>OPD Registration timing</span>
              <span style={{ fontVariantNumeric: 'tabular-nums', textAlign: 'right' }}>9:00 AM – 1:00 PM</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', padding: '10px 0', borderBottom: '1px solid var(--divider)' }}>
              <span>Emergency</span>
              <span style={{ fontVariantNumeric: 'tabular-nums' }}>24 × 7</span>
            </div>
          </div>

          {/* Bus Timings */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '15px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 14px' }}>Hospital Bus Timings</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', padding: '9px 0', borderBottom: '1px solid var(--divider)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              <span>Hospital</span>
              <span>Kulikawn</span>
            </div>
            {busTimings.map((b, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', padding: '9px 0', borderBottom: '1px solid var(--divider)', fontVariantNumeric: 'tabular-nums' }}>
                <span>{b.h}</span>
                <span>{b.k}</span>
              </div>
            ))}
          </div>

          {/* Visiting Hours */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '15px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 14px' }}>Visiting Hours</h4>
            {visitingHours.map((v, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', padding: '10px 0', borderBottom: '1px solid var(--divider)', fontVariantNumeric: 'tabular-nums' }}>
                <span>{v.from}</span>
                <span>{v.to}</span>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ height: '1px', border: 0, background: 'var(--divider)', margin: '48px 0' }} />

        {/* Private Cabins */}
        <div style={{ marginBottom: '56px' }}>
          <SectionHeading>Private Cabins</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '22px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 14px' }}>
                Private cabins are available within the <strong>main hospital building (13 rooms)</strong>, and at <strong>Pi Puii In (31 rooms)</strong>. Room rents have been fixed at affordable rates for our patients, and ranges from <strong>Rs 1000 – Rs 2500</strong>, depending on the room size and amenities available like television and refrigerator. All rooms have a bathroom attached.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: 0, color: 'var(--muted)' }}>
                We advise our patients requiring private rooms for elective surgeries and deliveries to pre-book well in advance to avoid inconvenience, as the demand is very high throughout the year.
              </p>
            </div>
            <Plate src="/images/synod-hospital-Private-room.jpg" alt="Private cabin, Synod Hospital" />
          </div>
        </div>

        {/* Dr Fraser's Clinic */}
        <div style={{ marginBottom: '56px' }}>
          <SectionHeading>Dr Fraser&apos;s Clinic</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '22px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 18px' }}>
                Located at the Centernary Building of Mission Veng Presbyterian Church, Dr Fraser&apos;s clinic caters to the population of the southern part of Aizawl. The clinic opens six days a week (excluding Sundays and holidays).
              </p>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                <span style={{ color: 'var(--muted)' }}>Phone:</span>
                <a href="tel:+9103892310123" style={{ fontWeight: 600 }}>(0389) 2310123</a>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '22px' }}>
                <span style={{ color: 'var(--muted)' }}>Directions:</span>
                <a href="https://goo.gl/maps/9rgVFEuG9AZk2uyM6" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>View On Map</a>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '19px', margin: '0 0 10px' }}>Facilities Available</h3>
              <ul className="bullet-list" style={{ marginBottom: '22px' }}>
                <li>Laboratory</li>
                <li>Pharmacy</li>
                <li>Computerised radiography (X-ray)</li>
                <li>Spectacle shop with glass fitter</li>
                <li>Minor OT (for dressings, suture removal and minor surgical procedures)</li>
                <li>Vaccination – Every Wednesday from 10:00AM (except holidays)</li>
              </ul>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '19px', margin: '0 0 10px' }}>Doctors&apos; duty roster</h3>
              <div>
                {frasersRoster.map((r) => (
                  <div key={r.day} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '12px', padding: '9px 0', borderBottom: '1px solid var(--divider)' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{r.day}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {r.docs.map((d, i) => <span key={i} style={{ fontSize: '14px' }}>{d}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Plate src="/images/synod-hospital-Dr-Frasers.jpg" alt="Dr Fraser's Clinic" />
          </div>
        </div>

        {/* Millennium Center Clinic */}
        <div>
          <SectionHeading>Millennium Center Clinic</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '22px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 18px' }}>
                The clinic is located at the top floor of Millennium Center, at the heart of Aizawl.
              </p>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                <span style={{ color: 'var(--muted)' }}>Phone:</span>
                <a href="tel:+919862365304" style={{ fontWeight: 600 }}>9862 365 304</a>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '22px' }}>
                <span style={{ color: 'var(--muted)' }}>Directions:</span>
                <a href="https://goo.gl/maps/9rgVFEuG9AZk2uyM6" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>View On Map</a>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '19px', margin: '0 0 10px' }}>Facilities Available</h3>
              <ul className="bullet-list" style={{ marginBottom: '22px' }}>
                <li>Laboratory</li>
                <li>Pharmacy</li>
                <li>X-Ray</li>
                <li>Minor OT (for dressings, suture removal and minor surgical procedures)</li>
                <li>Vaccination – Every Fridays from 01:00PM (except holidays)</li>
              </ul>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '19px', margin: '0 0 10px' }}>Doctors&apos; duty roster</h3>
              <div>
                {milleniumRoster.map((r) => (
                  <div key={r.day} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '12px', padding: '9px 0', borderBottom: '1px solid var(--divider)' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{r.day}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {r.docs.map((d, i) => <span key={i} style={{ fontSize: '14px' }}>{d}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--surface)', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', border: '6px solid var(--surface)', outline: '1px solid var(--divider)' }}>
              <span>Clinic photo placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
