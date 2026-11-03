import Link from "next/link";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { site } from "@/data/site";

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid"><div><Logo inverse /><p className="footer-copy">A digital marketing company building thoughtful connections between organizations and their audiences.</p><SocialLinks /></div><div><h2>Explore</h2><Link href="/services">Services</Link><Link href="/work">Our Work</Link><Link href="/about">About Us</Link><Link href="/careers">Careers</Link></div><div><h2>Let&apos;s talk</h2><a href={`mailto:${site.email}`}>{site.email}</a><Link href="/contact" className="footer-cta">Contact us →</Link></div></div><div className="shell footer-bottom"><span>Â© {new Date().getFullYear()} Pykupz Digital</span></div></footer>;
}


