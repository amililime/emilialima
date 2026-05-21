import Reveal from "./Reveal";
import Section from "./Section";

type Role = {
  title: string;
  dates: string;
  body: string;
};

type Job = {
  company: string;
  location: string;
  span: string;
  roles?: Role[];
  body?: string;
};

const jobs: Job[] = [
  {
    company: "NinjaOne",
    location: "Berlin",
    span: "Oct 2023 — Present",
    roles: [
      {
        title: "Localization Web Developer",
        dates: "Mar 2025 — Present",
        body: "Owns end-to-end development and localization of ninjaone.com across 8+ languages for EMEA marketing growth. Leads the localization pipeline: translation workflows, multilingual QA, release validation, SEO, Core Web Vitals. Onboards and mentors new developers; collaborates across Marketing, Product, Engineering, Support, and Sales.",
      },
      {
        title: "Software Localization Engineer",
        dates: "Aug 2024 — Mar 2025",
        body: "Drove software UI localization and QA for NinjaOne's SaaS product across multiple languages. Managed translation workflows, release validation, and UI bug fixes with Product and Engineering.",
      },
      {
        title: "Technical Support Engineer",
        dates: "Oct 2023 — Aug 2024",
        body: "Supported NinjaOne's SaaS agent (patch management, MDM, network monitoring, automation) for global customers. Specialized progressively in localization issues; transitioned into Engineering.",
      },
    ],
  },
  {
    company: "Frontend / Web Developer — Freelance",
    location: "Amsterdam · Hamburg · Munich",
    span: "2022 — 2023",
    body: "Built responsive websites and UI components in HTML, CSS, JavaScript, and React for individual clients. Integrated REST APIs; collaborated with UX/UI designers; remote, Agile, Git-based.",
  },
  {
    company: "IT Recruiter — Thaloz",
    location: "Montevideo, Remote",
    span: "Jun — Sep 2021",
    body: "Recruited senior software engineers globally for fintech clients. Screened technical skills and English proficiency; optimized recruiting lifecycle via OKRs.",
  },
  {
    company: "Technical Support Analyst — Tata Consultancy Services",
    location: "Montevideo, Remote",
    span: "Jul 2020 — Jun 2021",
    body: "Technical support for 200+ employees across Panama and South Africa via Zendesk. Optimized ITOps processes; Agile/Scrum certified.",
  },
  {
    company: "Technical Support Specialist — Amazon (via Alorica)",
    location: "Montevideo, Remote",
    span: "Mar 2019 — Nov 2020",
    body: "Hardware/software troubleshooting for US customers; contributed to 18% SLA-time reduction. Led the customer feedback tribe, channeling user insights to Product and Engineering.",
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="III — Experience"
      title="A working chronology"
    >
      <ol className="divide-ink/15 border-ink/15 mx-auto max-w-4xl divide-y border-t border-b">
        {jobs.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 40}>
            <article className="grid gap-6 py-10 sm:grid-cols-[140px_1fr] sm:gap-10 sm:py-12">
              <div className="text-ink/60 font-display text-base leading-tight sm:text-lg">
                {job.span}
                <div className="text-ink/60 font-body mt-2 text-[10px] uppercase tracking-[0.28em]">
                  {job.location}
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl leading-tight font-light tracking-tight sm:text-3xl">
                  {job.company}
                </h3>
                {job.body && (
                  <p className="mt-4 text-base leading-relaxed font-light sm:text-lg">
                    {job.body}
                  </p>
                )}
                {job.roles && (
                  <ul className="mt-8 space-y-8">
                    {job.roles.map((r) => (
                      <li key={r.title}>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                          <h4 className="font-display text-lg font-normal italic sm:text-xl">
                            {r.title}
                          </h4>
                          <span className="text-ink/60 text-[10px] uppercase tracking-[0.28em] sm:whitespace-nowrap">
                            {r.dates}
                          </span>
                        </div>
                        <p className="mt-3 text-base leading-relaxed font-light sm:text-[1.05rem]">
                          {r.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
