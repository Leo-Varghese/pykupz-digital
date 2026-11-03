import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";
export const metadata: Metadata = { title: "Careers", description: "Career interest at Pykupz Digital." };
export default function Careers(){return <><PageHero eyebrow="Careers" title="Build what comes next." intro="There are no confirmed vacancies to publish at this time."/><section className="section"><div className="shell content-block"><h2>Interested in Pykupz Digital?</h2><p>Send a brief introduction and relevant portfolio or profile for future consideration. This is a general expression of interest, not an active job listing.</p><a className="button" href={`mailto:${site.email}?subject=Career%20interest%20%E2%80%94%20Pykupz%20Digital`}>Email your interest</a><p><Link href="/about">Learn more about Pykupz →</Link></p></div></section></>}
