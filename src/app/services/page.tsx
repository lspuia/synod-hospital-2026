import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import Plate from '@/components/Plate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Synod Hospital, Durtlang',
  description: 'Medical services and departments at Synod Hospital including Anesthesiology, Blood Bank, ENT, Eye Care, Surgery, and more.',
};

const serviceLinks = [
  { id: 'Anesthesiology-and-Critical-Care', label: 'Anesthesiology & Critical Care' },
  { id: 'Blood-Bank', label: 'Blood Bank' },
  { id: 'ENT', label: 'ENT' },
  { id: 'EYE', label: 'Eye' },
  { id: 'Laparoscopy', label: 'General & Laparoscopic Surgery' },
  { id: 'General-Medicine', label: 'General Medicine' },
  { id: 'Grace-Home-K-Ward', label: 'HIV (Grace Home), Substance Abuse (K-Ward) and Palliative Care' },
  { id: 'Obstetrics-Gynaecology', label: 'Obstetrics & Gynaecology' },
  { id: 'Ortho', label: 'Orthopaedics' },
  { id: 'Paediatrics', label: 'Paediatrics' },
  { id: 'Radiodiagnosis-Imaging', label: 'Radiodiagnosis & Imaging' },
  { id: 'Lab', label: 'Laboratory' },
];

