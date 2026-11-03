"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const links = [
  ["Home", "/"], ["Services", "/services"], ["Our Work", "/work"], ["About Us", "/about"],
  ["Blog", "/blog"], ["Careers", "/careers"], ["Contact", "/contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className="site-header"><div className="shell nav-wrap"><Logo /><nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} className={pathname === href ? "active" : ""} href={href}>{label}</Link>)}<Link className="button button-small" href="/contact">Start a conversation</Link></nav><button type="button" className="menu-button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(v => !v)}><span /><span /><span /></button></div>{open && <div id="mobile-menu" className="mobile-menu"><nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></div>}</header>;
}
