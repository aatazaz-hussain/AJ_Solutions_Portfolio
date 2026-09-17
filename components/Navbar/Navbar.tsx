"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar">
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/logo/aj-solutions-logo.png"
            alt="AJ Solutions - AI Journey"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="nav-cta">
          <span>Start a Project</span>
          <ArrowUpRight size={17} strokeWidth={2} />
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <div className="mobile-nav">
        <div className="mobile-nav-inner">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`mobile-nav-link ${isActive ? "active" : ""}`}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={18} strokeWidth={1.8} />
              </Link>
            );
          })}

          <Link href="/contact" onClick={closeMenu} className="mobile-nav-cta">
            Start a Project
            <ArrowUpRight size={18} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </header>
  );
}