import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
export const metadata: Metadata = { title: "Our Work", description: "Selected work from Pykupz Digital." };
export default function Work(){return <><PageHero eyebrow="Our work" title="Work worth talking about." intro="Case studies will appear here after the company confirms the projects and approves the supporting details."/><section className="section section-tint"><div className="shell"><div className="empty-state"><h2>Portfolio content is being prepared.</h2><p>[CONTENT NEEDED: approved project names, descriptions, visuals and outcomes]</p><Link className="button" href="/contact">Discuss a project</Link></div></div></section></>}
