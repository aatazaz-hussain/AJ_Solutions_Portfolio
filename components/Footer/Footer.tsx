import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import "./Footer.css";

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
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <img
                src="/logo/aj-solutions-logo.png"
                alt="AJ Solutions - AI Journey"
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
                href="mailto:ajsolutions45.ai@gmail.com"
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
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AJ Solutions. All rights reserved.</span>
          <span className="footer-tagline">AI Journey</span>
        </div>
      </div>
    </footer>
  );
}