"use client";

import { m, useReducedMotion } from "framer-motion";
import {
  cvAbout,
  cvEducation,
  cvExperience,
  cvLinks,
  cvName,
  cvProjects,
  cvSections,
  cvSkills,
  cvStatus,
} from "@data/cv";
import { MOTION } from "@lib/motion";
import { MotionProvider } from "@components/motion/MotionProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

const rowGap = "gap-8";
const sectionGap = "mb-28";

function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <m.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : 0.08,
            delayChildren: reduced ? 0 : 0.04,
          },
        },
      }}
    >
      {children}
    </m.div>
  );
}

function StaggerItem({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <m.section
      id={id}
      className={className}
      variants={{
        hidden: reduced ? fadeUp.visible : fadeUp.hidden,
        visible: { ...fadeUp.visible, transition: MOTION.medium },
      }}
    >
      {children}
    </m.section>
  );
}

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <header className="mb-12">
      <div className="flex items-baseline gap-4 font-mono">
        <span className="text-xs text-terminal">{num}</span>
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
          {title}
        </h2>
      </div>
      <hr className="mt-5 border-t border-border" />
    </header>
  );
}

function RowNumber({ children }: { children: React.ReactNode }) {
  return (
    <span className="mr-8 min-w-[2.5rem] shrink-0 text-xs text-terminal">
      {children}
    </span>
  );
}

function SplitRow({
  row,
  title,
  meta,
  variant = "primary",
}: {
  row: string;
  title: string;
  meta?: string;
  variant?: "primary" | "info";
}) {
  const titleClass =
    variant === "info"
      ? "text-terminal"
      : "font-medium text-white";

  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-12 font-mono">
      <RowNumber>{row}</RowNumber>
      <span className={`min-w-0 text-sm leading-8 ${titleClass}`}>{title}</span>
      {meta ? (
        <span className="shrink-0 text-right text-sm leading-8 text-terminal">
          {meta}
        </span>
      ) : (
        <span aria-hidden="true" />
      )}
    </div>
  );
}

function NameRow() {
  return (
    <div className="flex font-mono">
      <RowNumber>01</RowNumber>
      <p className="text-sm leading-8">
        <span className="font-medium text-white">{cvName.primary}</span>
        <span className="text-terminal"> — {cvName.info}</span>
      </p>
    </div>
  );
}

function LinkRow({
  row,
  label,
  handle,
  href,
}: {
  row: string;
  label: string;
  handle: string;
  href: string;
}) {
  const external = !href.startsWith("mailto:");

  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-12 font-mono">
      <RowNumber>{row}</RowNumber>
      <span className="text-sm font-medium leading-8 text-white">{label}</span>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="shrink-0 text-right text-sm leading-8 text-terminal transition-colors hover:text-white"
      >
        {handle}
      </a>
    </div>
  );
}

function SkillsLine() {
  const skills = cvSkills.split(" · ");

  return (
    <div className="flex font-mono">
      <RowNumber>01</RowNumber>
      <p className="text-sm leading-8 text-white">
        {skills.map((skill, index) => (
          <span key={skill}>
            {index > 0 ? (
              <span className="mx-4 text-terminal/40">·</span>
            ) : null}
            {skill}
          </span>
        ))}
      </p>
    </div>
  );
}

