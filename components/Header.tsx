"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Our Work", "/work"],
  ["About Us", "/about"],
  ["Blog", "/blog"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="shell nav-wrap">
          <Logo />

          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([label, href]) => (
              <Link
                key={href}
                className={pathname === href ? "active" : ""}
                href={href}
              >
                {label}
              </Link>
            ))}

            <Link className="button button-small" href="/contact">
              Start a conversation
            </Link>
          </nav>

          <button
            type="button"
            className={`menu-button ${open ? "menu-button-open" : ""}`}
            aria-expanded={open}
            aria-controls="mobile-curtain-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-curtain-menu"
        className={`mobile-curtain ${open ? "mobile-curtain-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-curtain-nav" aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "active" : ""}
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
            >
              <span className="mobile-link-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{label}</span>

              <span className="mobile-link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </nav>

        <div className="mobile-curtain-footer">
          <p>Digital marketing, built with purpose.</p>

          <a href="mailto:business.support@pykupz.in">
            business.support@pykupz.in
          </a>
        </div>
      </div>
    </>
  );
}


