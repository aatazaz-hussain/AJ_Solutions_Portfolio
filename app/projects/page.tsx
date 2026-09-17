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
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import "./projects.css";

const ease = [0.22, 1, 0.36, 1] as const;
const GITHUB_URL =
  "https://github.com/aqsatanoli?tab=repositories&type=source";

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
];

const projects = [
  {
    number: "01",
    slug: "see-and-hire",
    title: "See and Hire",
    category: "AI PLATFORM",
    tags: ["ai-ml", "software"],
    icon: Users,
    shortDescription:
      "An AI-powered hiring platform designed to connect talent with opportunities through intelligent matching and streamlined recruitment workflows.",
    problem:
      "Recruitment workflows are fragmented, and matching the right candidates to the right opportunities is slow and manual.",
    solution:
      "An AI-powered hiring platform that intelligently connects candidates with opportunities and streamlines the end-to-end recruitment workflow.",
    features: [
      "AI-powered matching",
      "Recruitment workflows",
      "Intelligent recommendations",
      "Platform development",
      "Backend engineering",
    ],
    tech: ["Python", "AI/ML", "FastAPI", "PostgreSQL", "React"],
    purpose:
      "Demonstrates the ability to build AI-driven platforms with real user workflows at scale.",
  },
  {
    number: "02",
    slug: "nutra-ai",
    title: "Nutra AI",
    category: "GENERATIVE AI",
    tags: ["gen-ai", "ai-ml"],
    icon: Sparkles,
    shortDescription:
      "An AI-powered nutrition assistant designed to provide personalized dietary guidance and food-related insights using large language models.",
    problem:
      "Generic nutrition advice fails to account for individual context and preferences.",
    solution:
      "A personalized nutrition assistant powered by large language models, providing dietary guidance and food-related insights through conversational AI.",
    features: [
      "Generative AI",
      "Personalized recommendations",
      "LLM integration",
      "Conversational interaction",
      "AI-powered application development",
    ],
    tech: ["Python", "LLMs", "OpenAI", "Generative AI", "API Integration"],
    purpose:
      "Demonstrates applied generative AI in a domain where personalization matters.",
  },
  {
    number: "03",
    slug: "tableop",
    title: "Tableop",
    category: "AI / SOFTWARE",
    tags: ["software", "ai-ml"],
    icon: Boxes,
    shortDescription:
      "A technology-driven software project combining application development and intelligent capabilities to create a practical digital solution.",
    problem:
      "Bridging application development with intelligent capability in one cohesive product.",
    solution:
      "A software platform combining backend engineering and AI integration into a practical digital solution.",
    features: [
      "Software engineering",
      "AI integration",
      "Backend development",
      "Application architecture",
      "Digital product development",
    ],
    tech: ["Python", "FastAPI", "AI/ML", "PostgreSQL"],
    purpose:
      "Demonstrates integrated software engineering with AI capability.",
  },
  {
    number: "04",
    slug: "dental-dynamo",
    title: "Dental Dynamo",
    category: "COMPUTER VISION",
    tags: ["cv", "ai-ml"],
    icon: Target,
    shortDescription:
      "A computer-vision project focused on analyzing dental X-ray imagery using AI-assisted object detection.",
    problem:
      "Dental X-ray interpretation requires careful visual analysis that can benefit from AI-assisted detection.",
    solution:
      "A computer-vision system using YOLOv8 and OpenCV to analyze dental X-ray imagery and support AI-assisted object detection.",
    features: [
      "Computer Vision",
      "Medical image analysis",
      "Object detection",
      "AI-assisted analysis",
      "Model development",
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "Computer Vision"],
    purpose:
      "Demonstrates applied computer vision in a healthcare-adjacent domain.",
  },
  {
    number: "05",
    slug: "mental-health-in-tech",
    title: "Mental Health in Tech",
    category: "DATA & ANALYTICS",
    tags: ["data"],
    icon: LineChart,
    shortDescription:
      "A data-analysis project exploring mental health patterns and insights within the technology workplace.",
    problem:
      "Understanding mental health patterns in tech workplaces requires structured analysis of real survey data.",
    solution:
      "A data-analysis project exploring and visualizing mental health patterns within the technology workplace.",
    features: [
      "Data analysis",
      "Exploratory analysis",
      "Data visualization",
      "Statistical insights",
      "Business intelligence",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI"],
    purpose:
      "Demonstrates applied data analysis in a domain with real-world relevance.",
  },
  {
    number: "06",
    slug: "job-salaries-management",
    title: "Job Salaries Management",
    category: "DATA ANALYTICS",
    tags: ["data"],
    icon: TrendingUp,
    shortDescription:
      "A data-driven project focused on organizing, analyzing and extracting meaningful insights from salary information.",
    problem:
      "Salary data is often scattered, inconsistent, and hard to turn into actionable insight.",
    solution:
      "A data-driven solution that organizes, analyzes and extracts meaningful insights from salary information.",
    features: [
      "Data processing",
      "Data analysis",
      "Visualization",
      "Statistical insights",
      "Dashboard-oriented reporting",
    ],
    tech: ["Python", "Pandas", "NumPy", "Power BI"],
    purpose:
      "Demonstrates structured data work that turns raw records into business insight.",
  },
  {
    number: "07",
    slug: "house-price-predictions",
    title: "House Price Predictions",
    category: "MACHINE LEARNING",
    tags: ["ai-ml", "data"],
    icon: HomeIcon,
    shortDescription:
      "A predictive machine-learning solution designed to estimate property prices from relevant housing data and identify patterns within the dataset.",
    problem:
      "Estimating property prices accurately requires analyzing multiple features and patterns in housing data.",
    solution:
      "A machine-learning model that analyzes housing data to predict property prices and surface patterns within the dataset.",
    features: [
      "Predictive modeling",
      "Regression",
      "Data preprocessing",
      "Feature analysis",
      "Model evaluation",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    purpose:
      "Demonstrates a complete machine-learning pipeline from data to prediction.",
  },
  {
    number: "08",
    slug: "story-generator",
    title: "Story Generator",
    category: "GENERATIVE AI",
    tags: ["gen-ai"],
    icon: BookOpen,
    shortDescription:
      "A generative AI application designed to create stories using language-model technology and natural-language generation.",
    problem:
      "Generating coherent creative content requires more than templates — it needs language-model intelligence.",
    solution:
      "An AI-powered application that generates stories through language-model technology and natural-language generation.",
    features: [
      "Generative AI",
      "LLM integration",
      "Prompt engineering",
      "Natural-language generation",
      "AI application development",
    ],
    tech: ["Python", "LLMs", "Generative AI", "Prompt Engineering"],
    purpose:
      "Demonstrates creative application of large language models.",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openProject, setOpenProject] = useState<null | typeof projects[0]>(
    null
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
                <span>SELECTED PROJECTS</span>
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
                Explore a selection of AI, machine learning, generative AI,
                data analytics and software projects built to solve practical
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
                  alt="Abstract dashboard composition representing the AJ Solutions project portfolio"
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
                  <span>EIGHT PROJECTS</span>
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
                  capabilities—from computer vision and predictive machine
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
                          <span className="project-card-index">
                            {project.number}
                          </span>

                          <div className="project-card-symbol">
                            <Icon size={40} strokeWidth={1.3} />
                          </div>

                          <div className="project-card-ring ring-one" />
                          <div className="project-card-ring ring-two" />
                          <div className="project-card-glow" />

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
                Have a problem that needs AI, software, data or a combination
                of technologies? Let's explore what we can build together.
              </motion.p>

              <motion.div className="projects-cta-actions" variants={fadeUp}>
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