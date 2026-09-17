"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Target,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  Database,
  BrainCircuit,
  Sparkles,
  Workflow,
  TrendingUp,
  MessageSquare,
  Users,
  RefreshCw,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import "./process.css";

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

const journeyStages = [
  { number: "01", label: "DISCOVER" },
  { number: "02", label: "DEFINE" },
  { number: "03", label: "DESIGN" },
  { number: "04", label: "BUILD" },
  { number: "05", label: "VALIDATE" },
  { number: "06", label: "DELIVER" },
];

const stages = [
  {
    number: "01",
    key: "discover",
    label: "DISCOVER",
    icon: Compass,
    title: "Understand before we build.",
    description:
      "The first step is understanding the problem—not choosing a technology. We explore your objectives, users, existing systems, challenges and opportunities to understand what success should look like.",
    focusLabel: "We focus on",
    focus: [
      "Business objectives",
      "User needs",
      "Existing systems",
      "Current challenges",
      "Project requirements",
      "Opportunities for AI and automation",
    ],
    output: "A clear understanding of the problem and the opportunity.",
  },
  {
    number: "02",
    key: "define",
    label: "DEFINE",
    icon: Target,
    title: "Turn the challenge into a clear direction.",
    description:
      "Once the problem is understood, we define the scope, priorities and technical requirements. This creates a clear direction before development begins.",
    focusLabel: "We establish",
    focus: [
      "Project scope",
      "Core requirements",
      "Functional priorities",
      "Technical requirements",
      "Data requirements",
      "Success criteria",
    ],
    output: "A focused roadmap for development.",
  },
  {
    number: "03",
    key: "design",
    label: "DESIGN",
    icon: PenTool,
    title: "Design the solution before the code.",
    description:
      "We translate requirements into the architecture, user experience and technical structure that will power the final solution.",
    focusLabel: "We design",
    focus: [
      "System architecture",
      "User flows",
      "UI/UX",
      "Database structure",
      "API architecture",
      "AI/ML approach",
      "Integration strategy",
    ],
    output: "A technical and visual blueprint ready for engineering.",
  },
  {
    number: "04",
    key: "build",
    label: "BUILD",
    icon: Code2,
    title: "Turn the blueprint into reality.",
    description:
      "This is where ideas become working technology. Our engineering process brings together software development, AI, data and digital experiences according to the project's requirements.",
    focusLabel: "We build",
    focus: [
      "AI/ML models",
      "Backend systems",
      "APIs",
      "Web applications",
      "Databases",
      "AI agents",
      "LLM applications",
      "Dashboards",
      "Digital interfaces",
    ],
    output: "A functional solution built around the defined requirements.",
  },
  {
    number: "05",
    key: "validate",
    label: "VALIDATE",
    icon: ShieldCheck,
    title: "Test. Learn. Refine.",
    description:
      "A solution is not finished when it runs. We evaluate its functionality, performance and user experience, identify weaknesses and refine the system based on what we learn.",
    focusLabel: "We evaluate",
    focus: [
      "Functionality",
      "Model performance",
      "Data quality",
      "User experience",
      "System reliability",
      "API behaviour",
      "Edge cases",
    ],
    output: "A tested and refined solution ready for delivery.",
  },
  {
    number: "06",
    key: "deliver",
    label: "DELIVER",
    icon: Rocket,
    title: "Ready for the real world.",
    description:
      "The final stage turns the validated solution into a usable digital product. We prepare the system for deployment, integration and continued improvement.",
    focusLabel: "We focus on",
    focus: [
      "Deployment",
      "Integration",
      "Production readiness",
      "Documentation",
      "Handover",
      "Future improvements",
    ],
    output: "Technology that is ready to be used, measured and improved.",
  },
];

const aiFlow = [
  {
    label: "DATA",
    icon: Database,
    steps: ["Collect", "Clean", "Understand"],
  },
  {
    label: "MODEL",
    icon: BrainCircuit,
    steps: ["Train", "Evaluate", "Improve"],
  },
  {
    label: "INTELLIGENCE",
    icon: Sparkles,
    steps: ["Predict", "Generate", "Reason"],
  },
  {
    label: "APPLICATION",
    icon: Workflow,
    steps: ["Integrate", "Interact", "Automate"],
  },
  {
    label: "IMPACT",
    icon: TrendingUp,
    steps: ["Measure", "Learn", "Improve"],
  },
];

const collaboration = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Transparency",
    text: "Clear communication and visibility throughout the project.",
  },
  {
    number: "02",
    icon: Users,
    title: "Collaboration",
    text: "Regular feedback keeps the solution aligned with real requirements.",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Adaptability",
    text: "The process can evolve when new information creates a better direction.",
  },
];

