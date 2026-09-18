"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  X,
  Code2,
  Users,
  Sparkles,
  Boxes,
  Target,
  LineChart,
  TrendingUp,
  Home as HomeIcon,
  BookOpen,
  LayoutGrid,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import "./projects.css";

const ease = [0.22, 1, 0.36, 1] as const;
const GITHUB_URL = "https://github.com/aqsatanoli?tab=repositories&type=source";

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
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const viewport = { once: true, amount: 0.2 } as const;

const filters = [
  { key: "all", label: "ALL" },
  { key: "ai-ml", label: "AI & ML" },
  { key: "gen-ai", label: "GENERATIVE AI" },
  { key: "cv", label: "COMPUTER VISION" },
  { key: "data", label: "DATA & ANALYTICS" },
  { key: "software", label: "SOFTWARE" },
  { key: "social", label: "SOCIAL MEDIA" },
  { key: "graphics", label: "GRAPHICS" },
];

const projects = [
  {
    number: "01",
    slug: "see-and-hire",
    image: "/projects/see-and-hire.png",
    title: "See and Hire",
    category: "AI PLATFORM",
    tags: ["ai-ml", "software"],
    icon: Users,
    shortDescription:
      "A hiring platform built to shorten the distance between a candidate and the right opening — using AI-assisted matching instead of endless manual screening.",
    problem:
      "Recruiters sift through hundreds of profiles per role. The right candidate is often buried, and the process drains time from both sides of the hire.",
    solution:
      "We built a platform where the matching logic does the first pass — surfacing candidates by fit, not just keyword overlap, and giving recruiters a shorter, sharper shortlist.",
    features: [
      "AI-assisted candidate matching",
      "Structured recruitment workflow",
      "Shortlist recommendations",
      "Full-stack platform build",
      "Backend and API engineering",
    ],
    tech: ["Python", "AI/ML", "FastAPI", "PostgreSQL", "React"],
    purpose:
      "A full product build — front end, back end, matching logic and workflow — delivered as one system.",
  },
  {
    number: "02",
    slug: "nutra-ai",
    image: "/projects/nutra-ai.png",
    title: "Nutra AI",
    category: "GENERATIVE AI",
    tags: ["gen-ai", "ai-ml"],
    icon: Sparkles,
    shortDescription:
      "A nutrition assistant that answers real questions about food and diet through conversation, powered by large language models instead of rigid meal plans.",
    problem:
      "Most nutrition tools hand you a generic plan. They ignore context — what you already eat, what you avoid, what you actually want to change.",
    solution:
      "We built a conversational assistant on top of LLMs that adapts to the person using it. It answers dietary questions, generates suggestions and adjusts as preferences shift.",
    features: [
      "LLM-powered conversations",
      "Personalized food guidance",
      "Context-aware recommendations",
      "Interactive assistant interface",
      "End-to-end AI application",
    ],
    tech: ["Python", "LLMs", "OpenAI", "Generative AI", "API Integration"],
    purpose:
      "An experiment in using LLMs where personalization is the whole point — not a feature added on top.",
  },
  {
    number: "03",
    slug: "tableop",
    image: "/projects/tableop.png",
    title: "Tableop",
    category: "AI / SOFTWARE",
    tags: ["software", "ai-ml"],
    icon: Boxes,
    shortDescription:
      "A software platform where intelligent capability sits inside the product — not as an add-on, but as part of how the system works.",
    problem:
      "Most software products bolt AI on late. It feels disconnected from the actual workflow and adds friction instead of removing it.",
    solution:
      "We designed Tableop so the intelligence runs through the product itself — integrated into the flow rather than sitting off to the side as a separate tool.",
    features: [
      "Product engineering",
      "AI integrated into workflow",
      "Backend architecture",
      "Application design",
      "End-to-end delivery",
    ],
    tech: ["Python", "FastAPI", "AI/ML", "PostgreSQL"],
    purpose:
      "A build that treats AI as core infrastructure — not a bolt-on feature.",
  },
  {
    number: "04",
    slug: "dental-dynamo",
    image: "/projects/dental-dynamo.png",
    title: "Dental Dynamo",
    category: "COMPUTER VISION",
    tags: ["cv", "ai-ml"],
    icon: Target,
    shortDescription:
      "A computer-vision tool that reads dental X-rays and highlights regions of interest — supporting the analysis rather than replacing it.",
    problem:
      "Reading dental X-rays is careful, visual work. Details matter, and a second pass through detection can catch what the eye skims past.",
    solution:
      "We trained a YOLOv8 model on dental imagery and paired it with OpenCV for preprocessing. The system flags regions and supports the analysis — leaving the clinical call to the professional.",
    features: [
      "Computer vision pipeline",
      "Medical image analysis",
      "YOLOv8 object detection",
      "AI-assisted screening",
      "Model training and evaluation",
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "Computer Vision"],
    purpose:
      "A working computer-vision pipeline applied to a real clinical image type — not a toy dataset.",
  },
  {
    number: "05",
    slug: "mental-health-in-tech",
    image: "/projects/mental-health.png",
    title: "Mental Health in Tech",
    category: "DATA & ANALYTICS",
    tags: ["data"],
    icon: LineChart,
    shortDescription:
      "A data project that reads between the lines of a real survey — looking at how mental health patterns show up inside tech workplaces.",
    problem:
      "Survey data about mental health in tech exists, but it's rarely read carefully. Patterns sit buried under columns of answers nobody actually looks at.",
    solution:
      "We cleaned and analyzed the dataset, ran exploratory work to find real signal, and built visualizations that tell a coherent story — not just charts for the sake of charts.",
    features: [
      "Data cleaning and preparation",
      "Exploratory analysis",
      "Visualization and reporting",
      "Statistical pattern finding",
      "Insight-driven reporting",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI"],
    purpose:
      "Data work done with care — cleaning, questioning, and reporting what the numbers actually say.",
  },
  {
    number: "06",
    slug: "job-salaries-management",
    image: "/projects/job-salaries.png",
    title: "Job Salaries Management",
    category: "DATA ANALYTICS",
    tags: ["data"],
    icon: TrendingUp,
    shortDescription:
      "A salary analysis project that turns a scattered dataset into something you can actually read — roles, ranges, trends, at a glance.",
    problem:
      "Salary data is messy. It comes in different formats, uses different titles for the same role, and rarely tells you anything useful at face value.",
    solution:
      "We normalized the data, grouped roles sensibly, and built an analysis layer that makes the numbers readable — so the trends are visible without having to dig for them.",
    features: [
      "Data normalization",
      "Salary and role analysis",
      "Trend visualization",
      "Statistical summaries",
      "Dashboard reporting",
    ],
    tech: ["Python", "Pandas", "NumPy", "Power BI"],
    purpose:
      "Structured analysis that takes raw records and returns a clear picture of salary trends.",
  },
  {
    number: "07",
    slug: "house-price-predictions",
    image: "/projects/house-price.png",
    title: "House Price Predictions",
    category: "MACHINE LEARNING",
    tags: ["ai-ml", "data"],
    icon: HomeIcon,
    shortDescription:
      "A machine-learning model that estimates property prices from housing data — trained, evaluated and tested on real feature sets.",
    problem:
      "Property pricing depends on many features at once. Linear guessing misses interactions that only show up when you model them together.",
    solution:
      "We built a regression pipeline with scikit-learn — cleaned the data, engineered features, trained the model and evaluated it against a held-out set to see what actually held up.",
    features: [
      "Regression modeling",
      "Data preprocessing",
      "Feature engineering",
      "Model training and evaluation",
      "Prediction pipeline",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    purpose:
      "A complete ML pipeline from raw data to a tested prediction — evaluation included, not skipped.",
  },
  {
    number: "08",
    slug: "story-generator",
    image: "/projects/story-generator.png",
    title: "Story Generator",
    category: "GENERATIVE AI",
    tags: ["gen-ai"],
    icon: BookOpen,
    shortDescription:
      "A generative AI application that turns a prompt into a short story — testing where language models are genuinely creative and where they fall back on patterns.",
    problem:
      "Template-based content generators produce the same story shape every time. Real narrative needs something less predictable.",
    solution:
      "We built a generator on top of LLMs with tuned prompts. The output varies in tone, structure and pacing depending on the input — closer to writing than filling in blanks.",
    features: [
      "LLM-driven generation",
      "Prompt design and tuning",
      "Narrative output control",
      "Interactive generation interface",
      "AI application build",
    ],
    tech: ["Python", "LLMs", "Generative AI", "Prompt Engineering"],
    purpose:
      "Creative experimentation with LLMs — using the model as a writing partner rather than a text expander.",
  },
  {
    number: "09",
    slug: "social-media-management",
    image: "/projects/social-media.png",
    title: "Social Media Management",
    category: "SOCIAL MEDIA",
    tags: ["social"],
    icon: TrendingUp,
    shortDescription:
      "A full social media service run through AJ Technologies — strategy, content, scheduling and analytics handled as one continuous operation.",
    problem:
      "Brands post inconsistently. Content gets made in bursts, strategies shift without reason, and analytics stay untouched. Growth stalls quietly.",
    solution:
      "We manage the whole loop — build a strategy from real audience data, produce content on a rhythm, handle day-to-day account operations and read the numbers back into the next cycle.",
    features: [
      "Content strategy",
      "Ongoing content creation",
      "Account and community management",
      "Analytics and reporting",
      "Multi-platform optimization",
    ],
    tech: ["Strategy", "Content Design", "Analytics", "Community Management"],
    purpose:
      "A service line that treats brand growth as an operating system — not a series of one-off posts.",
  },
  {
    number: "10",
    slug: "graphics-design",
    image: "/projects/graphics-design.png",
    title: "Graphics Design",
    category: "CREATIVE DESIGN",
    tags: ["graphics"],
    icon: LayoutGrid,
    shortDescription:
      "A graphics design service covering brand identity, social visuals, print collateral and product interfaces — all built on one consistent visual system.",
    problem:
      "Brands end up with a patchwork of visuals — a logo here, a template there, print material that doesn't quite match the site. Nothing feels like one brand.",
    solution:
      "We start with the system, not the assets. Logo, typography, color and layout are defined once, then applied across every surface — social, print, and product screens alike.",
    features: [
      "Logo and brand identity",
      "Social media graphics",
      "Marketing collateral",
      "UI and visual design",
      "Multi-format delivery",
    ],
    tech: ["Brand Systems", "Graphic Design", "Print & Digital", "Visual Identity"],
    purpose:
      "Design work that holds together as a system — not a stack of unrelated files.",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openProject, setOpenProject] = useState<null | (typeof projects)[0]>(
    null,
  );

  useEffect(() => {
    if (openProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openProject]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="projects-page">
      <main>
        <section className="projects-hero">
          <div className="projects-hero-grid" />
          <div className="projects-hero-noise" />
          <div className="projects-hero-glow projects-hero-glow-one" />
          <div className="projects-hero-glow projects-hero-glow-two" />

          <div className="projects-hero-container">
            <motion.div
              className="projects-hero-inner"
              variants={staggerParentSlow}
              initial="hidden"
              animate="show"
            >
              <motion.div className="hero-eyebrow" variants={slideLeft}>
                <span className="eyebrow-pulse" />
                <span>OUR WORK</span>
                <span className="eyebrow-divider" />
                <span>FULL PORTFOLIO</span>
              </motion.div>

              <h1>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Ideas we've turned into
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    <span>intelligent solutions.</span>
                  </motion.span>
                </span>
              </h1>

              <motion.p className="projects-hero-text" variants={fadeUp}>
                Explore a selection of AI, machine learning, generative AI, data
                analytics and software projects built to solve practical
                problems across different domains.
              </motion.p>

              <motion.div className="projects-hero-tags" variants={fadeUp}>
                <span>AI</span>
                <i />
                <span>MACHINE LEARNING</span>
                <i />
                <span>SOFTWARE</span>
                <i />
                <span>DATA</span>
              </motion.div>

              <motion.div className="projects-hero-actions" variants={fadeUp}>
                <Link href="/contact" className="hero-primary">
                  <span>Start a Project</span>
                  <ArrowUpRight size={17} strokeWidth={2} />
                </Link>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-secondary"
                >
                  <Code2 size={17} />
                  <span>View GitHub</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="projects-hero-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease, delay: 0.3 }}
            >
              <div className="hero-visual-aura" />
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="hero-image-frame">
                <Image
                  src="/images/projects-hero.png"
                  alt="Abstract dashboard composition representing the AJ Technologies project portfolio"
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
                    <i /> PORTFOLIO
                  </span>
                  <strong>BUILT · SHIPPED · LIVE</strong>
                </div>
              </div>

              <motion.div
                className="floating-panel panel-top"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease }}
              >
                <Sparkles size={17} />
                <div>
                  <span>TEN PROJECTS</span>
                  <strong>Across domains</strong>
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
                  <span>OPEN SOURCE</span>
                  <strong>View on GitHub</strong>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="projects-intro">
          <div className="section-container">
            <div className="projects-intro-layout">
              <motion.div
                className="projects-label"
                variants={slideLeft}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <span>01</span>
                <i />
                <span>SELECTED WORK</span>
              </motion.div>

              <motion.div
                className="projects-intro-main"
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
                      Different problems.
                    </motion.span>
                  </span>
                  <span className="reveal-mask">
                    <motion.span
                      className="reveal-line"
                      variants={fadeUp}
                      style={{ display: "block" }}
                    >
                      One <span>engineering mindset.</span>
                    </motion.span>
                  </span>
                </h2>

                <motion.p variants={fadeUp}>
                  Our portfolio reflects the breadth of our technical
                  capabilities — from computer vision and predictive machine
                  learning to generative AI, data analytics and complete
                  software platforms.
                </motion.p>

                <motion.p variants={fadeUp}>
                  Each project begins with a problem and ends with a
                  technology-driven solution designed around its intended use
                  case.
                </motion.p>
              </motion.div>

              <motion.div
                className="projects-intro-orbit"
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

        <section className="projects-list-section">
          <div className="section-container">
            <motion.div
              className="projects-filter"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              {filters.map((f) => (
                <motion.button
                  key={f.key}
                  type="button"
                  className={`filter-btn ${activeFilter === f.key ? "active" : ""}`}
                  onClick={() => setActiveFilter(f.key)}
                  variants={fadeUp}
                >
                  {f.label}
                  <span className="filter-count">
                    {f.key === "all"
                      ? projects.length
                      : projects.filter((p) => p.tags.includes(f.key)).length}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            <motion.div className="projects-grid" layout>
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <motion.article
                      key={project.slug}
                      className="project-card"
                      layout
                      initial={{ opacity: 0, y: 30, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.96 }}
                      transition={{ duration: 0.5, ease }}
                    >
                      <button
                        type="button"
                        className="project-card-inner"
                        onClick={() => setOpenProject(project)}
                        aria-label={`Open ${project.title}`}
                      >
                        <div className="project-card-visual">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 760px) 100vw, 50vw"
                            className="project-card-image"
                          />

                          <div className="project-card-overlay" />

                          <span className="project-card-index">
                            {project.number}
                          </span>

                          <div className="project-card-icon-tag">
                            <Icon size={18} strokeWidth={1.8} />
                          </div>

                          <div className="project-card-corner tl" />
                          <div className="project-card-corner tr" />
                          <div className="project-card-corner bl" />
                          <div className="project-card-corner br" />

                          <div className="project-card-name">
                            <span>{project.title}</span>
                          </div>
                        </div>

                        <div className="project-card-body">
                          <span className="project-card-category">
                            {project.category}
                          </span>
                          <h3>{project.title}</h3>
                          <p>{project.shortDescription}</p>

                          <div className="project-card-tech">
                            {project.tech.slice(0, 4).map((t) => (
                              <span key={t}>{t}</span>
                            ))}
                          </div>

                          <div className="project-card-footer">
                            <span className="project-card-cta">
                              <span>View Project</span>
                              <ArrowUpRight size={16} />
                            </span>
                          </div>
                        </div>
                      </button>

                      <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-github"
                        aria-label={`${project.title} on GitHub`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Code2 size={16} />
                      </a>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <section className="projects-cta">
          <div className="projects-cta-grid" />
          <div className="projects-cta-glow" />
          <div className="projects-cta-orbit" />

          <div className="section-container">
            <motion.div
              className="projects-cta-content"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div className="section-kicker" variants={fadeUp}>
                HAVE A PROJECT IN MIND?
              </motion.div>

              <h2>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    Your next project
                  </motion.span>
                </span>
                <span className="reveal-mask">
                  <motion.span
                    className="reveal-line"
                    variants={fadeUp}
                    style={{ display: "block" }}
                  >
                    could be our <span>next build.</span>
                  </motion.span>
                </span>
              </h2>

              <motion.p variants={fadeUp}>
                Have a problem that needs AI, software, data or a combination of
                technologies? Let's explore what we can build together.
              </motion.p>

              <motion.div className="projects-cta-actions" variants={fadeUp}>
                <Link href="/contact" className="cta-button">
                  <span>Start a Project</span>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>

                <Link href="/team" className="cta-link">
                  <span>Meet the Team</span>
                  <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {openProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpenProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setOpenProject(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="project-modal-hero">
                <div className="project-modal-hero-glow" />
                <span className="project-modal-index">
                  {openProject.number}
                </span>
                <span className="project-modal-category">
                  {openProject.category}
                </span>
                <h2>{openProject.title}</h2>
                <p>{openProject.shortDescription}</p>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-github"
                >
                  <Code2 size={18} />
                  <span>View on GitHub</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="project-modal-body">
                <div className="modal-block">
                  <span className="modal-block-label">PROBLEM</span>
                  <p>{openProject.problem}</p>
                </div>

                <div className="modal-block">
                  <span className="modal-block-label">SOLUTION</span>
                  <p>{openProject.solution}</p>
                </div>

                <div className="modal-block">
                  <span className="modal-block-label">KEY FEATURES</span>
                  <div className="modal-features">
                    {openProject.features.map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-block">
                  <span className="modal-block-label">TECHNOLOGY</span>
                  <div className="modal-tech">
                    {openProject.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-block modal-block-highlight">
                  <span className="modal-block-label">PURPOSE</span>
                  <p>{openProject.purpose}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}