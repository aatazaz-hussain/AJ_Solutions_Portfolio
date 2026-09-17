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
  ArrowRight,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import "./services.css";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
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
    description:
      "We build intelligent systems capable of learning from data, recognizing patterns, making predictions and supporting better decisions.",
    items: [
      "Machine Learning Models",
      "Predictive Analytics",
      "Classification & Regression",
      "Computer Vision",
      "Object Detection",
      "Model Training & Evaluation",
      "AI-powered Prediction Systems",
      "Intelligent Decision Support",
    ],
    tech: "Python · scikit-learn · YOLOv8 · OpenCV · NumPy · Pandas",
    outcome: "Turn data into systems that can understand, predict and act.",
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "We design intelligent workflows and AI agents that can understand tasks, process information and automate repetitive operations.",
    items: [
      "AI Agents",
      "Intelligent Workflows",
      "Task Automation",
      "AI Assistants",
      "API-based Automation",
      "Multi-step AI Workflows",
      "Process Automation",
      "Intelligent Information Retrieval",
    ],
    tech: "Python · FastAPI · LLM APIs · AI Agents · REST APIs · Automation",
    outcome: "Reduce repetitive work and create smarter operational workflows.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Generative AI & LLMs",
    description:
      "We create applications powered by large language models that can understand, generate and interact with information in useful ways.",
    items: [
      "LLM Applications",
      "AI Assistants",
      "RAG Systems",
      "Knowledge-Based AI",
      "Prompt Engineering",
      "AI Content Generation",
      "Conversational AI",
      "Personalized AI Experiences",
    ],
    tech: "OpenAI · Gemini · LLMs · RAG · Prompt Engineering · Python · FastAPI",
    outcome:
      "Transform language models into practical products and intelligent user experiences.",
  },
  {
    number: "04",
    icon: Database,
    title: "Data & Analytics",
    description:
      "We transform raw and complex datasets into insights that help organizations understand what is happening and make better decisions.",
    items: [
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Statistical Analysis",
      "Business Intelligence",
      "Predictive Analytics",
      "Interactive Dashboards",
      "Data-driven Reporting",
    ],
    tech: "Python · Pandas · NumPy · Matplotlib · Power BI · Data Analysis",
    outcome: "Move from scattered information to clear, actionable intelligence.",
  },
  {
    number: "05",
    icon: Code2,
    title: "Web & Software Development",
    description:
      "We engineer modern software and web applications that connect intelligent technology with real users and real business requirements.",
    items: [
      "Full-Stack Web Applications",
      "Backend Development",
      "REST APIs",
      "Database Integration",
      "AI-powered Applications",
      "Dashboard Development",
      "Application Architecture",
      "API Integration",
    ],
    tech: "React.js · Next.js · Python · FastAPI · Flask · PostgreSQL",
    outcome:
      "Turn concepts and AI capabilities into reliable, usable digital products.",
  },
  {
    number: "06",
    icon: Palette,
    title: "Design & Digital Solutions",
    description:
      "Technology should be powerful without becoming complicated. We create digital experiences that make complex technology intuitive and accessible.",
    items: [
      "UI/UX Design",
      "Digital Product Design",
      "Responsive Interfaces",
      "Dashboard Interfaces",
      "User Experience Design",
      "Design Systems",
      "Digital Experiences",
      "Product Prototyping",
    ],
    tech: "UI/UX · Responsive Design · Product Design · Digital Experience · Prototyping",
    outcome: "Make powerful technology easier to understand, use and experience.",
  },
];

const skills = [
  {
    label: "AI & MACHINE LEARNING",
    items: [
      "Python",
      "Machine Learning",
      "scikit-learn",
      "YOLOv8",
      "OpenCV",
      "Computer Vision",
      "Model Training",
      "Model Evaluation",
      "Predictive Modeling",
    ],
  },
  {
    label: "GENERATIVE AI",
    items: [
      "OpenAI API",
      "Gemini API",
      "Large Language Models",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "Conversational AI",
      "AI Assistants",
    ],
  },
  {
    label: "BACKEND ENGINEERING",
    items: [
      "Python",
      "FastAPI",
      "Flask",
      "REST APIs",
      "API Integration",
      "PostgreSQL",
      "Backend Architecture",
    ],
  },
  {
    label: "FRONTEND DEVELOPMENT",
    items: [
      "React.js",
      "Next.js",
      "Responsive Web Development",
      "Interactive Interfaces",
      "Dashboard Development",
    ],
  },
  {
    label: "DATA & ANALYTICS",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Power BI",
      "Data Cleaning",
      "Data Analysis",
      "Data Visualization",
      "Predictive Analytics",
    ],
  },
  {
    label: "DEPLOYMENT & ENGINEERING",
    items: [
      "Docker",
      "Model Deployment",
      "API Deployment",
      "Server Deployment",
      "Database Integration",
      "Production Integration",
    ],
  },
];

