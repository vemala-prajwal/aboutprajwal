import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import AboutHero from '@/components/AboutHero';

const SKILLS = ['UI Design', 'UX Research', 'Figma', 'Prototyping'];
const INTERESTS = ['Typography', 'Design Systems', 'Motion Design'];
const HOBBIES = [
  { title: 'Film Photography', desc: 'Shooting mostly on 35mm, developing at home when I can.' },
  { title: 'Listening To Music', desc: 'Gives My Mind A Break' },
  { title: 'Playing Football', desc: 'Still A Learner' },
];
const EDUCATION = [
  { years: '2011 — 2021', title: '1st - 7th Grade', place: 'St. Thomus Public School' },
  { years: '2022 — 2024', title: '8th - 10th Grade', place: 'Oxford English High School' },
  { years: '2024 — 2026', title: '11th - 12th Grade', place: 'Narayana PU College' },
];

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <div className="about-sections-wrap">
        <ScrollReveal>
          <section id="education" className="about-section reveal">
            <p className="section-index">02</p>
            <h2 className="section-heading">Education</h2>
            <div className="edu-list">
              {EDUCATION.map((item) => (
                <div className="edu-item" key={item.title}>
                  <span className="edu-years">{item.years}</span>
                  <div>
                    <p className="edu-title">{item.title}</p>
                    <p className="edu-place">{item.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="about-section reveal">
            <p className="section-index">03</p>
            <h2 className="section-heading">Skills &amp; Interests</h2>
            <div className="tag-group">
              <p className="tag-label">Skills</p>
              <div className="tag-list">
                {SKILLS.map((s, idx) => (
                  <span className={`tag ${idx < 2 ? 'tag-strong' : ''}`} key={s}>{s}</span>
                ))}
              </div>
            </div>

            <div className="tag-group">
              <p className="tag-label">Interests</p>
              <div className="tag-list">
                {INTERESTS.map((i) => <span className="tag" key={i}>{i}</span>)}
              </div>
            </div>
          </section>

          <section id="hobbies" className="about-section reveal">
            <p className="section-index">04</p>
            <h2 className="section-heading">Hobbies</h2>
            <div className="hobby-strip">
              {HOBBIES.map((h) => (
                <div className="hobby-card" key={h.title}>
                  <div className="hobby-icon" aria-hidden />
                  <div>
                    <p className="hobby-title">{h.title}</p>
                    <p className="hobby-desc">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
