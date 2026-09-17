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
  Compass,
  Layers3,
  Boxes,
  Rocket,
  Target,
  Lightbulb,
  Cog,
  Workflow,
  TrendingUp,
  Users,
  LineChart,
  Home as HomeIcon,
  BookOpen,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import "./about.css";

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

const approach = [
  {
    number: "01",
    icon: Compass,
    title: "Understand",
    text: "We start with the problem, the users, the business objectives and the opportunity.",
  },
  {
    number: "02",
    icon: Cog,
    title: "Engineer",
    text: "We design the architecture and technology around the actual requirements—not around unnecessary complexity.",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Intelligence",
    text: "Where AI can create value, we integrate machine learning, computer vision, LLMs, agents, automation or analytics into the solution.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deliver",
    text: "We turn the concept into a usable, scalable digital product with a focus on reliability and real-world application.",
  },
];

const capabilities = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    text: "Intelligent systems that turn complex business challenges into practical, scalable AI solutions.",
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Agents & Automation",
    text: "Autonomous workflows and intelligent agents that reduce repetitive work and improve operational efficiency.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Generative AI & LLMs",
    text: "LLM-powered applications, intelligent assistants, RAG systems and AI experiences built around real business needs.",
  },
  {
    number: "04",
    icon: Database,
    title: "Data & Analytics",
    text: "Analytics platforms and dashboards that transform raw information into meaningful business intelligence.",
  },
  {
    number: "05",
    icon: Code2,
    title: "Web & Software Development",
    text: "Modern web applications and software products engineered for performance, usability and growth.",
  },
  {
    number: "06",
    icon: Palette,
    title: "Design & Digital Solutions",
    text: "Digital experiences combining thoughtful interfaces, technology and business-focused product design.",
  },
];

const aiFirst = [
  {
    number: "01",
    icon: Lightbulb,
    title: "AI-First Thinking",
    text: "We identify where intelligent technology can create genuine value rather than forcing AI into problems where it doesn't belong.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "End-to-End Engineering",
    text: "We bring together AI, backend, frontend, data and deployment capabilities to build complete solutions.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Practical Innovation",
    text: "We focus on technology that can move from an interesting idea into something useful, usable and scalable.",
  },
];

const techStack = [
  {
    label: "AI / MACHINE LEARNING",
    items: [
      "Python",
      "scikit-learn",
      "YOLOv8",
      "OpenCV",
      "Machine Learning Algorithms",
      "Model Training",
      "Model Evaluation",
    ],
  },
  {
    label: "GENERATIVE AI",
    items: [
      "OpenAI API",
      "Gemini API",
      "LLMs",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
    ],
  },
  {
    label: "BACKEND",
    items: ["FastAPI", "Flask", "REST APIs", "Python", "PostgreSQL"],
  },
  {
    label: "FRONTEND",
    items: ["React.js", "Next.js"],
  },
  {
    label: "DATA",
    items: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Data Analysis"],
  },
  {
    label: "DEPLOYMENT",
    items: ["Docker", "Model Deployment", "Server Deployment", "API Integration"],
  },
];

const workItems = [
  {
    title: "See and Hire",
    category: "AI Platform",
    text: "An AI-powered hiring platform designed to connect talent with opportunities through intelligent matching and automated workflows.",
    icon: Users,
  },
  {
    title: "Nutra AI",
    category: "Generative AI",
    text: "A personalized nutrition assistant using LLM technology to generate diet plans and food insights.",
    icon: Sparkles,
  },
  {
    title: "Dental Dynamo",
    category: "Computer Vision",
    text: "A computer-vision system for dental X-ray analysis using object detection and AI-assisted diagnostics.",
    icon: Target,
  },
  {
    title: "Mental Health in Tech",
    category: "Data & Analytics",
    text: "Data analysis focused on understanding mental health patterns and insights within the technology workplace.",
    icon: LineChart,
  },
  {
    title: "Job Salaries Management",
    category: "Data Analytics",
    text: "A data-driven solution for analyzing salary information and transforming structured records into meaningful insights.",
    icon: TrendingUp,
  },
  {
    title: "House Price Predictions",
    category: "Machine Learning",
    text: "A predictive machine-learning project focused on estimating house prices from relevant property data.",
    icon: HomeIcon,
  },
  {
    title: "Story Generator",
    category: "Generative AI",
    text: "An AI-powered application focused on generating stories through language-model technology.",
    icon: BookOpen,
  },
  {
    title: "Tableop",
    category: "AI / Software",
    text: "An intelligent software solution combining backend technologies, AI capabilities and application development.",
    icon: Boxes,
  },
];

