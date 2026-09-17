"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Bot,
  Sparkles,
  Database,
  Code2,
  Palette,
  LineChart,
  Users,
  TrendingUp,
  Compass,
  Award,
  ShieldCheck,
  PenTool,
  Rocket,
  RefreshCw,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import "./home.css";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerParentSlow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const viewport = { once: true, amount: 0.2 } as const;
const viewportLow = { once: true, amount: 0.1 } as const;

const services = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    text: "Intelligent models that turn complex data into smarter decisions and real-world outcomes.",
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Agents & Automation",
    text: "Autonomous AI agents and workflows that reduce manual work and improve operational efficiency.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Generative AI & LLMs",
    text: "Custom AI solutions powered by LLMs for content, knowledge, assistants, and intelligent applications.",
  },
  {
    number: "04",
    icon: Database,
    title: "Data & Analytics",
    text: "Transform raw data into clear insights, predictive intelligence, and actionable business decisions.",
  },
  {
    number: "05",
    icon: Code2,
    title: "Web & Software Development",
    text: "Scalable, high-performance digital products built around your business goals and users.",
  },
  {
    number: "06",
    icon: Palette,
    title: "Design & Digital Solutions",
    text: "Modern, intuitive digital experiences that combine strong design with meaningful functionality.",
  },
];

const capabilities = [
  "Deep Learning Models",
  "Computer Vision",
  "Natural Language Processing",
  "Autonomous AI Agents",
  "LLM Applications",
  "Prompt Engineering",
  "Predictive Analytics",
  "Business Intelligence",
  "Data Pipelines",
  "Process Automation",
  "Full-Stack Development",
  "Cloud Architecture",
  "API & Systems Integration",
  "Product Design",
  "UI / UX Systems",
  "Digital Strategy",
];

const featuredProjects = [
  {
    number: "01",
    title: "Dental AI Diagnostics",
    category: "AI & HEALTHCARE",
    text: "An AI-powered dental diagnostic system designed to analyze dental imagery and assist with identifying potential dental conditions.",
    tech: ["YOLOv8", "OpenCV", "Python", "Flask"],
    icon: LineChart,
    href: "/projects",
  },
  {
    number: "02",
    title: "See and Hire",
    category: "AI / RECRUITMENT",
    text: "An intelligent hiring platform designed to improve the recruitment experience by connecting candidates, opportunities and intelligent hiring workflows.",
    tech: ["Python", "FastAPI", "React", "LLMs"],
    icon: Users,
    href: "/projects",
  },
  {
    number: "03",
    title: "Job Salaries Management",
    category: "DATA & ANALYTICS",
    text: "A data-driven salary management and analysis solution focused on organizing, analyzing and understanding job salary information.",
    tech: ["Python", "Pandas", "Power BI", "Analytics"],
    icon: TrendingUp,
    href: "/projects",
  },
];

const reasons = [
  {
    number: "01",
    icon: Compass,
    title: "Strategy before technology",
    text: "We start with the problem, not the tool. The right technology follows a clear understanding of what actually needs to change.",
  },
  {
    number: "02",
    icon: Award,
    title: "Craft in every detail",
    text: "From architecture to interface, every decision is deliberate — built to hold up under real-world use, not just demos.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Built to evolve",
    text: "Products are never truly finished. We design systems that can grow, adapt and stay valuable as your needs change.",
  },
];

