import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
export const metadata: Metadata = { title: "Blog", description: "Updates and ideas from Pykupz Digital." };
export default function Blog(){return <><PageHero eyebrow="Blog" title="Ideas, updates and perspectives." intro="The supplied legacy export contained no publishable blog posts."/><section className="section section-tint"><div className="shell"><div className="empty-state"><h2>No posts published yet.</h2><p>Approved articles can be added later in <code>data/posts.ts</code>.</p></div></div></section></>}
