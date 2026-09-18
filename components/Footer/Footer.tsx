"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "./Footer.css";

const LinkedinIcon = ({ size = 19 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const InstagramIcon = ({ size = 19 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
  </svg>
);

const WhatsappIcon = ({ size = 19 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.16-.24-.57-.48-.49-.66-.5l-.56-.01c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.44 1.05 2.83 1.19 3.02.15.2 2.06 3.14 4.99 4.41.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.71-.7 1.96-1.37.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34ZM12.04 21.5h-.01a9.44 9.44 0 0 1-4.81-1.32l-.35-.2-3.57.93.95-3.48-.23-.36a9.4 9.4 0 0 1-1.44-5.03c0-5.2 4.24-9.44 9.46-9.44 2.53 0 4.9.99 6.68 2.77a9.37 9.37 0 0 1 2.77 6.68c0 5.2-4.24 9.45-9.45 9.45ZM20.52 3.49A11.35 11.35 0 0 0 12.04 0C5.78 0 .69 5.09.69 11.35c0 2 .52 3.94 1.51 5.66L.6 24l7.13-1.87a11.33 11.33 0 0 0 5.3 1.35h.01c6.25 0 11.34-5.09 11.34-11.35 0-3.03-1.18-5.88-3.32-8.02Z" />
  </svg>
);

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <img
                src="/logo/aj-technologies-logo.png"
                alt="AJ Technologies - AI Journey"
              />
            </Link>

            <p>
              Building intelligent technology solutions that turn ambitious
              ideas into scalable digital products.
            </p>

            <Link href="/contact" className="footer-project-link">
              Start a Project
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </Link>
          </div>

          <div className="footer-column">
            <span className="footer-heading">Company</span>

            <ul>
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column footer-connect">
            <span className="footer-heading">Connect</span>

            <p>
              Have an idea, challenge, or project in mind? Let's build the next
              step of your AI journey.
            </p>

            <div className="footer-socials">
              <a
                href="mailto:ajtechnologies.ai@gmail.com"
                aria-label="Email"
              >
                <Mail size={19} strokeWidth={1.8} />
              </a>

              <a
                href="https://wa.me/923260666521"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsappIcon size={19} />
              </a>

              <a
                href="https://www.instagram.com/ajtechnologies45?igsi=eDc1dmYwa2Z3ZGkw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon size={19} />
              </a>

              <a
                href="https://www.linkedin.com/company/aj-technologies-official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={19} />
              </a>
            </div>

            <div className="footer-contact-wrap">
              <button
                type="button"
                className="footer-contact-trigger"
                onClick={() => setContactOpen((v) => !v)}
                aria-expanded={contactOpen}
                aria-label="Open contact options"
              >
                <span>Contact Us</span>
                <ArrowUpRight
                  size={14}
                  className={contactOpen ? "is-open" : ""}
                />
              </button>

              <AnimatePresence>
                {contactOpen && (
                  <motion.div
                    className="footer-contact-popover"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href="mailto:ajtechnologies.ai@gmail.com"
                      className="footer-contact-option"
                    >
                      <div className="footer-contact-option-icon">
                        <Mail size={16} strokeWidth={1.8} />
                      </div>
                      <div className="footer-contact-option-body">
                        <span>Email</span>
                        <strong>ajtechnologies.ai@gmail.com</strong>
                      </div>
                      <ArrowUpRight size={14} />
                    </a>

                    <a
                      href="https://wa.me/923260666521"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-contact-option"
                    >
                      <div className="footer-contact-option-icon">
                        <WhatsappIcon size={16} />
                      </div>
                      <div className="footer-contact-option-body">
                        <span>WhatsApp</span>
                        <strong>+92 326 0666521</strong>
                      </div>
                      <ArrowUpRight size={14} />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AJ Technologies. All rights reserved.</span>
          <span className="footer-tagline">AI Journey</span>
        </div>
      </div>
    </footer>
  );
}