export default function Process() {
  return (
    <div className="process-page">
      <main>
        <section className="process-hero">
          <div className="process-hero-grid" />
          <div className="process-hero-noise" />
          <div className="process-hero-glow process-hero-glow-one" />
          <div className="process-hero-glow process-hero-glow-two" />

          <div className="process-hero-container">
            <motion.div
              className="process-hero-inner"
              variants={staggerParentSlow}
              initial="hidden"
              animate="show"
            >
              <motion.div className="hero-eyebrow" variants={slideLeft}>
                <span className="eyebrow-pulse" />
                <span>OUR PROCESS</span>
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
                    From an idea to
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    something <span>that works.</span>
                  </motion.span>
                </span>
              </h1>

              <motion.p className="process-hero-text" variants={fadeUp}>
                Great technology doesn't happen in a single step. We move from
                understanding the challenge to designing, engineering, testing
                and delivering a solution with a clear purpose.
              </motion.p>

              <motion.div className="process-hero-tags" variants={fadeUp}>
                <span>DISCOVER</span>
                <i />
                <span>DEFINE</span>
                <i />
                <span>DESIGN</span>
                <i />
                <span>BUILD</span>
                <i />
                <span>VALIDATE</span>
                <i />
                <span>DELIVER</span>
              </motion.div>

              <motion.div className="process-hero-actions" variants={fadeUp}>
                <Link href="/contact" className="hero-primary">
                  <span>Start a Project</span>
                  <ArrowUpRight size={17} strokeWidth={2} />
                </Link>

                <Link href="/services" className="hero-secondary">
                  <span>Explore Services</span>
                  <ArrowUpRight size={17} strokeWidth={2} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="process-hero-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
            >
              <div className="hero-visual-aura" />
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="hero-image-frame">
                <Image
                  src="/images/process-hero.png"
                  alt="Abstract electric-blue path representing the AJ Solutions process journey"
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
                    <i /> PROCESS
                  </span>
                  <strong>SIX STAGES · ONE JOURNEY</strong>
                </div>
              </div>

              <motion.div
                className="floating-panel panel-top"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease }}
              >
                <Compass size={17} />
                <div>
                  <span>STRUCTURED</span>
                  <strong>Not rigid</strong>
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
                  <span>ITERATIVE</span>
                  <strong>Build · Learn · Improve</strong>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="process-intro">
          <div className="section-container">
            <div className="process-intro-layout">
              <motion.div
                className="process-label"
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <span>01</span>
                <i />
                <span>HOW WE WORK</span>
              </motion.div>

              <motion.div
                className="process-intro-main"
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
                      A structured journey.
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      Built around <span>your goals.</span>
                    </motion.span>
                  </span>
                </h2>

                <motion.p variants={fadeUp}>
                  Every project starts with a different challenge. Our process
                  gives that challenge structure without forcing every project
                  into the same solution.
                </motion.p>

                <motion.p variants={fadeUp}>
                  We begin by understanding what needs to be solved, explore
                  the right technical approach, design the solution, build and
                  test it, and continuously refine it until the technology is
                  ready to create real value.
                </motion.p>
              </motion.div>

              <motion.div
                className="process-intro-orbit"
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

        <section className="process-journey">
          <div className="section-container">
            <motion.div
              className="journey-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                02 / THE AJ JOURNEY
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Six stages.
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    One <span>connected journey.</span>
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="journey-track"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {journeyStages.map((stage, index) => (
                <motion.div
                  className="journey-node"
                  key={stage.number}
                  variants={fadeUp}
                >
                  <span className="journey-node-index">{stage.number}</span>
                  <span className="journey-node-label">{stage.label}</span>
                  {index < journeyStages.length - 1 && (
                    <i className="journey-node-arrow" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="process-stages">
          <div className="section-container">
            <motion.div
              className="process-stages-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                03 / STAGE BY STAGE
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    What actually happens
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    at each <span>stage.</span>
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            <div className="stages-timeline">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                const reversed = index % 2 === 1;
                return (
                  <motion.article
                    className={`stage-block ${reversed ? "stage-block-reverse" : ""}`}
                    key={stage.number}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportLow}
                    variants={staggerParent}
                  >
                    <motion.div
                      className="stage-visual"
                      variants={reversed ? slideRight : slideLeft}
                    >
                      <div className="stage-visual-inner">
                        <span className="stage-visual-index">
                          {stage.number}
                        </span>
                        <div className="stage-visual-icon">
                          <Icon size={44} strokeWidth={1.3} />
                        </div>
                        <div className="stage-visual-ring ring-one" />
                        <div className="stage-visual-ring ring-two" />
                        <div className="stage-visual-glow" />
                        <div className="stage-visual-corner tl" />
                        <div className="stage-visual-corner tr" />
                        <div className="stage-visual-corner bl" />
                        <div className="stage-visual-corner br" />
                        <span className="stage-visual-label">
                          {stage.label}
                        </span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="stage-body"
                      variants={staggerParent}
                    >
                      <motion.span
                        className="stage-category"
                        variants={fadeUp}
                      >
                        STAGE {stage.number}
                      </motion.span>

                      <motion.h3 variants={fadeUp}>{stage.title}</motion.h3>

                      <motion.p
                        className="stage-description"
                        variants={fadeUp}
                      >
                        {stage.description}
                      </motion.p>

                      <motion.div
                        className="stage-subtitle"
                        variants={fadeUp}
                      >
                        {stage.focusLabel}
                      </motion.div>

                      <motion.div
                        className="stage-focus"
                        variants={staggerParent}
                      >
                        {stage.focus.map((item) => (
                          <motion.span key={item} variants={fadeUp}>
                            {item}
                          </motion.span>
                        ))}
                      </motion.div>

                      <motion.div className="stage-output" variants={fadeUp}>
                        <span className="stage-output-label">OUTPUT</span>
                        <p>{stage.output}</p>
                      </motion.div>
                    </motion.div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="process-iteration">
          <div className="process-iteration-grid" />
          <div className="process-iteration-glow" />

          <div className="section-container">
            <motion.div
              className="iteration-content"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                THE PROCESS IS NOT LINEAR
              </motion.div>

              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Build. Learn.
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Improve. <span>Repeat.</span>
                  </motion.span>
                </span>
              </h2>

              <motion.p variants={fadeUp}>
                Real projects evolve. New information can change requirements,
                user feedback can reveal new opportunities and testing can
                uncover better approaches. That's why our process is designed
                to move forward while remaining flexible enough to adapt.
              </motion.p>

              <motion.div className="iteration-loop" variants={fadeUp}>
                <div className="iteration-row">
                  {["DISCOVER", "DEFINE", "DESIGN"].map((item, i) => (
                    <div className="iteration-step" key={item}>
                      <span>{item}</span>
                      {i < 2 && <i />}
                    </div>
                  ))}
                </div>

                <div className="iteration-row">
                  {["BUILD", "VALIDATE"].map((item, i) => (
                    <div className="iteration-step" key={item}>
                      <span>{item}</span>
                      {i < 1 && <i />}
                    </div>
                  ))}
                </div>

                <div className="iteration-return">
                  <RefreshCw size={18} />
                  <span>ITERATE</span>
                  <RefreshCw size={18} />
                </div>
              </motion.div>

              <motion.p className="iteration-signature" variants={fadeUp}>
                Progress isn't always a straight line. Better solutions come
                from continuous learning.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="process-ai">
          <div className="section-container">
            <motion.div
              className="process-ai-head"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                04 / WHEN AI IS INVOLVED
              </motion.div>
              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Intelligence needs
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    more than a <span>model.</span>
                  </motion.span>
                </span>
              </h2>
              <motion.p variants={fadeUp}>
                Building an AI solution involves much more than connecting an
                API or training a model. Data, models, infrastructure,
                application logic and user experience need to work together.
              </motion.p>
            </motion.div>

            <motion.div
              className="ai-flow"
              variants={staggerParentSlow}
              initial="hidden"
              whileInView="show"
              viewport={viewportLow}
            >
              {aiFlow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    className="ai-flow-step"
                    key={step.label}
                    variants={fadeUp}
                  >
                    <div className="ai-flow-card">
                      <div className="ai-flow-card-head">
                        <span className="ai-flow-index">0{index + 1}</span>
                        <div className="ai-flow-icon">
                          <Icon size={22} strokeWidth={1.7} />
                        </div>
                      </div>
                      <h3>{step.label}</h3>
                      <div className="ai-flow-steps">
                        {step.steps.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>
                    </div>
                    {index < aiFlow.length - 1 && (
                      <div className="ai-flow-connector" />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="process-collab">
          <div className="section-container">
            <div className="collab-layout">
              <motion.div
                className="collab-copy"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <motion.div className="section-kicker" variants={fadeUp}>
                  05 / WORKING TOGETHER
                </motion.div>
                <h2>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      Your input shapes
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      the <span>solution.</span>
                    </motion.span>
                  </span>
                </h2>
                <motion.p variants={fadeUp}>
                  We believe the strongest solutions are built through
                  collaboration. Your knowledge of the problem combined with
                  our technical expertise creates a better understanding of
                  what needs to be built.
                </motion.p>
              </motion.div>

              <motion.div
                className="collab-cards"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                {collaboration.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      className="collab-card"
                      key={item.number}
                      variants={fadeUp}
                    >
                      <div className="collab-card-top">
                        <Icon size={20} strokeWidth={1.8} />
                        <span>{item.number}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="process-cta">
          <div className="process-cta-grid" />
          <div className="process-cta-glow" />
          <div className="process-cta-orbit" />

          <div className="section-container">
            <motion.div
              className="process-cta-content"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                READY TO BEGIN?
              </motion.div>

              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Let's start with
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    the <span>problem.</span>
                  </motion.span>
                </span>
              </h2>

              <motion.p variants={fadeUp}>
                Tell us what you're trying to achieve, what isn't working or
                what you believe could be better. We'll help turn that starting
                point into a clear technology journey.
              </motion.p>

              <motion.div className="process-cta-actions" variants={fadeUp}>
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