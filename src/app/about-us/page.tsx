import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import Plate from '@/components/Plate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Synod Hospital, Durtlang',
  description: 'History and mission of Synod Hospital, Durtlang - serving since 1928.',
};

const timeline = [
  { date: '7th January 1929', text: 'Miss Winfred Margaret, the first missionary nurse arrived at Durtlang.' },
  { date: '1930', text: 'Miss Diahzingi, a local, joined the hospital after completing her nursing course from Roberts Hospital, Shillong.' },
  { date: '1933', text: 'The arrival of the second missionary nurse Miss Eirlys Williams.' },
  { date: '1st February 1934', text: 'Dr HK Thanglura LMP, the first Mizo doctor to work for the Welsh Mission was recruited.' },
  { date: '11th March 1936', text: 'Missionary nurse Miss Gladys M Evans arrived and joined the hospital. She served for 27 years and was the longest-serving missionary nurse in Mizoram.' },
  { date: 'November 1937', text: 'The arrival of Dr Gyneth Parul Roberts B.Sc, M.B.B.Ch., who was one of the longest-serving missionaries in Mizoram.' },
  { date: 'July 1951', text: 'The second Mizo doctor Dr RK Nghakliana joined after completing his MBBS from Christian Medical College, Vellore.' },
  { date: '29th February 1958', text: 'The first ever X-ray machine in Mizoram was purchased and commissioned for use.' },
];

const partners = [
  { name: 'The Department of Health & Family Welfare', href: 'https://health.mizoram.gov.in/', desc: ', Government of Mizoram – for tuberculosis treatment (RNTCP) and State Blindness Control Society.' },
  { name: 'The Mizoram State AIDS Control Society (MSACS)', href: 'http://mizoramsacs.nic.in/', desc: ' – for Integrated Counselling & Testing Centre (ICTC) and Blood Bank.' },
  { name: 'Christoffel Blinden Mission (CBM)', href: 'https://www.cbmindia.org.in/', desc: ' – for Community Based Rehabilitation (CBR) project and eye care services.' },
  { name: 'Mission for Vision', href: 'http://www.missionforvision.org.in/', desc: ' – for cataract management.' },
  { name: 'Pallium India', href: 'https://palliumindia.org/', desc: ' – for palliative care.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader kicker="Since 1928" title="About Us" maxWidth="1000px" />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(28px, 4vw, 52px) 24px 80px' }}>
        {/* Intro */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '48px' }}>
          <Plate src="/images/synod-hospital-durtlang-casualty-facade.jpg" alt="Synod Hospital, Durtlang" />
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 14px' }}>
              Synod Hospital is a multispeciality secondary hospital located in Durtlang, on the outskirts of Aizawl, the capital of the state of Mizoram. We provide quality medical care at affordable rates, with our primary focus on the poor and the needy.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 18px' }}>
              From our humble beginning of one doctor, one nurse and fourteen beds in 1928, we have progressed to being the largest hospital in the state with 355 beds at present.
            </p>
          </div>
        </div>

        <hr style={{ height: '1px', border: 0, background: 'var(--divider)', margin: '48px 0' }} />

        {/* History */}
        <SectionHeading size="lg" id="History">History</SectionHeading>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '24px 0 14px' }}>
          The beginning – A dispensary
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '24px' }}>
          <Plate src="/images/Dr-Peter-Fraser.jpg" alt="Dr Peter Fraser" />
          <div>
            <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 12px' }}>
              <strong>Dr Peter Fraser, B.Sc, MD</strong> from Caernarfon, Wales was the first missionary doctor to arrive in Mizoram, which was then known as the Lushai Hills. He started medical works in the year 1908. According to records, Dr Fraser saw as many as 24,000 patients in his first year alone.
            </p>
            <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: 0 }}>
              Dr Fraser was a tough opponent to slavery and was against the local chiefs who kept slaves. It was said that he set 40 slaves free by paying their price out of his own money.
            </p>
          </div>
        </div>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '36px 0 14px' }}>
          Welsh Mission Hospital
        </h3>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 12px' }}>
          Dr John Williams LMP, arrived in Lushai Hills on 22nd February 1928 and settled at Durtlang. With the help of only two trained staff, namely compounder D Thianga and staff nurse Tlawmkungi, he converted the old theological school building and used it to establish the hospital. The hospital at Durtlang was inaugurated on 6th March 1928 and named the <strong>&apos;Welsh Mission Hospital&apos;</strong>.
        </p>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '36px 0 16px' }}>
          Important Timeline
        </h3>
        <div style={{ borderLeft: '2px solid var(--rule)', paddingLeft: '22px', marginBottom: '16px' }}>
          {timeline.map((t, i) => (
            <div key={i} style={{ marginBottom: '18px', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '16px', color: 'var(--gold)', marginBottom: '3px', fontVariantNumeric: 'tabular-nums' }}>{t.date}</div>
              <div style={{ fontSize: '15px', lineHeight: 1.7 }}>{t.text}</div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '36px 0 14px' }}>
          Presbyterian Church Synod Hospital
        </h3>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 12px' }}>
          The Welsh Mission handed over the ownership and management of the hospital to the Synod of the Presbyterian Church of Mizoram on 28th February 1958. The name was changed to <strong>&apos;Synod Hospital&apos;</strong> in 2012.
        </p>

        <hr style={{ height: '1px', border: 0, background: 'var(--divider)', margin: '48px 0' }} />

        {/* Governance */}
        <SectionHeading size="lg" id="Governance">Governance</SectionHeading>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '16px 0 0' }}>
          The hospital is governed by a board constituted by the Presbyterian Church of India, Mizoram Synod. The Mizoram Synod moderator is Chairman of the Board, and the hospital director, the Board Secretary.
        </p>

        <hr style={{ height: '1px', border: 0, background: 'var(--divider)', margin: '48px 0' }} />

        {/* Partners */}
        <SectionHeading size="lg" id="Partners">Our Partners</SectionHeading>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '16px 0 14px' }}>We work closely with the following organizations:</p>
        <ul className="bullet-list">
          {partners.map((p, i) => (
            <li key={i} style={{ padding: '9px 0', borderBottom: '1px solid var(--divider)' }}>
              <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>{p.name}</a>
              {p.desc}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