const bloodBankData = [
  { year: '2011', camps: '—', voluntary: '4908', replacement: '215', total: '5123', percent: '95.8%' },
  { year: '2012', camps: '77', voluntary: '4204', replacement: '209', total: '4413', percent: '95.26%' },
  { year: '2013', camps: '82', voluntary: '4255', replacement: '136', total: '4391', percent: '96.9%' },
  { year: '2014', camps: '74', voluntary: '3058', replacement: '550', total: '3608', percent: '84.76%' },
  { year: '2015', camps: '74', voluntary: '3058', replacement: '575', total: '3633', percent: '84.17%' },
  { year: '2016', camps: '69', voluntary: '2664', replacement: '375', total: '3039', percent: '87.66%' },
  { year: '2017', camps: '85', voluntary: '2922', replacement: '405', total: '3327', percent: '87.82%' },
  { year: '2018', camps: '71', voluntary: '2750', replacement: '606', total: '3356', percent: '81.94%' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader kicker="Departments & Specialities" title="Services" />

      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: 'clamp(28px, 4vw, 52px) 24px 80px' }}>
        {/* Service Links Navigation */}
        <nav aria-label="Departments" style={{ marginBottom: '48px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0 32px' }}>
            {serviceLinks.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  display: 'block',
                  padding: '11px 0',
                  borderBottom: '1px solid var(--divider)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '17px',
                  color: 'var(--ink)',
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Anesthesiology & Critical Care */}
        <section id="Anesthesiology-and-Critical-Care" className="svc-anchor" style={{ borderTop: '1px solid var(--divider)', paddingTop: '40px', marginBottom: '44px' }}>
          <SectionHeading>Anesthesiology & Critical Care</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '20px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                Anesthesiology & Critical care unit consist of three consultants and medical officers. They ensure that each and every patient is comfortable and free of pain during any surgery or procedure. The team runs our Main OT (which houses General Surgery, Orthopaedics and ENT), Gynae OT, Eye OT and a PAC clinic.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 20px' }}>
                The team also manages a six bedded Intensive Care Unit (ICU).
              </p>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>Consultants</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontWeight: 600 }}>Dr Doris Hmingthanzami MBBS, DA</div>
                <div style={{ fontWeight: 600 }}>Dr Lalrinawmi Chhangte MBBS, DA</div>
                <div style={{ fontWeight: 600 }}>Dr Bathsheba Lalnuntawmi MBBS, DA</div>
                <div><strong>Dr HD Lalengkima</strong> <span style={{ color: 'var(--muted)' }}>Currently pursuing MD (Anaesthesiology) at Government TD Medical College, Alapphuza, Kerala</span></div>
              </div>
            </div>
            <Plate src="/images/synod-hospital-ICU-01.jpg" alt="Intensive Care Unit" />
          </div>
        </section>

        {/* Blood Bank */}
        <section id="Blood-Bank" className="svc-anchor" style={{ borderTop: '1px solid var(--divider)', paddingTop: '40px', marginBottom: '44px' }}>
          <SectionHeading>Blood Bank</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '20px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                We have a 24 hours functioning blood bank which caters to the needs of our patients, as well as patients from other hospitals and nursing homes in and around the city. Our blood bank was established on 17th March, 1997. With the procurement of the component separator, a component unit was added on 9th September, 2015. We are currently capable of providing blood and blood products like Whole Blood, Packed Red Blood Cell (PRBC), Platelet Rich Concentrate (PRC) and Fresh Frozen Plasma (FFP).
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                We are partly funded by Mizoram State Aids Control Society (MSACS) with manpower and financial aids. In collaboration with NGO&apos;s like Association for Voluntary Blood Donors (AVBD) & Young Mizo Association (YMA), various church based organisations like Kristian Thalai Pawl and others, schools and colleges, we have been able to organise blood donation camps regularly at various sites around Aizawl and nearby towns and villages. The grand success of mobilising voluntary doners throughout the year within the state has provided us with an almost unlimited supply of blood and blood products, thus ultimately benefitting our patients greatly.
              </p>
              <div style={{ margin: '14px 0' }}><span style={{ color: 'var(--muted)' }}>Blood Bank Officer – </span><strong>Dr B Lalnunthari MBBS, DPB</strong></div>
            </div>
            <Plate src="/images/synod-hospital-Blood-donation1.jpg" alt="Blood donation camp" />
          </div>
          <div style={{ overflowX: 'auto', marginTop: '22px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontVariantNumeric: 'tabular-nums', minWidth: '560px', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--rule)' }}>
                  <th style={{ textAlign: 'left', padding: '9px 10px', fontFamily: 'var(--font-heading)' }}>Year</th>
                  <th style={{ textAlign: 'right', padding: '9px 10px', fontFamily: 'var(--font-heading)' }}>Donation camps</th>
                  <th style={{ textAlign: 'right', padding: '9px 10px', fontFamily: 'var(--font-heading)' }}>Voluntary</th>
                  <th style={{ textAlign: 'right', padding: '9px 10px', fontFamily: 'var(--font-heading)' }}>Replacement</th>
                  <th style={{ textAlign: 'right', padding: '9px 10px', fontFamily: 'var(--font-heading)' }}>Total</th>
                  <th style={{ textAlign: 'right', padding: '9px 10px', fontFamily: 'var(--font-heading)' }}>% voluntary</th>
                </tr>
              </thead>
              <tbody>
                {bloodBankData.map((row) => (
                  <tr key={row.year} style={{ borderBottom: '1px solid var(--divider)' }}>
                    <td style={{ padding: '8px 10px', fontWeight: 600 }}>{row.year}</td>
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>{row.camps}</td>
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>{row.voluntary}</td>
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>{row.replacement}</td>
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>{row.total}</td>
                    <td style={{ padding: '8px 10px', textAlign: 'right' }}>{row.percent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ENT */}
        <section id="ENT" className="svc-anchor" style={{ borderTop: '1px solid var(--divider)', paddingTop: '40px', marginBottom: '44px' }}>
          <SectionHeading>ENT</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '20px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                Our ENT unit runs OPD five days a week in the hospital, and at Dr Frasers&apos; clinic and Millennium center clinic on selected days. Our consultants are available anytime for any emergency consultations. We have a fully functional endoscopy unit set up in the OPD for foreign body removal, endoscopic examination and endoscopy guided biopsy etc.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                Few of the surgical procedures commonly performed regularly are tonsillectomy, adenoidectomy, myringoplasty, myringotomy, grommet insertion, endo-polypectomy, functional endoscopic sinus surgery (FESS), septoplasty and inferior turbinate hypertrophy reduction.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 20px' }}>
                The unit is backed up by a well equipped audiology unit. We also work with CBM under their CBR project in rehabilitating patients with hearing and speech defects, by providing surgical and non surgical interventions in the form of hearing aids and speech therapy.
              </p>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Consultants</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr Rualthankhuma Renthlei MBBS, MS</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Hospital:</strong> Wednesday, Thursday, Saturday<br /><strong style={{ color: 'var(--ink)' }}>Dr Frasers&apos; Clinic:</strong> Tuesday (Morning)<br /><strong style={{ color: 'var(--ink)' }}>Millennium Center Clinic:</strong> Tuesday (Afternoon)</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr K Lalruatkimi MBBS, DLO</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Hospital:</strong> Monday, Tuesday, Saturday<br /><strong style={{ color: 'var(--ink)' }}>Dr Frasers&apos; Clinic:</strong> Thursday (Morning)<br /><strong style={{ color: 'var(--ink)' }}>Millennium Center Clinic:</strong> Thursday (Afternoon)</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr Samuel Lalhruaitluanga MBBS, MS</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Hospital:</strong> Tuesday, Saturday<br /><strong style={{ color: 'var(--ink)' }}>Dr Frasers&apos; Clinic:</strong> Thursday</div>
                </div>
              </div>
            </div>
            <Plate src="/images/synod-hospital-ENT-18.jpg" alt="ENT unit" />
          </div>
        </section>

        {/* Eye */}
        <section id="EYE" className="svc-anchor" style={{ borderTop: '1px solid var(--divider)', paddingTop: '40px', marginBottom: '44px' }}>
          <SectionHeading>Eye</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '20px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                Our ophthalmology unit is one of the most self sufficient and well established unit in our hospital in terms of manpower, equipment and facilities. The unit has a separate &apos;Eye Block&apos; which houses OPD, general ward, cabins, operation theatre, low vision clinic and optical shop.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                We have a team of four ophthalmologist all trained in Phaco surgery, two ophthalmic nurses, two trained eye OT nurses, two ophthalmic technicians and two mid level ophthalmic attendants. We run OPD everyday in the hospital and at Dr Frasers&apos; Clinic, and OT four days a week.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 16px' }}>
                We provide services in cataract surgery (SICS, Phaco), paediatric eye surgery (squint and cataract), vitreoretinal surgery, glaucoma surgery, and all kinds of extra ocular surgeries. Apart from these, we have an eye donation center which is under NPCB.
              </p>
              <p style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>We have a partnership with the following organisations in delivering eye care services:</p>
              <ul className="bullet-list" style={{ marginBottom: '16px' }}>
                <li><strong>Christoffel Blinden Mission (CBM)</strong> – Community based Rehabilitation (CBR) and eye care programmes</li>
                <li><strong>Mission for Vision</strong> – by organising in-reach surgical eye camps for cataract</li>
                <li><strong>National Programme for Control of Blindness (NPCB)</strong> – Eye donation center and cataract surgery assistance</li>
              </ul>
              <p style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>Equipment available are:</p>
              <ul className="bullet-list" style={{ columns: 2, columnGap: '24px', marginBottom: '20px' }}>
                <li style={{ breakInside: 'avoid' }}>Phaco machine (Alcon-Laureatte)</li>
                <li style={{ breakInside: 'avoid' }}>Vitrectomy machine (Appassamy-Turbovit)</li>
                <li style={{ breakInside: 'avoid' }}>Fundus camera with FFA</li>
                <li style={{ breakInside: 'avoid' }}>HFA (Humphrey Field Analyser) (Zeiss)</li>
                <li style={{ breakInside: 'avoid' }}>Green laser</li>
                <li style={{ breakInside: 'avoid' }}>Nd YAG laser</li>
                <li style={{ breakInside: 'avoid' }}>Low vision devices</li>
                <li style={{ breakInside: 'avoid' }}>Synoptophore</li>
                <li style={{ breakInside: 'avoid' }}>A scan with keratometer</li>
              </ul>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Consultants</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr R Lalrindiki MBBS, DO, FVRS</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Hospital:</strong> Monday, Wednesday<br /><strong style={{ color: 'var(--ink)' }}>Dr Frasers&apos; Clinic:</strong> Saturday</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr Lalramengmawii MBBS, DO</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Hospital:</strong> Friday<br /><strong style={{ color: 'var(--ink)' }}>Dr Frasers&apos; Clinic:</strong> Monday, Thursday</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr Regina Lalramhluni MBBS, MS (Fellowship in Paediatric Ophthalmology)</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Hospital:</strong> Saturday<br /><strong style={{ color: 'var(--ink)' }}>Dr Frasers&apos; Clinic:</strong> Tuesday, Wednesday</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr Mac Malsawmtluanga MBBS, MS</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Hospital:</strong> Tuesday, Thursday<br /><strong style={{ color: 'var(--ink)' }}>Dr Frasers&apos; Clinic:</strong> Friday</div>
                </div>
              </div>
            </div>
            <Plate src="/images/synod-hospital-eye-01.jpg" alt="Eye unit" />
          </div>
        </section>

        {/* General & Laparoscopic Surgery */}
        <section id="Laparoscopy" className="svc-anchor" style={{ borderTop: '1px solid var(--divider)', paddingTop: '40px', marginBottom: '44px' }}>
          <SectionHeading>General & Laparoscopic Surgery</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '20px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 16px' }}>
                We have a surgery team consisting of surgeons and support staff available 24 hours for any type of emergencies. The unit has been making rapid strides, especially in minimally invasive surgery with the addition of new and better instruments & equipment. We regularly perform laparoscopic cholecystectomies and appendectomies, PCNL, Ureteroscopy, RIRS and TURP. Our surgeons recently carried out laparoscopic-assisted APR for rectal cancer, and laparoscopic resection of Meckel&apos;s Diverticulitis, which we believe is the first in the state.
              </p>
              <p style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 8px' }}>Notable facilities available are:</p>
              <ul className="bullet-list" style={{ marginBottom: '20px' }}>
                <li>Extracorporeal shockwave lithotripsy (ESWL)</li>
                <li>Holmium 40-watt laser – used for the management of urinary stones, stricture etc.</li>
                <li>Harmonic scalpel</li>
                <li>High definition laparoscopy set</li>
                <li>C-Arm image intensifier</li>
                <li>Flexible ureteroscope</li>
              </ul>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Consultants</div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr R Lalrammuana MBBS, MS</div>
                <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Hospital:</strong> Wednesday, Friday<br /><strong style={{ color: 'var(--ink)' }}>Dr Frasers&apos; Clinic:</strong> Monday<br /><strong style={{ color: 'var(--ink)' }}>Millennium Center Clinic:</strong> Saturday</div>
              </div>
            </div>
            <Plate src="/images/synod-hospital-surgery-Burr-hole.jpg" alt="Surgery unit" />
          </div>
        </section>

        {/* General Medicine */}
        <section id="General-Medicine" className="svc-anchor" style={{ borderTop: '1px solid var(--divider)', paddingTop: '40px', marginBottom: '44px' }}>
          <SectionHeading>General Medicine</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '20px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                General Medicine unit has been one of the most important pillars of our hospital from the very beginning, having the highest volume of patients, both indoor and outdoor. We have a team of highly trained consultants, medical officers and various support staff available round the clock for patient care. We treat and look after a wide variety of patients suffering from stroke, asthma, chronic kidney and liver diseases, hypertension and diabetes, and rheumatologic diseases. Our medicine team works closely with other units for the management of critically ill patients, and patients suffering from diseases with diagnostic puzzles.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 20px' }}>
                We have a separate dialysis unit with state of the art equipment and facilities for the management of patients with chronic kidney diseases.
              </p>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Consultants</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr Joseph Lalhmachhuana MBBS, MD</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}>Currently pursuing DNB (Nephrology) at Rabindranath Tagore Institute of Cardiac Sciences, Kolkata, West Bengal</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr S Parmawii MBBS, MD</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>OPD:</strong> Monday, Wednesday, Friday</div>
                </div>
              </div>
            </div>
            <Plate src="/images/synod-hospital-medicine.jpg" alt="General Medicine" />
          </div>
        </section>

        {/* HIV, Substance Abuse & Palliative Care */}
        <section id="Grace-Home-K-Ward" className="svc-anchor" style={{ borderTop: '1px solid var(--divider)', paddingTop: '40px', marginBottom: '44px' }}>
          <SectionHeading>HIV (Grace Home), Substance Abuse (K-Ward) and Palliative Care</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '20px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                <strong>I. HIV & Grace Home</strong> – A 20 bedded hospice for HIV was started in 2004 as the Church&apos;s response to an increasing HIV burden in the state. It continues to remain the only hospice for HIV in Mizoram/Northeast, making it a unique initiative of the hospital. Initially started as a &apos;Community Care Centre&apos; under NACO/MSACS, it was taken over by the Mizoram Presbyterian Church in 2012. The Presbyterian Church of Wales provided financial support for the construction of the current building along with CKTP and friends from Wales and Scotland.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                CART (Community ART Refill Group) model was recently introduced at Grace Home by Mizoram State AIDS Control Society. Through this programme, patients already on ART can get their monthly refill of medicines from Grace Home, without the need to go to the main ART Centres at Civil Hospital or Kulikawn Hospital.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 8px' }}>
                To offer the best possible medical, emotional and psychosocial care for our patients with HIV/AIDS, we offer the following services:
              </p>
              <ul className="bullet-list" style={{ marginBottom: '16px' }}>
                <li>HIV testing and diagnosis</li>
                <li>HIV pre and post-test counselling</li>
                <li>Initiation of ART (anti-retroviral therapy) drugs</li>
                <li>ART adherence counselling</li>
                <li>Opportunistic Infection (OI) management</li>
                <li>Palliative and end of life care</li>
              </ul>
              <p style={{ fontSize: '14px', lineHeight: 1.7, margin: '0 0 20px' }}>
                <strong>Contact:</strong> <a href="mailto:gracehomedurtlang@gmail.com">gracehomedurtlang@gmail.com</a> | <a href="tel:+919366095152">+91 93660 95152</a>
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                <strong>II. Substance Abuse & K-Ward</strong> – K ward is a 30 bedded ward for substance (alcohol, opioid, benzodiazepines etc.) dependency. It was started in 2000 as a separate ward specifically for detoxification and management of wound/abscess due to intravenous injection. The ward has two floors, the top floor is 15 bedded and meant for detoxification while the ground floor which is also 15 bedded is for wound/abscess management. Group/individual counselling, family counselling, health talks and other input classes are held on a regular basis.
              </p>
              <p style={{ fontSize: '14px', lineHeight: 1.7, margin: '0 0 20px' }}>
                <strong>Contact:</strong> <a href="tel:+919774186936">+91 97741 86936</a>
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                <strong>III. Palliative Care</strong> – In collaboration with Pallium India, Kerala (which is a World Health Organization Collaborating Centre (WHOCC) for Training and Policy on Access to Pain Relief), the existing informal palliative work at our hospital was formalized in February 2016.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                A palliative unit came into being with a focus on Cancer, chronic incurable diseases like stroke/paraplegia etc. along with HIV. Since the inception, two doctors and four nurses along with our social worker have undergone training at either Pallium Kerala or MNJ Hyderabad.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                Our hospital&apos;s palliative care functions through home-visit, outpatient and inpatient/referrals. Palliative patients at Leitan, Durtlang, Selesih and Sihphir are currently given home-based care on our weekly home visits. Our vision is also to cover Aizawl city once we have more manpower/financial resources.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                Pain management through morphine, catheter change, wound dressing, bed sore management, lymphedema care, colostomy care, pleural/ascetic tapping, to name a few are some of the care/services given at home on such home visits. These services are provided free of cost, possible through donations from our well-wishers – Mizo&apos;s and Non-Mizo&apos;s. We are also supporting twelve low socioeconomic families (cancer or HIV) since November 2017 with food kit worth Rs.1000.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                Since February 2016, we have 121 patients registered under our care and most of them are from the above-mentioned areas of Leitan, Durtlang etc. And we have gone on nearly 500 home visits since then.
              </p>
              <p style={{ fontSize: '14px', lineHeight: 1.7, margin: '0 0 20px' }}>
                <strong>Contact:</strong> <a href="tel:+919774186936">+91 97741 86936</a>
              </p>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Consultants</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>Dr R.L.Sanghluna MBBS</div>
                  <div style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--muted)' }}>Fellowship in HIV Medicine (School of Tropical Medicine, Calcutta)<br />Certificate Course in Pain & Palliative Medicine (MNJ Institute of Oncology & Regional Cancer Centre, Hyderabad)</div>
                  <div style={{ fontSize: '14px', marginTop: '6px' }}><strong>OPD:</strong> Tuesday, Friday</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '4px' }}>Dr Lalchhanhima Ralte MBBS, MPH</div>
                  <div style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'var(--muted)' }}>Diploma in HIV Management (Africa Centre for HIV & AIDS, Stellenbosch University, South Africa)<br />Certificate Course in Pain & Palliative Medicine (Pallium India, Trivandrum)<br />Fulbright Fellow in Substance Abuse (USA)</div>
                  <div style={{ fontSize: '14px', marginTop: '6px' }}><strong>Motivate Clinic:</strong> Saturday (By appointment only – Whatsapp message @8043328786)</div>
                </div>
              </div>
            </div>
            <Plate src="/images/grace-home-staff.jpg" alt="Grace Home staff" />
          </div>
        </section>

        {/* Obstetrics & Gynaecology */}
        <section id="Obstetrics-Gynaecology" className="svc-anchor" style={{ borderTop: '1px solid var(--divider)', paddingTop: '40px', marginBottom: '44px' }}>
          <SectionHeading>Obstetrics & Gynaecology</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '20px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                The Obstetrics and Gynaecology unit provides a comprehensive antenatal and postnatal care for high risk and complicated pregnancies. We have a labour room equipped with fetal monitors, and consultants available within the campus round the clock for emergencies. We are indeed fortunate to say that we are still one of the top choice for women across the state for maternity related services.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 20px' }}>
                We also provide a wide range of gynaecological services, including cancer surgeries, infertility treatment, and open and laparoscopic surgeries for a variety of gynaecological disorders.
              </p>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Consultants</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr K Lalremmawia MBBS, MD, DGO</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Hospital:</strong> Tuesday, Friday<br />(Antenatal clinic on Saturday)</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr Lalthakimi Darngawn MBBS, MD, DGO</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Hospital:</strong> Monday, Wednesday<br />(Antenatal clinic on Saturday)</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr Vanlalkima MBBS, DGO</div>
                  <div style={{ fontSize: '14px', color: 'var(--muted)' }}>Currently pursuing Secondary DNB (Obs & Gynae) at Nazareth Hospital, Shillong.</div>
                </div>
              </div>
            </div>
            <Plate src="/images/synod-hospital-gynae-Laparoscopy.jpg" alt="Obstetrics & Gynaecology" />
          </div>
        </section>

        {/* Orthopaedics */}
        <section id="Ortho" className="svc-anchor" style={{ borderTop: '1px solid var(--divider)', paddingTop: '40px', marginBottom: '44px' }}>
          <SectionHeading>Orthopaedics</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '20px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                Our orthopaedics unit is among the very few centers in the state regularly performing paediatric orthopaedic disease and deformity correction surgeries, joint replacement surgeries and spine surgeries, apart from the routine trauma and fracture surgeries. The orthopaedics operation theatre is equipped with two C-Arm image intensifiers and a host of other special equipment which enables our surgeons to perform minimally invasive surgeries.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 20px' }}>
                The unit is backed up by a fully functional physiotherapy and occupational therapy unit. We also work closely with Cristoffel Blinden Mission (CBM) for the detection and management of physically handicapped patients through Community based Rehabilitation (CBR) programmes.
              </p>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Consultants</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr Lalthakima MBBS, MS</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Hospital:</strong> Tuesday, Friday<br /><strong style={{ color: 'var(--ink)' }}>Dr Frasers&apos; Clinic:</strong> Thursday<br /><strong style={{ color: 'var(--ink)' }}>Millennium Center Clinic:</strong> Saturday</div>
                </div>
                <div><div style={{ fontWeight: 600 }}>Dr Lalmalsawmi Ralte</div><div style={{ fontSize: '14px', color: 'var(--muted)' }}>Currently pursuing MS (Ortho) at Christian Medical College, Vellore, Tamil Nadu</div></div>
              </div>
            </div>
            <Plate src="/images/synod-hospital-ortho-Fracture.jpg" alt="Orthopaedics" />
          </div>
        </section>

        {/* Paediatrics */}
        <section id="Paediatrics" className="svc-anchor" style={{ borderTop: '1px solid var(--divider)', paddingTop: '40px', marginBottom: '44px' }}>
          <SectionHeading>Paediatrics</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '20px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 12px' }}>
                Our Paediatrics team deals with various kinds of childhood illness, ranging from a simple cough and cold to complicated cases like meningitis and encephalitis. Along with General Medicine, Paediatrics unit has one of the highest patient load, especially during the wet season when communicable diseases are rampant.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 20px' }}>
                We also have a ten bedded Neonatal Intensive Care Unit (NICU) equipped with ventilator, incubator and phototherapy units. Our facilities have enabled us in saving the lives of preterm infants and low birth weight babies weighing as less as nine hundred grams. Our paediatric consultants are available round the clock for emergency consultations and attending complicated deliveries.
              </p>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Consultants</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr John Malsawma MBBS, MD</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Hospital:</strong> Monday, Tuesday, Thursday, Saturday<br /><strong style={{ color: 'var(--ink)' }}>Dr Frasers&apos; Clinic:</strong> Wednesday & Friday (Morning)<br /><strong style={{ color: 'var(--ink)' }}>Millennium Center Clinic:</strong> Wednesday & Friday (Afternoon)</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: '5px' }}>Dr Samuel Sailo MBBS, DCH</div>
                  <div style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}><strong style={{ color: 'var(--ink)' }}>Hospital:</strong> Wednesday, Friday, Saturday<br /><strong style={{ color: 'var(--ink)' }}>Dr Frasers&apos; Clinic:</strong> Tuesday<br /><strong style={{ color: 'var(--ink)' }}>Millennium Center Clinic:</strong> Monday, Thursday</div>
                </div>
              </div>
            </div>
            <Plate src="/images/synod-hospital-paediatrics-ventilator.jpg" alt="Paediatrics" />
          </div>
        </section>

        {/* Radiodiagnosis & Imaging */}
        <section id="Radiodiagnosis-Imaging" className="svc-anchor" style={{ borderTop: '1px solid var(--divider)', paddingTop: '40px', marginBottom: '44px' }}>
          <SectionHeading>Radiodiagnosis & Imaging</SectionHeading>
          <div style={{ maxWidth: '760px', marginTop: '20px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '18px', margin: '0 0 6px' }}>X Ray Machines (Fixed)</h4>
              <div style={{ fontWeight: 600, marginBottom: '2px' }}>A. HELLIOPHOS 500MA (Siemens)</div>
              <ul className="bullet-list" style={{ marginBottom: '10px' }}>
                <li>All excretory urogram investigations like IVU, MCU, RGU, Cg, Cug etc.</li>
                <li>Gastrointestinal tract studies like barium meal, barium swallow, barium follow through and barium enema</li>
              </ul>
              <div style={{ fontWeight: 600, marginBottom: '2px' }}>B. PLEOPHOS D 300MA (Siemens)</div>
              <ul className="bullet-list">
                <li>Used for all kinds of radiodiagnostic investigations</li>
              </ul>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '18px', margin: '0 0 4px' }}>X Ray Machines (Mobile)</h4>
              <div style={{ fontSize: '14.5px', color: 'var(--muted)' }}>Stationed at wards and ICU</div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '18px', margin: '0 0 4px' }}>C-Arm X Ray Machines</h4>
              <div style={{ fontSize: '14.5px', color: 'var(--muted)' }}>Stationed at operation theatre and lithotripsy unit</div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '18px', margin: '0 0 4px' }}>Ultrasound Machine</h4>
              <ul className="bullet-list">
                <li>VOLUTION 730 Colour Doppler machine (GE)</li>
                <li>LOGIQ-F series Colour Doppler machine (GE)</li>
              </ul>
            </div>
            <div style={{ marginBottom: '18px' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '18px', margin: '0 0 4px' }}>CT Scan</h4>
              <div style={{ fontSize: '14.5px', color: 'var(--muted)' }}>Brightspeed 16 slices CT scan attached with teleradiology (GE)</div>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--muted)', margin: 0 }}>
              <strong style={{ color: 'var(--ink)' }}>Note:</strong> All our X-ray machines and CT scan machine are certified and registered under Atomic Energy Regulation Board (AERB), Government of India, Mumbai, and monitored by designated Radiation Safety Officer (RSO).
            </p>
          </div>
        </section>

        {/* Laboratory */}
        <section id="Lab" className="svc-anchor" style={{ borderTop: '1px solid var(--divider)', paddingTop: '40px' }}>
          <SectionHeading>Laboratory</SectionHeading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '20px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.75, margin: '0 0 18px' }}>
                Our laboratory is open 24 × 7 and offers a wide range of pathological, biochemical and microbiological tests and investigations at affordable rates for our patients. We are currently in the process of acquiring NABL accreditation.
              </p>
              <div style={{ marginBottom: '14px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '18px', margin: '0 0 6px' }}>Pathology</h4>
                <ul className="bullet-list">
                  <li>Haematology – semi-automation</li>
                  <li>Clinical pathology – semi-automation</li>
                  <li>Histopathology and cytology (liquid-based cytology)</li>
                </ul>
              </div>
              <div style={{ marginBottom: '14px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '18px', margin: '0 0 6px' }}>Biochemistry and Immunoassay</h4>
                <ul className="bullet-list"><li>full automation</li></ul>
              </div>
              <div style={{ marginBottom: '18px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '18px', margin: '0 0 6px' }}>Microbiology</h4>
                <ul className="bullet-list">
                  <li>Biomerieux VITEK – semi-automation</li>
                  <li>Blood culture BACTEC 9050 – semi-automation</li>
                  <li>GenXpert (CBNaat) – in collaboration with Mizoram University</li>
                  <li>Designated Microscopy Centre – under RNTCP</li>
                  <li>Various serological tests</li>
                </ul>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Consultants</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ fontWeight: 600 }}>Dr Lalnunnemi MBBS, MD (Pathology)</div>
                <div style={{ fontWeight: 600 }}>Dr R Lalremruata MBBS, MD (Microbiology)</div>
                <div><div style={{ fontWeight: 600 }}>Dr Ruth Lalmuanpuii</div><div style={{ fontSize: '13.5px', color: 'var(--muted)' }}>Currently pursuing MD (Pathology) at Calcutta Medical College, Kolkata, West Bengal</div></div>
                <div><div style={{ fontWeight: 600 }}>Dr Carolyne Lallawmzuali</div><div style={{ fontSize: '13.5px', color: 'var(--muted)' }}>Currently pursuing MD (Pathology) at Vardhman Mahavir Medical College & Safdurjung Hospital, New Delhi</div></div>
              </div>
            </div>
            <Plate src="/images/synod-hospital-Lab.jpg" alt="Laboratory" />
          </div>
        </section>
      </div>
    </>
  );
}
