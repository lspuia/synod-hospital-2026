import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import Plate from '@/components/Plate';
import ArchiveGallery from '@/components/ArchiveGallery';
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
  { date: '11th March 1936', text: 'Missionary nurse Miss Gladys M Evans arrived and joined the hospital. She had a strong desire to serve people in remote areas and was responsible for the opening of rural health centres. She served for 27 years and was the longest-serving missionary nurse in Mizoram.' },
  { date: 'November 1937', text: 'The arrival of Dr Gyneth Parul Roberts B.Sc, M.B.B.Ch., who was one of the longest-serving missionaries in Mizoram. She dedicated 23 years of her life in the service of God and the Mizos.' },
  { date: '1939', text: 'The fourth missionary nurse Miss Anne Dorothy Harries arrived.' },
  { date: '1941', text: 'Sister D Imogen P Roberts, the fifth missionary nurse arrived and joined the hospital.' },
  { date: 'July 1951', text: 'The second Mizo doctor Dr RK Nghakliana joined after completing his MBBS from Christian Medical College, Vellore.' },
  { date: '1954', text: 'The arrival of Miss May Bounds, who had already worked at different places in Wales and attained the rank of Sister before coming to Mizoram. She spent a total of 15 years with the Welsh Mission.' },
  { date: '29th February 1958', text: 'The first ever X-ray machine in Mizoram was purchased and commissioned for use.' },
];

const partners = [
  { name: 'The Department of Health & Family Welfare', href: 'https://health.mizoram.gov.in/', desc: ', Government of Mizoram – for tuberculosis treatment (RNTCP) and State Blindness Control Society.' },
  { name: 'The Mizoram State AIDS Control Society (MSACS)', href: 'http://mizoramsacs.nic.in/', desc: ' – for Integrated Counselling & Testing Centre (ICTC) and Blood Bank.' },
  { name: 'The Christian Medical Association of India (CMAI)', href: 'http://cmai.org/', desc: ' – for mainstreaming HIV/AIDS, Infection Control and Hospital Waste Management.' },
  { name: 'Christoffel Blinden Mission (CBM)', href: 'https://www.cbmindia.org.in/', desc: ' – for Community Based Rehabilitation (CBR) project and eye care services.' },
  { name: 'Cluster Project (CBM cum SCEH)', href: '#', desc: ' – for diabetic retinopathy, glaucoma and pediatric eye care services.' },
  { name: 'Sight Savers', href: 'https://www.sightsavers.org/', desc: ' – for low vision problems.' },
  { name: 'Mission for Vision', href: 'http://www.missionforvision.org.in/', desc: ' – for cataract management.' },
  { name: 'Pallium India', href: 'https://palliumindia.org/', desc: ' – for palliative care.' },
];

