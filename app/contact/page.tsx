import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/site";
export const metadata: Metadata = { title: "Contact", description: "Contact Pykupz Digital." };
export default function Contact(){return <><PageHero eyebrow="Contact us" title="Let&apos;s start a conversation." intro="Tell us about your organization, your goals and what you want to improve."/><section className="section"><div className="shell contact-layout"><div><h2>Contact Pykupz Digital</h2><p>Current public contact email:</p><p><a href={`mailto:${site.email}`}><strong>{site.email}</strong></a></p><p>Connect through the official social profiles:</p><SocialLinks /></div><ContactForm /></div></section></>}