const chain = ["DATA", "INTELLIGENCE", "ENGINEERING", "PRODUCT", "IMPACT"];

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Industries" },
  { value: 100, suffix: "%", label: "Commitment" },
];

const principles = [
  {
    number: "01",
    title: "Purpose over hype",
    text: "We focus on solving meaningful problems rather than using technology simply because it is new.",
  },
  {
    number: "02",
    title: "Intelligence with context",
    text: "AI becomes useful when it understands the problem it is being applied to.",
  },
  {
    number: "03",
    title: "Engineering with intent",
    text: "Every technical decision should contribute to reliability, usability, scalability or measurable value.",
  },
  {
    number: "04",
    title: "Always moving forward",
    text: "Technology evolves quickly. We continuously explore new approaches while keeping the objective clear: build better solutions.",
  },
];

export default function About() {
  return (
    <div className="about-page">
      <main>
        <section className="about-hero">
          <div className="about-hero-grid" />
          <div className="about-hero-noise" />
          <div className="about-hero-glow about-hero-glow-one" />
          <div className="about-hero-glow about-hero-glow-two" />

          <div className="about-hero-container">
            <motion.div
              className="about-hero-content"
              variants={staggerParentSlow}
              initial="hidden"
              animate="show"
            >
              <motion.div className="hero-eyebrow" variants={slideLeft}>
                <span className="eyebrow-pulse" />
                <span>ABOUT AJ SOLUTIONS</span>
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
                    Turning ambitious ideas
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    into <span>intelligent technology.</span>
                  </motion.span>
                </span>
              </h1>

              <motion.p className="about-hero-text" variants={fadeUp}>
                AJ Solutions is a technology company focused on artificial
                intelligence, software engineering, data and digital solutions.
                We combine technical expertise with practical problem-solving
                to transform ideas and challenges into intelligent, scalable
                and meaningful digital products.
              </motion.p>

              <motion.div className="about-hero-tags" variants={fadeUp}>
                <span>AI</span>
                <i />
                <span>SOFTWARE</span>
                <i />
                <span>DATA</span>
                <i />
                <span>DIGITAL</span>
              </motion.div>

              <motion.div className="about-hero-actions" variants={fadeUp}>
                <Link href="/projects" className="hero-primary">
                  <span>Explore our work</span>
                  <ArrowUpRight size={17} strokeWidth={2} />
                </Link>

                <Link href="/contact" className="hero-secondary">
                  <span>Start a conversation</span>
                  <ArrowUpRight size={17} strokeWidth={2} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="about-hero-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
            >
              <div className="hero-visual-aura" />
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="hero-image-frame">
                <Image
                  src="/images/about-hero.png"
                  alt="Abstract neural network visualization representing the AJ Solutions AI journey"
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
                    <i /> BRAND SYSTEM
                  </span>
                  <strong>AI JOURNEY · ONLINE</strong>
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
                  <span>INTELLIGENCE</span>
                  <strong>In motion</strong>
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
                  <span>OUR STORY</span>
                  <strong>Built with purpose</strong>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="about-who">
          <div className="section-container">
            <div className="about-who-layout">
              <motion.div
                className="about-label"
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
                className="about-who-main"
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
                      We build technology
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      with a <span>reason to exist.</span>
                    </motion.span>
                  </span>
                </h2>

                <motion.p variants={fadeUp}>
                  Technology is most valuable when it solves a real problem. At
                  AJ Solutions, we bring together artificial intelligence,
                  software engineering, data and digital design to create
                  solutions that are not only technically capable, but useful
                  in the real world.
                </motion.p>

                <motion.p variants={fadeUp}>
                  Our work spans intelligent applications, AI-powered
                  automation, machine learning, computer vision, generative AI,
                  data analytics and modern software development. From an early
                  concept to a production-ready product, we focus on
                  understanding the problem first and then choosing the
                  technology that can solve it effectively.
                </motion.p>
              </motion.div>

              <motion.div
                className="about-who-orbit"
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

        <section className="about-approach">
          <div className="section-container">
            <motion.div
              className="about-section-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                02 / OUR APPROACH
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Technology should move
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    your business <span>forward.</span>
                  </motion.span>
                </span>
              </h2>
              <motion.p variants={fadeUp}>
                We don't believe in adding AI simply because it is possible. We
                look for the point where intelligent technology can create
                meaningful value.
              </motion.p>
            </motion.div>

            <motion.div
              className="approach-track"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {approach.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.article
                    className="approach-card"
                    key={step.number}
                    variants={fadeUp}
                  >
                    <div className="approach-top">
                      <span>{step.number}</span>
                      <i />
                    </div>
                    <div className="approach-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="about-capabilities">
          <div className="section-container">
            <motion.div
              className="about-section-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                03 / OUR CAPABILITIES
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Six capabilities.
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    One <span>technology journey.</span>
                  </motion.span>
                </span>
              </h2>
              <motion.p variants={fadeUp}>
                From intelligent models to complete digital products, our
                capabilities cover the technology required to take an idea from
                possibility to implementation.
              </motion.p>
            </motion.div>

            <motion.div
              className="capabilities-grid"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <motion.article
                    className="capability-card"
                    key={cap.number}
                    variants={fadeUp}
                  >
                    <div className="capability-glow" />
                    <span className="capability-number">{cap.number}</span>
                    <div className="capability-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3>{cap.title}</h3>
                    <p>{cap.text}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="about-ai-first">
          <div className="section-container">
            <div className="ai-first-layout">
              <motion.div
                className="ai-first-copy"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.div className="section-kicker" variants={fadeUp}>
                  04 / WHY AJ SOLUTIONS
                </motion.div>
                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      More than software.
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      Built with <span>intelligence.</span>
                    </motion.span>
                  </span>
                </h2>
                <motion.p variants={fadeUp}>
                  AI is changing how products are built, how businesses operate
                  and how people interact with technology. We approach it as an
                  engineering capability—not simply a trend.
                </motion.p>
              </motion.div>

              <motion.div
                className="ai-first-blocks"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                {aiFirst.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      className="ai-first-block"
                      key={item.number}
                      variants={fadeUp}
                    >
                      <div className="ai-first-icon">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <div>
                        <span className="ai-first-index">{item.number}</span>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="about-technology">
          <div className="section-container">
            <motion.div
              className="about-section-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                05 / TECHNOLOGY
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    The tools change.
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    The objective <span>doesn't.</span>
                  </motion.span>
                </span>
              </h2>
              <motion.p variants={fadeUp}>
                We work across a modern technology stack to select the right
                tools for each problem. Our experience spans AI/ML frameworks,
                backend technologies, frontend development, data platforms and
                deployment infrastructure.
              </motion.p>
            </motion.div>

            <div className="tech-wall">
              {techStack.map((group, groupIndex) => (
                <motion.div
                  className="tech-group"
                  key={group.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  transition={{ delay: groupIndex * 0.08 }}
                >
                  <span className="tech-group-label">{group.label}</span>
                  <div className="tech-group-items">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-work">
          <div className="section-container">
            <motion.div
              className="about-section-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                06 / EXPERIENCE
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Ideas become more meaningful
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    when they <span>work in the real world.</span>
                  </motion.span>
                </span>
              </h2>
              <motion.p variants={fadeUp}>
                Our project experience covers different problems, industries
                and technology domains—from AI-powered platforms and generative
                AI to computer vision and data analytics.
              </motion.p>
            </motion.div>

            <motion.div
              className="work-grid"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {workItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    className="work-card"
                    key={item.title}
                    variants={fadeUp}
                  >
                    <div className="work-card-top">
                      <span className="work-card-category">{item.category}</span>
                      <div className="work-card-icon">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="about-chain">
          <div className="section-container">
            <motion.div
              className="chain-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                THE CONNECTED LAYERS
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    We connect the layers
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    of <span>modern technology.</span>
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="chain-track"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {chain.map((item, index) => (
                <motion.div className="chain-item" key={item} variants={fadeUp}>
                  <span className="chain-label">{item}</span>
                  <span className="chain-index">0{index + 1}</span>
                  {index < chain.length - 1 && <i className="chain-arrow" />}
                </motion.div>
              ))}
            </motion.div>
            <motion.p
              className="chain-text"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              Data gives us information. AI gives us intelligence. Engineering
              turns that intelligence into reliable systems. Design makes those
              systems usable. Together, they create products capable of making
              a real difference.
            </motion.p>
          </div>
        </section>

        <section className="about-stats">
          <div className="section-container">
            <motion.div
              className="about-section-head about-section-head-center"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                07 / PROVEN CAPABILITY
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Built across
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>real problems.</span>
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="stats-grid"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {stats.map((stat) => (
                <motion.div
                  className="stat-card"
                  key={stat.label}
                  variants={fadeUp}
                >
                  <div className="stat-value">
                    {stat.value}
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="about-principles">
          <div className="section-container">
            <div className="principles-layout">
              <motion.div
                className="principles-copy"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.div className="section-kicker" variants={fadeUp}>
                  08 / OUR PRINCIPLES
                </motion.div>
                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      Technology is only
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      powerful when it
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      <span>creates value.</span>
                    </motion.span>
                  </span>
                </h2>
              </motion.div>

              <motion.div
                className="principles-list"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                {principles.map((p) => (
                  <motion.div
                    className="principle-row"
                    key={p.number}
                    variants={fadeUp}
                  >
                    <span className="principle-number">{p.number}</span>
                    <div className="principle-info">
                      <h3>{p.title}</h3>
                      <p>{p.text}</p>
                    </div>
                    <ArrowUpRight size={18} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="about-journey">
          <div className="about-journey-grid" />
          <div className="about-journey-glow" />

          <div className="section-container">
            <motion.div
              className="about-journey-content"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                THE AI JOURNEY
              </motion.div>

              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Every solution begins
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    with a <span>journey.</span>
                  </motion.span>
                </span>
              </h2>

              <motion.p variants={fadeUp}>
                From the first question to the final product, every project is
                a journey from uncertainty to possibility. At AJ Solutions,
                that journey starts by understanding the problem, continues
                through design and engineering, and ends with technology that
                can create meaningful impact.
              </motion.p>

              <motion.div className="journey-visual" variants={fadeUp}>
                <span>IDEA</span>
                <i />
                <span>INTELLIGENCE</span>
                <i />
                <span>ENGINEERING</span>
                <i />
                <span>IMPACT</span>
              </motion.div>

              <motion.div className="journey-signature" variants={fadeUp}>
                AJ SOLUTIONS — AI JOURNEY
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="about-cta">
          <div className="about-cta-grid" />
          <div className="about-cta-glow" />
          <div className="about-cta-orbit" />

          <div className="section-container">
            <motion.div
              className="about-cta-content"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                START YOUR JOURNEY
              </motion.div>

              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Have an idea
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    worth <span>building?</span>
                  </motion.span>
                </span>
              </h2>

              <motion.p variants={fadeUp}>
                Tell us what you're trying to solve. We'll explore the
                technology, the possibilities and the path to turning your idea
                into a real digital solution.
              </motion.p>

              <motion.div className="about-cta-actions" variants={fadeUp}>
                <Link href="/contact" className="cta-button">
                  <span>Start a Project</span>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>

                <Link href="/services" className="cta-link">
                  <span>Explore Our Services</span>
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