function TerminalChrome({ children }: { children: React.ReactNode }) {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="mx-auto w-full max-w-5xl border border-border font-mono">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-border px-5 py-3 text-xs text-terminal">
        <span>[ MAN 1 AYDOS ]</span>
        <span>CD ~</span>
        <span>:SET NUMBER</span>
        <span suppressHydrationWarning>
          {today} AYDOS(1)
        </span>
      </div>

      <div className="flex flex-col md:flex-row">
        <aside className="flex shrink-0 flex-col justify-between border-b border-border px-8 py-10 md:w-56 md:border-b-0 md:border-r">
          <nav aria-label="CV sections">
            <ul className="flex flex-col gap-4">
              {cvSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 text-xs leading-8 transition-colors hover:text-white"
                  >
                    <span className="w-3 shrink-0 text-terminal opacity-0 transition-opacity group-hover:opacity-100">
                      ›
                    </span>
                    <span className="tracking-wider">
                      <span className="text-terminal">{section.num}</span>{" "}
                      <span className="text-white">{section.title}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-14 hidden md:block">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              status
            </p>
            <dl className="flex flex-col gap-4 text-xs leading-8">
              <div className="flex justify-between gap-6">
                <dt className="text-terminal">current</dt>
                <dd className="flex items-center gap-2 text-terminal">
                  <span className="size-1.5 rounded-full bg-terminal" />
                  {cvStatus.current}
                </dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-terminal">loc</dt>
                <dd className="text-terminal">{cvStatus.loc}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-terminal">tz</dt>
                <dd className="text-terminal">{cvStatus.tz}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-terminal">mail</dt>
                <dd className="text-terminal">{cvStatus.mail}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-terminal">git</dt>
                <dd className="text-terminal">{cvStatus.git}</dd>
              </div>
            </dl>
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-8 py-10 md:px-12 md:py-12">
          {children}
        </main>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-5 py-3 text-xs text-terminal">
        <span className="flex items-center gap-1">
          AYDOS@HOME<span className="text-terminal/60">:</span> /CV $
          <span className="ml-1 inline-block size-3 bg-terminal" />
        </span>
        <span>NAME 168%</span>
      </div>
    </div>
  );
}

export function CvContent() {
  return (
    <MotionProvider>
      <div className="flex w-full justify-center px-4 py-12 md:px-8 md:py-16">
        <TerminalChrome>
          <StaggerGroup className="flex flex-col">
            <StaggerItem id="name" className={sectionGap}>
              <SectionHeader num="001" title="name" />
              <NameRow />
            </StaggerItem>

            <StaggerItem id="about" className={sectionGap}>
              <SectionHeader num="002" title="about" />
              <div className="flex font-mono">
                <RowNumber>01</RowNumber>
                <p className="text-sm leading-8 text-terminal">{cvAbout}</p>
              </div>
            </StaggerItem>

            <StaggerItem id="education" className={sectionGap}>
              <SectionHeader num="003" title="education" />
              <div className={`flex flex-col ${rowGap}`}>
                {cvEducation.map((entry) => (
                  <SplitRow
                    key={entry.row}
                    row={entry.row}
                    title={entry.title}
                    meta={entry.meta}
                    variant={entry.variant ?? (entry.row === "02" ? "info" : "primary")}
                  />
                ))}
              </div>
            </StaggerItem>

            <StaggerItem id="experience" className={sectionGap}>
              <SectionHeader num="004" title="experience" />
              <div className={`flex flex-col ${rowGap}`}>
                {cvExperience.map((entry) => (
                  <SplitRow key={entry.row} {...entry} />
                ))}
              </div>
            </StaggerItem>

            <StaggerItem id="projects" className={sectionGap}>
              <SectionHeader num="005" title="projects" />
              <div className={`flex flex-col ${rowGap}`}>
                {cvProjects.map((entry) => (
                  <SplitRow key={entry.row} {...entry} />
                ))}
              </div>
            </StaggerItem>

            <StaggerItem id="skills" className={sectionGap}>
              <SectionHeader num="006" title="skills" />
              <SkillsLine />
            </StaggerItem>

            <StaggerItem id="links" className="mb-4">
              <SectionHeader num="007" title="links" />
              <div className={`flex flex-col ${rowGap}`}>
                {cvLinks.map((link) => (
                  <LinkRow key={link.row} {...link} />
                ))}
              </div>
            </StaggerItem>
          </StaggerGroup>
        </TerminalChrome>
      </div>
    </MotionProvider>
  );
}
