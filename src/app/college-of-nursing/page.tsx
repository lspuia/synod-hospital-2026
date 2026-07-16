import PageHeader from '@/components/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'College of Nursing | Synod Hospital, Durtlang',
  description: 'College of Nursing at Synod Hospital, Durtlang - BSc Nursing program.',
};

const aims = [
  'To train quality nurses with strong Christian principles.',
  'To provide dedicated and compassionate nurses to care for the sick and needy at all times without any discrimination of sex, race, socio-economic status and religion.',
  'To prevent diseases and promote health of the community.',
  'To maintain highest degree of moral standard in the professional and private lives.',
];

const governanceMembers = [
  'Medical Superintendent, Synod Hospital',
  'Co-ordinator, Synod Hospital',
  'Nursing Superintendent, Synod Hospital',
  'Vice Principal, College of Nursing',
  'Librarian, College of Nursing',
  'Three member representative from Board Executive Council (BEC)',
  'One teaching faculty nominated by the Hospital Board',
];

const courseDetails = [
  { k: 'Name of the course', v: 'Bachelor of Science (Nursing)' },
  { k: 'Duration of course', v: '4 years' },
  { k: 'Level of course', v: 'Graduation' },
  { k: 'Type', v: 'Degree' },
  { k: 'Eligibility', v: '10+2 (Science) or equivalent' },
  { k: 'Intake capacity', v: '30 Students annually' },
];

const feeRows = [
  { label: 'Course Fee', y1: '₹95,000', y2: '₹85,000', y3: '₹75,000', y4: '₹65,000' },
  { label: 'Mess & Accommodation', y1: '₹5,000 × 12 mo', y2: '₹5,000 × 12 mo', y3: '₹5,000 × 12 mo', y4: '₹5,000 × 12 mo' },
  { label: 'Health Fund', y1: '₹2,000', y2: '₹2,000', y3: '₹2,000', y4: '₹2,000' },
  { label: 'Transportation', y1: '₹2,000', y2: '₹2,000', y3: '₹2,000', y4: '₹2,000' },
  { label: 'Miscellaneous', y1: '₹1,000', y2: '₹1,000', y3: '₹1,000', y4: '₹1,000' },
  { label: 'TOTAL', y1: '₹1,60,000', y2: '₹1,50,000', y3: '₹1,40,000', y4: '₹1,30,000' },
];

const faculty = [
  { name: 'C Lalrintluangi', role: 'Principal', qual: "M.Sc 'N' (Mental Health)" },
  { name: 'C Thankhumi', role: 'Vice Principal', qual: "M.Sc 'N' (Obs & Gyn)" },
  { name: 'Lalrawnliani', role: 'Tutor', qual: "M.Sc 'N' (Medical Surg)" },
  { name: 'RC Lalrengpuii', role: 'Tutor', qual: "M.Sc 'N' (Medical Surg)" },
  { name: 'R Lalmuanpuii', role: 'Tutor', qual: "M.Sc 'N' (Community Health)" },
  { name: 'Vanlallawmtlingi', role: 'Tutor', qual: "M.Sc 'N' (Obs & Gyn)" },
  { name: 'Sanglianzami Colney', role: 'Tutor', qual: "B.Sc 'N'" },
  { name: 'Mary Lalhlimpuii', role: 'Tutor', qual: "B.Sc 'N'" },
  { name: 'Lalmuanpuii', role: 'Tutor', qual: "B.Sc 'N'" },
  { name: 'Rebecca Lalmawizuali', role: 'Tutor', qual: "B.Sc 'N'" },
  { name: 'Rongurliani', role: 'Tutor', qual: "B.Sc 'N'" },
  { name: 'Amy Lalringhluani', role: 'Tutor', qual: "B.Sc 'N'" },
];

