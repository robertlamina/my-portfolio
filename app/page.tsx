import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { resumeData } from "@/data/resumeData";

const skills = [
  { name: "Node.js", mark: "JS", tone: "green" },
  { name: "MongoDB", mark: "◆", tone: "green" },
  { name: "React / Next.js", mark: "⚛", tone: "blue" },
  { name: "Laravel / PHP", mark: "⌘", tone: "red" },
  { name: "GCP / AWS", mark: "☁", tone: "blue" },
  { name: "TypeScript", mark: "TS", tone: "blue" },
  { name: "Vue.js", mark: "V", tone: "green" },
  { name: "MySQL", mark: "SQL", tone: "orange" },
  { name: "Docker", mark: "◈", tone: "blue" },
  { name: "CI / CD", mark: "∞", tone: "purple" },
  { name: "REST APIs", mark: "API", tone: "orange" },
  { name: "WebSockets", mark: "WS", tone: "blue" },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <div>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <span />
    </div>
  );
}

function WorkVisual({ index }: { index: number }) {
  return (
    <div className={`work-visual work-visual--${index}`}>
      <div className="visual-window">
        <span /><span /><span />
        <div className="visual-lines"><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}

export default function Home() {
  const projects = resumeData.projects.slice(0, 3);
  const about = [
    "I&apos;m a versatile software engineer with proficiency in a diverse range of technologies, including Node.js, PHP, Laravel, React, Vue.js, and cloud platforms.",
    "I have built high-traffic products and enterprise services for Globe Telecom, Jollibee, KROMA Entertainment, Rappit, and 917Ventures, with a focus on reliability and thoughtful user experiences.",
    "Beyond my core projects, I actively contribute to open-source initiatives and believe in the power of knowledge sharing and collaborative development.",
  ];

  return (
    <div className="reference-page">
      <section className="hero-reference">
        <div className="hero-reference__copy">
          <p className="hero-kicker">Software engineer · Philippines</p>
          <h1>Building useful things<br /><em>for the web.</em></h1>
          <div className="hero-socials">
            <a href="https://linkedin.com/in/johnrobertcruda" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="https://github.com/jcruda" aria-label="GitHub"><Github size={16} /></a>
            <a href={`mailto:${resumeData.email}`} aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>
        <div className="hero-code" aria-label="Developer profile">
          <span>{"{"}</span>
          <p><b>&quot;name&quot;</b>: &quot;Rob Cruda&quot;,</p>
          <p><b>&quot;occupation&quot;</b>: &quot;software engineer&quot;,</p>
          <p><b>&quot;likes&quot;</b>: [&quot;clean code&quot;, &quot;good UX&quot;],</p>
          <span>{"}"}</span>
        </div>
      </section>

      <main>
        <section id="work" className="work-section content-width">
          <SectionHeading eyebrow="Portfolio" title="My Work" />
          <div className="work-list">
            {projects.map((project, index) => (
              <article className={`work-item ${index % 2 ? "work-item--reverse" : ""}`} key={project.title}>
                <div className="work-item__body">
                  <h3>{project.title}</h3>
                  <p className="work-item__client">{project.client}</p>
                  <ul>
                    {project.description.split(". ").slice(0, 3).map((line) => <li key={line}>{line.replace(/\.$/, "")}</li>)}
                  </ul>
                  <a className="text-link" href="#contact">View project <ArrowUpRight size={14} /></a>
                </div>
                <WorkVisual index={index} />
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="content-width">
            <SectionHeading eyebrow="Portfolio" title="About Me" />
            <div className="about-grid">
              {about.map((paragraph) => <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }} />)}
            </div>
          </div>

          <div className="content-width skills-wrap">
            <h2>Suffering from skill issues</h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <span className={`skill-mark skill-mark--${skill.tone}`}>{skill.mark}</span>
                  <strong>{skill.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="content-width contact-grid">
            <div>
              <h2>Wanna talk?</h2>
              <p>Contact me with any questions or just to say a few nice words ... or mean ones. Up to you ... free will and all</p>
            </div>
            <form className="contact-form" action={`mailto:${resumeData.email}`} method="post" encType="text/plain">
              <label>Name <input name="name" placeholder="Your name" /></label>
              <label>Your email* <input name="email" type="email" placeholder="Your email address" required /></label>
              <label>Message* <textarea name="message" placeholder="Enter your message" required /></label>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="content-width contact-footer">© {new Date().getFullYear()} Rob</div>
        </section>
      </main>
    </div>
  );
}