const process = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    text: "We understand the problem before choosing the technology.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    text: "We turn the opportunity into a clear and purposeful experience.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    text: "We engineer the solution with performance and scalability in mind.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy",
    text: "We release, measure and refine with real users and real feedback.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Evolve",
    text: "We continuously improve the product as your needs change.",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <main>
        <section className="hero-section">
          <div className="hero-grid" />
          <div className="hero-noise" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-container">
            <motion.div
              className="hero-content"
              variants={staggerParentSlow}
              initial="hidden"
              animate="show"
            >
              <motion.div className="hero-eyebrow" variants={slideLeft}>
                <span className="eyebrow-pulse" />
                <span>AJ SOLUTIONS</span>
                <span className="eyebrow-divider" />
                <span>AI JOURNEY</span>
              </motion.div>

              <h1>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Technology
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    that moves
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>forward.</span>
                  </motion.span>
                </span>
              </h1>

              <motion.p className="hero-description" variants={fadeUp}>
                We build intelligent digital products, AI-powered systems and
                modern software experiences that turn ambitious ideas into
                meaningful outcomes.
              </motion.p>

              <motion.div className="hero-actions" variants={fadeUp}>
                <Link href="/projects" className="hero-primary">
                  <span>Explore our work</span>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>

                <Link href="/contact" className="hero-secondary">
                  <span>Start a conversation</span>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>
              </motion.div>

              <motion.div className="hero-proof" variants={fadeUp}>
                <div>
                  <strong>AI</strong>
                  <span>Intelligent</span>
                </div>
                <div>
                  <strong>DIGITAL</strong>
                  <span>Connected</span>
                </div>
                <div>
                  <strong>FUTURE</strong>
                  <span>Ready</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
            >
              <div className="hero-visual-aura" />
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="hero-image-frame">
                <Image
                  src="/images/hero-tech.png"
                  alt="AJ Solutions AI workspace"
                  fill
                  priority
                  sizes="(max-width: 1050px) 100vw, 620px"
                  className="hero-image"
                />
                <div className="hero-image-overlay" />
                <div className="hero-scan" />

                <div className="hero-corner hero-corner-tl" />
                <div className="hero-corner hero-corner-tr" />
                <div className="hero-corner hero-corner-bl" />
                <div className="hero-corner hero-corner-br" />

                <div className="hero-image-label">
                  <span>
                    <i /> SYSTEM STATUS
                  </span>
                  <strong>INTELLIGENT · ONLINE</strong>
                </div>
              </div>

              <motion.div
                className="floating-panel panel-top"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease }}
              >
                <Sparkles size={18} />
                <div>
                  <span>INTELLIGENCE</span>
                  <strong>Built in</strong>
                </div>
              </motion.div>

              <motion.div
                className="floating-panel panel-bottom"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.05, ease }}
              >
                <span className="eyebrow-pulse" />
                <div>
                  <span>AI JOURNEY</span>
                  <strong>Already moving</strong>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="hero-bottom-line"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8 }}
          >
            <i />
            <span>SCROLL TO EXPLORE</span>
            <i />
          </motion.div>
        </section>

        <section className="intro-section">
          <div className="section-container">
            <div className="intro-layout">
              <motion.div
                className="intro-label"
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <span>01</span>
                <i />
                <span>WHO WE ARE</span>
              </motion.div>

              <motion.div
                className="intro-main"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.div
                  className="section-kicker"
                  variants={fadeUp}
                  style={{ display: "block" }}
                >
                  AJ SOLUTIONS
                </motion.div>

                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      We don't just build technology.
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      We build <span>possibility.</span>
                    </motion.span>
                  </span>
                </h2>

                <motion.p variants={fadeUp}>
                  AJ Solutions brings together strategy, design, engineering
                  and artificial intelligence to create technology that has a
                  reason to exist.
                </motion.p>

                <motion.div variants={fadeUp}>
                  <Link href="/about" className="section-link">
                    <span>More about AJ Solutions</span>
                    <ArrowUpRight size={17} />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="intro-orbit"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.9, ease }}
              >
                <div className="intro-orbit-ring ring-a" />
                <div className="intro-orbit-ring ring-b" />
                <div className="intro-orbit-core">
                  <Sparkles size={24} strokeWidth={1.6} />
                </div>
              </motion.div>
            </div>

            <motion.div
              className="intro-values"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {[
                ["01", "Purpose", "Every solution starts with a reason."],
                ["02", "Precision", "Every detail has a role to play."],
                ["03", "Progress", "Every product should keep evolving."],
              ].map(([number, title, text]) => (
                <motion.div className="value-card" key={number} variants={fadeUp}>
                  <span className="value-number">{number}</span>
                  <div className="value-content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <ArrowUpRight size={18} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="services-section">
          <div className="section-container">
            <motion.div
              className="section-heading"
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={staggerParent}
            >
              <div>
                <motion.div
                  className="section-kicker"
                  variants={fadeUp}
                  style={{ display: "block" }}
                >
                  WHAT WE DO
                </motion.div>
                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      Different challenges.
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      One <span>technology partner.</span>
                    </motion.span>
                  </span>
                </h2>
              </div>

              <motion.p variants={fadeUp}>
                From your first idea to a complete digital ecosystem, we bring
                technology, creativity and business thinking together.
              </motion.p>
            </motion.div>

            <motion.div
              className="services-grid"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    className="service-card"
                    key={service.number}
                    variants={fadeUp}
                  >
                    <div className="service-glow" />
                    <span className="service-number">{service.number}</span>

                    <div className="service-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.text}</p>

                    <div className="service-footer">
                      <span>Explore capability</span>
                      <Link
                        href="/services"
                        aria-label={service.title}
                        className="service-footer-link"
                      >
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>

            <motion.div
              className="services-action"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <Link href="/services">
                <span>Explore all services</span>
                <ArrowUpRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="technology-section">
          <div className="section-container">
            <div className="technology-layout">
              <motion.div
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.div
                  className="section-kicker"
                  variants={fadeUp}
                  style={{ display: "block" }}
                >
                  CAPABILITIES
                </motion.div>
                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      The technology
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      behind the <span>journey.</span>
                    </motion.span>
                  </span>
                </h2>
              </motion.div>

              <motion.div
                className="technology-cloud"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                {capabilities.map((item) => (
                  <motion.span key={item} variants={fadeUp}>
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <div className="section-container">
            <div className="projects-heading">
              <motion.div
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.div
                  className="section-kicker"
                  variants={fadeUp}
                  style={{ display: "block" }}
                >
                  SELECTED WORK
                </motion.div>
                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      Ideas made <span>real.</span>
                    </motion.span>
                  </span>
                </h2>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <Link href="/projects" className="projects-link">
                  <span>View all projects</span>
                  <ArrowUpRight size={17} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="projects-list"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {featuredProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <motion.article
                    className="project-row"
                    key={project.number}
                    variants={slideLeft}
                  >
                    <span className="project-index">{project.number}</span>

                    <div className="project-visual">
                      <span>{project.category}</span>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>

                    <div className="project-details">
                      <h3>{project.title}</h3>
                      <p>{project.text}</p>

                      <div className="project-tech">
                        {project.tech.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={project.href}
                      className="project-arrow"
                      aria-label={project.title}
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="why-section">
          <div className="section-container">
            <div className="why-layout">
              <motion.div
                className="why-copy"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.div
                  className="section-kicker"
                  variants={fadeUp}
                  style={{ display: "block" }}
                >
                  WHY AJ SOLUTIONS
                </motion.div>

                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      Built on clarity.
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      Driven by <span>purpose.</span>
                    </motion.span>
                  </span>
                </h2>

                <motion.p variants={fadeUp}>
                  Technology only earns its place when it solves something
                  meaningful. We build with that principle in mind — from the
                  first conversation to long after launch.
                </motion.p>

                <motion.div variants={fadeUp}>
                  <Link href="/about" className="section-link">
                    <span>How we think</span>
                    <ArrowUpRight size={17} />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="reasons-grid"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                {reasons.map((reason) => {
                  const Icon = reason.icon;
                  return (
                    <motion.div
                      className="reason-card"
                      key={reason.number}
                      variants={fadeUp}
                    >
                      <div className="reason-top">
                        <Icon size={19} strokeWidth={1.8} />
                        <span>{reason.number}</span>
                      </div>
                      <h3>{reason.title}</h3>
                      <p>{reason.text}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="section-container">
            <motion.div
              className="process-heading"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div
                className="section-kicker"
                variants={fadeUp}
                style={{ display: "block" }}
              >
                HOW WE WORK
              </motion.div>

              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Clear thinking.
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Better <span>outcomes.</span>
                  </motion.span>
                </span>
              </h2>

              <motion.p variants={fadeUp}>
                A structured process keeps creativity focused and technology
                connected to the outcome that matters.
              </motion.p>
            </motion.div>

            <motion.div
              className="process-track"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.article
                    className="process-item"
                    key={step.number}
                    variants={fadeUp}
                  >
                    <div className="process-top">
                      <span>{step.number}</span>
                      <i />
                    </div>
                    <div className="process-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </motion.article>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <Link href="/process" className="process-link">
                <span>See our full process</span>
                <ArrowUpRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-grid" />
          <div className="cta-glow" />
          <div className="cta-orbit" />

          <div className="section-container">
            <motion.div
              className="cta-content"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div
                className="section-kicker"
                variants={fadeUp}
                style={{ display: "block" }}
              >
                READY WHEN YOU ARE
              </motion.div>

              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Your next idea
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    deserves to <span>move.</span>
                  </motion.span>
                </span>
              </h2>

              <motion.p variants={fadeUp}>
                Tell us what you're building, improving or imagining. Let's
                turn the next step into something real.
              </motion.p>

              <motion.div variants={fadeUp}>
                <Link href="/contact" className="cta-button">
                  <span>Start a Project</span>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}