export default function CollegePage() {
  return (
    <>
      <PageHeader kicker="In His Footsteps" title="College of Nursing" maxWidth="1000px" />

      <div style={{ maxWidth: '820px', margin: '0 auto', padding: 'clamp(28px, 4vw, 52px) 24px 80px' }}>
        {/* History */}
        <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 16px' }}>
          Dr John Williams LMP arrived at Lushai Hills on 22nd February 1928 and started the Welsh Mission Hospital as its solitary doctor. Since there were no nurses locally trained within Lushai Hills during those days, Dr Williams decided to start a school of nursing the same year. It became the first nursing school in Lushai Hills and continued to be the only one for a very long time.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 16px' }}>
          The school has been upgraded to a College of Nursing recently with a degree programme ie, BSc (Nursing) with an annual intake of 30 students.
        </p>

        {/* Philosophy */}
        <blockquote
          style={{
            margin: '40px 0 48px',
            padding: '34px 30px',
            borderTop: '2px solid var(--rule)',
            borderBottom: '1px solid var(--divider)',
            background: 'color-mix(in srgb, var(--rule) 6%, transparent)',
          }}
        >
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Our Philosophy</div>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(19px, 2.4vw, 25px)', lineHeight: 1.5, fontStyle: 'italic', margin: 0 }}>
            &quot;The College of Nursing at Synod Hospital, Durtlang is an educational institution run by the Presbyterian Church of Mizoram, whose primary aim is to educate and train young men and women to become good Christian nurses and to equip them in the spirit of Jesus Christ for service in the relief of sufferings, prevention of diseases and promotion of health.&quot;
          </p>
        </blockquote>

        {/* Aims & Objectives */}
        <div style={{ marginBottom: '44px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '26px', margin: '0 0 16px' }}>Aims & Objectives</h2>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {aims.map((a, i) => (
              <li key={i} style={{ position: 'relative', padding: '8px 0 8px 22px', fontSize: '16px', lineHeight: 1.7, borderBottom: '1px solid var(--divider)' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--rule)' }}>·</span>
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Governance */}
        <div style={{ marginBottom: '44px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '26px', margin: '0 0 16px' }}>Governance</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, margin: '0 0 18px' }}>
            The College of Nursing is managed by a Managing Committee in consultation with the Synod Hospital Board. The composition of the Managing Committee is as under:
          </p>
          <div style={{ border: '1px solid var(--divider)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr', borderBottom: '1px solid var(--divider)' }}>
              <div style={{ padding: '12px 14px', borderRight: '1px solid var(--divider)', color: 'var(--muted)' }}>Chairman</div>
              <div style={{ padding: '12px 14px', fontWeight: 600 }}>Director, Synod Hospital</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr', borderBottom: '1px solid var(--divider)' }}>
              <div style={{ padding: '12px 14px', borderRight: '1px solid var(--divider)', color: 'var(--muted)' }}>Secretary</div>
              <div style={{ padding: '12px 14px', fontWeight: 600 }}>Principal, College of Nursing</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr' }}>
              <div style={{ padding: '12px 14px', borderRight: '1px solid var(--divider)', color: 'var(--muted)' }}>Members</div>
              <div style={{ padding: '12px 14px' }}>
                <ol style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {governanceMembers.map((g, i) => <li key={i}>{g}</li>)}
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Course Offered */}
        <div style={{ marginBottom: '44px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '26px', margin: '0 0 16px' }}>Course Offered</h2>
          <div style={{ border: '1px solid var(--divider)', marginBottom: '30px' }}>
            {courseDetails.map((c, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', borderBottom: i < courseDetails.length - 1 ? '1px solid var(--divider)' : 'none' }}>
                <div style={{ padding: '11px 14px', borderRight: '1px solid var(--divider)', color: 'var(--muted)' }}>{c.k}</div>
                <div style={{ padding: '11px 14px', fontWeight: 600 }}>{c.v}</div>
              </div>
            ))}
          </div>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '21px', margin: '0 0 12px' }}>Admission criteria</h3>
          <p style={{ fontWeight: 600, margin: '0 0 8px' }}>A. Requirements</p>
          <ul className="bullet-list" style={{ marginBottom: '20px' }}>
            <li>Candidates should have completed the age of 17, and not more than 35 years at the time of admission.</li>
            <li>Higher Secondary School Certificate Examination (12 years course) with Science (Physics, Chemistry and Biology) and English with minimum of 50% aggregate marks.</li>
            <li>Only unmarried women / men candidates are eligible to apply.</li>
            <li>Candidates shall be psychologically and medically fit.</li>
          </ul>
          <p style={{ fontWeight: 600, margin: '0 0 8px' }}>B. Entrance / Selection Test</p>
          <ul className="bullet-list">
            <li>Selection of candidates shall be based on the entrance test and interview.</li>
            <li>Students should follow the rules and regulations of Synod Hospital.</li>
          </ul>
        </div>

        {/* Fee Structure */}
        <div style={{ marginBottom: '44px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '26px', margin: '0 0 16px' }}>Fee Structure</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontVariantNumeric: 'tabular-nums', minWidth: '520px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--rule)' }}>
                  <th style={{ textAlign: 'left', padding: '10px 12px', fontFamily: 'var(--font-heading)' }}>Particulars</th>
                  <th style={{ textAlign: 'right', padding: '10px 12px', fontFamily: 'var(--font-heading)' }}>1st Year</th>
                  <th style={{ textAlign: 'right', padding: '10px 12px', fontFamily: 'var(--font-heading)' }}>2nd Year</th>
                  <th style={{ textAlign: 'right', padding: '10px 12px', fontFamily: 'var(--font-heading)' }}>3rd Year</th>
                  <th style={{ textAlign: 'right', padding: '10px 12px', fontFamily: 'var(--font-heading)' }}>4th Year</th>
                </tr>
              </thead>
              <tbody>
                {feeRows.map((f, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--divider)' }}>
                    <td style={{ padding: '10px 12px', fontWeight: 600 }}>{f.label}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'right' }}>{f.y1}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'right' }}>{f.y2}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'right' }}>{f.y3}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'right' }}>{f.y4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--muted)', margin: '14px 0 0' }}>
            <strong style={{ color: 'var(--ink)' }}>Note:</strong> Fee structure is subject to change. Refer to the latest prospectus for confirmation.
          </p>
        </div>

        {/* Faculty */}
        <div style={{ marginBottom: '44px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '26px', margin: '0 0 16px' }}>Faculty</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '520px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--rule)' }}>
                  <th style={{ textAlign: 'left', padding: '10px 12px', fontFamily: 'var(--font-heading)' }}>Name</th>
                  <th style={{ textAlign: 'left', padding: '10px 12px', fontFamily: 'var(--font-heading)' }}>Designation</th>
                  <th style={{ textAlign: 'left', padding: '10px 12px', fontFamily: 'var(--font-heading)' }}>Qualification</th>
                </tr>
              </thead>
              <tbody>
                {faculty.map((f, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--divider)' }}>
                    <td style={{ padding: '9px 12px', fontWeight: 600 }}>{f.name}</td>
                    <td style={{ padding: '9px 12px' }}>{f.role}</td>
                    <td style={{ padding: '9px 12px', color: 'var(--muted)' }}>{f.qual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact */}
        <div style={{ borderTop: '1px solid var(--divider)', paddingTop: '26px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '0 0 14px' }}>Contact</h2>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>Mrs C Lalrintluangi</p>
          <p style={{ margin: 0, lineHeight: 1.7, color: 'var(--ink)' }}>Principal, College of Nursing<br />Synod Hospital, Durtlang<br />Aizawl, Mizoram<br />PIN: 796015</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <span style={{ color: 'var(--muted)' }}>Phone:</span>
            <a href="tel:+913892361720" style={{ fontWeight: 600 }}>0389 – 2361720</a>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ color: 'var(--muted)' }}>Email:</span>
            <a href="mailto:synodnursingschool@gmail.com" style={{ fontWeight: 600 }}>synodnursingschool@gmail.com</a>
          </div>
        </div>
      </div>
    </>
  );
}