const flow = [
  "DATA",
  "AI / ML",
  "BACKEND",
  "APPLICATION",
  "USER EXPERIENCE",
  "DEPLOYMENT",
];

export default function Services() {
  return (
    <div className="services-page">
      <main>
        <section className="services-hero">
          <div className="services-hero-grid" />
          <div className="services-hero-noise" />
          <div className="services-hero-glow services-hero-glow-one" />
          <div className="services-hero-glow services-hero-glow-two" />

          <div className="services-hero-container">
            <motion.div
              className="services-hero-content"
              variants={staggerParentSlow}
              initial="hidden"
              animate="show"
            >
              <motion.div className="hero-eyebrow" variants={slideLeft}>
                <span className="eyebrow-pulse" />
                <span>SERVICES & EXPERTISE</span>
                <span className="eyebrow-divider" />
                <span>AJ SOLUTIONS</span>
              </motion.div>

              <h1>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Intelligence engineered
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    for <span>real-world impact.</span>
                  </motion.span>
                </span>
              </h1>

              <motion.p className="services-hero-text" variants={fadeUp}>
                From artificial intelligence and machine learning to software
                engineering, data analytics and digital experiences, AJ
                Solutions brings the skills and technology required to turn
                complex ideas into practical digital solutions.
              </motion.p>

              <motion.div className="services-hero-tags" variants={fadeUp}>
                <span>AI</span>
                <i />
                <span>ENGINEERING</span>
                <i />
                <span>DATA</span>
                <i />
                <span>DIGITAL</span>
              </motion.div>

              <motion.div className="services-hero-actions" variants={fadeUp}>
                <Link href="/contact" className="hero-primary">
                  <span>Start a Project</span>
                  <ArrowUpRight size={17} strokeWidth={2} />
                </Link>

                <Link href="/projects" className="hero-secondary">
                  <span>Explore our work</span>
                  <ArrowUpRight size={17} strokeWidth={2} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="services-hero-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
            >
              <div className="hero-visual-aura" />
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="hero-image-frame">
                <Image
                  src="/images/services-hero.png"
                  alt="Abstract electric-blue lattice visualization representing AJ Solutions services"
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
                    <i /> CAPABILITY SYSTEM
                  </span>
                  <strong>AI · DATA · SOFTWARE</strong>
                </div>
              </div>

              <motion.div
                className="floating-panel panel-top"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease }}
              >
                <BrainCircuit size={17} />
                <div>
                  <span>SIX CAPABILITIES</span>
                  <strong>One partner</strong>
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
                  <span>END-TO-END</span>
                  <strong>Intelligence · Built</strong>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="services-intro">
          <div className="section-container">
            <div className="services-intro-layout">
              <motion.div
                className="services-label"
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <span>01</span>
                <i />
                <span>WHAT WE DO</span>
              </motion.div>

              <motion.div
                className="services-intro-main"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      Technology built around
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      the problem—<span>not the trend.</span>
                    </motion.span>
                  </span>
                </h2>

                <motion.p variants={fadeUp}>
                  Every project has a different challenge. Some require
                  intelligent prediction. Some require automation. Others need
                  a complete digital product, a powerful data platform or an
                  intuitive user experience.
                </motion.p>

                <motion.p variants={fadeUp}>
                  Our services bring these capabilities together under one
                  technology journey. We identify the problem, select the right
                  approach and engineer a solution designed around the outcome
                  that matters.
                </motion.p>
              </motion.div>

              <motion.div
                className="services-intro-orbit"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.9, ease }}
              >
                <div className="orbit-ring orbit-ring-a" />
                <div className="orbit-ring orbit-ring-b" />
                <div className="orbit-ring orbit-ring-c" />
                <div className="orbit-core">
                  <Sparkles size={26} strokeWidth={1.6} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="services-list">
          <div className="section-container">
            <motion.div
              className="services-list-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                02 / OUR SERVICES
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Six services.
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    One <span>capability system.</span>
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            <div className="services-list-blocks">
              {services.map((service, index) => {
                const Icon = service.icon;
                const reversed = index % 2 === 1;

                return (
                  <motion.article
                    className={`service-block ${reversed ? "service-block-reverse" : ""}`}
                    key={service.number}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportLow}
                    variants={staggerParent}
                  >
                    <motion.div
                      className="service-block-visual"
                      variants={reversed ? slideRight : slideLeft}
                    >
                      <div className="service-block-visual-inner">
                        <span className="service-block-index">
                          {service.number}
                        </span>
                        <div className="service-block-icon">
                          <Icon size={46} strokeWidth={1.4} />
                        </div>
                        <div className="service-block-visual-ring ring-one" />
                        <div className="service-block-visual-ring ring-two" />
                        <div className="service-block-visual-glow" />
                        <div className="service-block-visual-corner tl" />
                        <div className="service-block-visual-corner tr" />
                        <div className="service-block-visual-corner bl" />
                        <div className="service-block-visual-corner br" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="service-block-body"
                      variants={staggerParent}
                    >
                      <motion.div
                        className="service-block-category"
                        variants={fadeUp}
                      >
                        SERVICE {service.number}
                      </motion.div>

                      <motion.h3 variants={fadeUp}>{service.title}</motion.h3>

                      <motion.p
                        className="service-block-description"
                        variants={fadeUp}
                      >
                        {service.description}
                      </motion.p>

                      <motion.div
                        className="service-block-subtitle"
                        variants={fadeUp}
                      >
                        What we do
                      </motion.div>

                      <motion.div
                        className="service-block-items"
                        variants={staggerParent}
                      >
                        {service.items.map((item) => (
                          <motion.span key={item} variants={fadeUp}>
                            {item}
                          </motion.span>
                        ))}
                      </motion.div>

                      <motion.div
                        className="service-block-tech"
                        variants={fadeUp}
                      >
                        <span className="service-block-tech-label">
                          SKILLS & TECHNOLOGIES
                        </span>
                        <strong>{service.tech}</strong>
                      </motion.div>

                      <motion.div
                        className="service-block-outcome"
                        variants={fadeUp}
                      >
                        <span className="service-block-outcome-label">
                          OUTCOME
                        </span>
                        <p>{service.outcome}</p>
                      </motion.div>
                    </motion.div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="services-skills">
          <div className="section-container">
            <motion.div
              className="services-skills-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                03 / TECHNICAL EXPERTISE
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    The skills behind
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    the <span>solutions.</span>
                  </motion.span>
                </span>
              </h2>
              <motion.p variants={fadeUp}>
                Our capabilities extend across artificial intelligence,
                software engineering, data, interfaces and deployment. We
                combine these skills depending on the requirements of each
                project.
              </motion.p>
            </motion.div>

            <div className="skills-wall">
              {skills.map((group, index) => (
                <motion.div
                  className="skills-group"
                  key={group.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="skills-group-head">
                    <span className="skills-group-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="skills-group-label">{group.label}</span>
                  </div>
                  <div className="skills-group-items">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="services-flow">
          <div className="services-flow-grid" />
          <div className="services-flow-glow" />

          <div className="section-container">
            <motion.div
              className="services-flow-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                04 / END-TO-END CAPABILITY
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    From raw data
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    to <span>intelligent product.</span>
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="flow-track"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {flow.map((item, index) => (
                <motion.div className="flow-item" key={item} variants={fadeUp}>
                  <span className="flow-index">
                    0{index + 1}
                  </span>
                  <span className="flow-label">{item}</span>
                  {index < flow.length - 1 && <i className="flow-arrow" />}
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="flow-text"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              A successful AI solution is rarely just a model. It requires
              data, intelligence, engineering, interfaces and deployment
              working together. Our multidisciplinary capabilities allow us to
              connect these layers into complete digital solutions.
            </motion.p>
          </div>
        </section>

        <section className="services-statement">
          <div className="section-container">
            <motion.div
              className="statement-inner"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.h2 variants={fadeUp}>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    We don't just
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    build <span>models.</span>
                  </motion.span>
                </span>
              </motion.h2>

              <motion.div className="statement-emphasis" variants={fadeUp}>
                <ArrowRight size={26} strokeWidth={2} />
                <span>We build systems.</span>
              </motion.div>

              <motion.p variants={fadeUp}>
                From the first dataset to the final interface, our goal is to
                connect intelligence with engineering and turn technology into
                something people can actually use.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="services-cta">
          <div className="services-cta-grid" />
          <div className="services-cta-glow" />
          <div className="services-cta-orbit" />

          <div className="section-container">
            <motion.div
              className="services-cta-content"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                HAVE A CHALLENGE?
              </motion.div>

              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Let's find the technology
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    behind your <span>next idea.</span>
                  </motion.span>
                </span>
              </h2>

              <motion.p variants={fadeUp}>
                Whether you have a defined product, an AI opportunity or simply
                a problem that needs solving, let's explore what can be built.
              </motion.p>

              <motion.div className="services-cta-actions" variants={fadeUp}>
                <Link href="/contact" className="cta-button">
                  <span>Start a Project</span>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>

                <Link href="/projects" className="cta-link">
                  <span>Explore Our Projects</span>
                  <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}