const chaplains = [
  { num: 1, name: 'Rev Lalthanga (1980-1982)' },
  { num: 2, name: 'Rev Chanchinmawia (Late) (1983-1986)' },
  { num: 3, name: 'Rev Lalnghakliana Pautu (1987-1993)' },
  { num: 4, name: 'Rev C Sangliana (1994-2000)' },
  { num: 5, name: 'Rev Vansawma (2001-2003)' },
  { num: 6, name: 'Rev K Ramliana (2004)' },
  { num: 7, name: 'Rev V Lawmkima (2005-2008)' },
  { num: 8, name: 'Rev RS Rokima (2005-2010)' },
  { num: 9, name: 'Rev C Lalbiakhluna (2009-2013)' },
  { num: 10, name: 'Rev K Lalfakzuala (2011-2013)' },
  { num: 11, name: 'Rev R Ramdinmawia (2014- present)' },
  { num: 12, name: 'Rev H Biakthansanga (2014- present)' },
  { num: 13, name: 'Rev HC Khaicho (2014- present)' },
  { num: 14, name: 'Rev H Lalzuiliana (2019- present)' },
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
              From our humble beginning of one doctor, one nurse and fourteen beds in 1928, we have progressed to being the largest hospital in the state with 355 beds at present. The growth, though not very dramatic, is nevertheless steady, keeping pace with the needs of the people we serve.
            </p>
            <ul className="bullet-list">
              <li><a href="#History">History</a></li>
              <li><a href="#Governance">Governance</a></li>
              <li><a href="#Finance">Finance</a></li>
              <li><a href="#Partners">Partners</a></li>
              <li><a href="#PhotoArchive">Through the Years</a></li>
            </ul>
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
              <strong>Dr Peter Fraser, B.Sc, MD</strong> from Caernarfon, Wales was the first missionary doctor to arrive in Mizoram, which was then known as the Lushai Hills. He started medical works in the year 1908. According to records, Dr Fraser saw as many as 24,000 patients in his first year alone. He would distribute medicines in cups made of bamboo which were labelled with phrases from the Bible. In 1910, he opened a dispensary at Mission Veng and kept a few beds for those who needed admission.
            </p>
            <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 12px' }}>
              Dr Fraser was a tough opponent to slavery and was against the local chiefs who kept slaves. It was said that he set 40 slaves free by paying their price out of his own money. Due to his stand against slavery, the British administration feared that it might lead to a conflict with the local chiefs, and he was subsequently forced to return to Wales in 1912.
            </p>
            <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: 0 }}>
              Seven years after the departure of Dr Peter Fraser, Mr D Thianga, a trained compounder, left his government job and re-instated the dispensary.
            </p>
          </div>
        </div>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '36px 0 14px' }}>
          Welsh Mission Hospital
        </h3>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 12px' }}>
          <strong>Rev E L Mendus</strong> was the missionary in charge of education in Lushai Hills during that time. He was greatly grieved to see the sufferings of the people following the departure of Dr Peter Fraser. Late one night, he had a vision, and heard the cries of patients in despair in far off villages saying – <strong>&quot;Is there any doctor? Isn&apos;t there even one nurse? Save us and help us.&quot;</strong> He was so moved by this vision that he could not think of anything else. As he was going to bed, he repeated, <strong>&quot;Hospital, hospital. How great is the need for a hospital&quot;</strong>.
        </p>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 12px' }}>
          Following this, Rev E L Mendus wrote an article titled <strong>&apos;The Diary of a Jungle Missionary&apos;</strong> in a monthly magazine <strong>&apos;The Treasury&apos;</strong> which was published by the Presbyterian Church of Wales.
        </p>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 12px' }}>
          The hillock in Durtlang, known as Derhkentlang was offered to the Church by <strong>M Suaka, the chief of Durtlang village</strong>. This offer was heartily accepted by the church. It is interesting to note that the village of Durtlang was founded by M Suaka for Christian refugees who faced persecution by their families and society because of their faith. Derhkentlang became the headquarters of the North East Presbytery and the Theological school was shifted there. Compounder D Thianga also shifted the dispensary from Mission Veng to Durtlang in 1924.
        </p>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 12px' }}>
          Dr John Williams LMP, arrived in Lushai Hills on 22nd February 1928 and settled at Durtlang. He was christened Pu Daka by the locals. With the help of only two trained staff, namely compounder D Thianga and staff nurse Tlawmkungi, he converted the old theological school building and used it to establish the hospital. The hospital beds were procured from the old theological school hostel, and thus with the admission of the first patient on 6th March 1928, the hospital at Durtlang was inaugurated and named the <strong>&apos;Welsh Mission Hospital&apos;</strong>. In order to augment the nursing services, Dr Williams started a school of nursing the same year. The first student was a 16-year-old local girl named Khuangi, who continued to work for the hospital after her training until 1936.
        </p>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '36px 0 16px' }}>
          Subsequent important timeline
        </h3>
        <div style={{ borderLeft: '2px solid var(--rule)', paddingLeft: '22px', marginBottom: '16px' }}>
          {timeline.map((t, i) => (
            <div key={i} style={{ marginBottom: '18px', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '16px', color: 'var(--gold)', marginBottom: '3px', fontVariantNumeric: 'tabular-nums' }}>{t.date}</div>
              <div style={{ fontSize: '15px', lineHeight: 1.7 }}>{t.text}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 12px' }}>
          During the period of the Welsh Mission, a number of doctors had come to serve the hospital during the furlough of the resident doctors, namely – Dr Lallo from 1946-1947 & 1956-1957, Dr Bonar Lindsay for a short period in 1953 & 1955, and Dr Sangliana, Dr Challiankimi and Dr Lalengi, each for a short duration.
        </p>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '22px', margin: '36px 0 14px' }}>
          Presbyterian Church Synod Hospital
        </h3>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 12px' }}>
          The political climate in our country began to forebode uncertainty for the missionaries, and it became clear that the era of missionaries was coming to an end. Anticipating this, the Welsh Mission handed over the ownership and management of the hospital, including the land, buildings and all its assets to the Synod of the Presbyterian Church of Mizoram on 28th February 1958. The name of the hospital was changed from the &apos;Welsh Mission Hospital&apos; to the &apos;Presbyterian Church Synod Hospital&apos;.
        </p>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 12px' }}>
          Among other things specified, Charter No. 4 of the handover stated that – &apos;the hospital shall continue to serve the purposes for which it was originally founded, namely to treat and care for the sick and to train nurses in a Christian atmosphere. This implies that the work of the hospital is an important evangelizing activity in its own right.&apos;
        </p>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0' }}>
          The name of the hospital was changed to <strong>&apos;Presbyterian Hospital&apos;</strong> in 1994, and subsequently to <strong>&apos;Synod Hospital&apos;</strong> in 2012.
        </p>

        <hr style={{ height: '1px', border: 0, background: 'var(--divider)', margin: '48px 0' }} />

        {/* Governance */}
        <SectionHeading size="lg" id="Governance">Governance</SectionHeading>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '16px 0 0' }}>
          The hospital is governed by a board constituted by the Presbyterian Church of India, Mizoram Synod. The Mizoram Synod moderator is Chairman of the Board, and the hospital director, the Board Secretary. The members consist of representatives from all the Presbyteries under the Mizoram Synod, eight nominated members, eight ex-officio members and two representatives from the hospital. The Governing Board meets twice a year. And to manage the day-to-day running of the hospital, a Board Executive Committee (BEC) is instituted, which meets if and when necessary.
        </p>

        <hr style={{ height: '1px', border: 0, background: 'var(--divider)', margin: '48px 0' }} />

        {/* Finance */}
        <SectionHeading size="lg" id="Finance">Finance</SectionHeading>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '16px 0 0' }}>
          The hospital is a mission hospital run by incomes of the hospital and contributions of the churches through Mizoram Synod. Minimal charges are levied for services, medicines, food and accommodation. In order to accommodate everyone, especially the economically disadvantageous groups, the deficit is filled in by the Mizoram Synod. In spite of this, the hospital has managed to thrive and grow at a steady rate, proving that money alone does not sustain an institution. Rather it is the good governance, goodwill and un-ending prayers and support of the churches that gives us sustenance. In the present day, the number of patients who have not been able to pay their hospital bills is gradually increasing, and this apparent financial problem renders us a great missionary challenge, and achievement at the same time.
        </p>

        <hr style={{ height: '1px', border: 0, background: 'var(--divider)', margin: '48px 0' }} />

        {/* Partners */}
        <SectionHeading size="lg" id="Partners">Our Partners</SectionHeading>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '16px 0 14px' }}>We work closely with the following organizations to deliver health care services:</p>
        <ul className="bullet-list">
          {partners.map((p, i) => (
            <li key={i} style={{ padding: '9px 0', borderBottom: '1px solid var(--divider)' }}>
              {p.href !== '#' ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>{p.name}</a>
              ) : (
                <span style={{ fontWeight: 600 }}>{p.name}</span>
              )}
              {p.desc}
            </li>
          ))}
        </ul>

        <hr style={{ height: '1px', border: 0, background: 'var(--divider)', margin: '48px 0' }} />

        {/* Outreach Program */}
        <SectionHeading size="lg" id="Outreach">Outreach Program</SectionHeading>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '20px', margin: '24px 0 12px' }}>History</h3>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 12px' }}>
          Outreach program has always been an integral part of our service since the days of the Welsh medical missionaries. The first village dispensary was established on 18th May, 1954 at Sawleng, approximately 100 kilometres from Durtlang. Miss Gladys M Evans (Pi Hruaii) along with Sister Lianchhungi were in-charge of the programme. Following Sawleng, dispensaries were also established at Sihfa, Chhawrtui and Pukzing. These dispensaries were kept well supplied with trained staff, medicines and equipments. However, with the growth and development of government health care facilities in rural areas over the years, they were gradually closed down.
        </p>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '20px', margin: '24px 0 12px' }}>Current Modus Operandi</h3>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '0 0 12px' }}>
          Although we no longer run dispensaries, we regularly organize mobile clinics on a regular basis throughout the year with the help and support of local churches and NGO&apos;s. The team usually comprises of a couple of doctors, including specialist doctors, staff nurses, laboratory and ophthalmic technicians, and pharmacist along with a huge stock of medicines. Apart from routine consultations, the team sometime holds public meetings and awareness campaigns on topics like HIV/AIDS, maternal and child health etc.
        </p>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '20px', margin: '24px 0 12px' }}>Mobile Clinics 2018</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '400px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--rule)' }}>
                <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 600 }}>Date</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 600 }}>Place</th>
                <th style={{ textAlign: 'right', padding: '10px 12px', fontWeight: 600 }}>No. of patients</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: '17th Jan 2018', place: 'Zawlpui', patients: '92' },
                { date: '18th Jan 2018', place: 'Putlungasih', patients: '72' },
                { date: '15th Feb 2018', place: 'Meidum/Pangbalkawn', patients: '379' },
                { date: '12th Mar 2018', place: 'Mualpheng', patients: '414' },
                { date: '13th Mar 2018', place: 'Mamit', patients: '432' },
                { date: '30th Apr 2018', place: 'Khatla', patients: '467' },
                { date: '29th Jun 2018', place: 'West Phaileng', patients: '311' },
                { date: '22nd Sep 2018', place: 'Chawnpui', patients: '274' },
                { date: '28th Oct 2018', place: 'East Lungdar', patients: '618' },
                { date: '30th Oct 2018', place: 'Bungtlang', patients: '222' },
              ].map((r, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--divider)' }}>
                  <td style={{ padding: '10px 12px', fontVariantNumeric: 'tabular-nums' }}>{r.date}</td>
                  <td style={{ padding: '10px 12px' }}>{r.place}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{r.patients}</td>
                </tr>
              ))}
              <tr style={{ fontWeight: 600 }}>
                <td style={{ padding: '10px 12px' }}></td>
                <td style={{ padding: '10px 12px' }}>TOTAL</td>
                <td style={{ padding: '10px 12px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>3281</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr style={{ height: '1px', border: 0, background: 'var(--divider)', margin: '48px 0' }} />

        {/* Chaplaincy */}
        <SectionHeading size="lg" id="Chaplaincy">Chaplaincy</SectionHeading>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '16px 0 12px' }}>
          The Mizoram Presbyterian Church Synod held in 1979 decided that a full time chaplain should be stationed within the hospital campus. The first chaplain was Rev Lalthanga, who started in the year 1980. A chaplaincy committee was set up the same year, and the first meeting was held on the 24th of July 1980 at the Medical Superintendent&apos;s bungalow.
        </p>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '20px', margin: '24px 0 12px' }}>Our Chaplain&apos;s work is mainly concerned with</h3>
        <ul className="bullet-list" style={{ marginBottom: '24px' }}>
          <li>Visiting patients admitted in the wards, offering prayers and counselling whenever required</li>
          <li>Praying for the bereaved families in times of death at any hours of the day</li>
          <li>Conducting prayer services at the hospital chapel for the hospital staffs and patients</li>
          <li>Attending morning devotions at different units on a regular basis</li>
          <li>Organising annual retreat programme for hospital staffs</li>
          <li>Devotion and bible class for nursing students</li>
        </ul>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '20px', margin: '24px 0 12px' }}>Past and present Chaplains</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px 24px' }}>
          {chaplains.map((c) => (
            <div key={c.num} style={{ display: 'flex', gap: '10px', padding: '6px 0' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--gold)', minWidth: '24px' }}>{c.num}</span>
              <span style={{ fontSize: '15px' }}>{c.name}</span>
            </div>
          ))}
        </div>

        <hr style={{ height: '1px', border: 0, background: 'var(--divider)', margin: '48px 0' }} />

        {/* Photo Archive */}
        <SectionHeading size="lg" id="PhotoArchive">Through the Years</SectionHeading>
        <p style={{ fontSize: '15.5px', lineHeight: 1.8, margin: '16px 0 24px' }}>
          A collection of historical photographs documenting our journey since 1928 - the missionaries, doctors, nurses, staff, and moments that shaped Synod Hospital.
        </p>
        <ArchiveGallery />
      </div>
    </>
  );
}
