import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/services";
export const metadata: Metadata = { title: "Services", description: "Explore the confirmed digital marketing services of Pykupz Digital." };
export default function Services(){return <><PageHero eyebrow="Our services" title="Digital thinking for ambitious organizations." intro="Pykupz Digital provides digital marketing support. Detailed capabilities will be published after company review."/><section className="section"><div className="shell grid-3">{services.map((s,i)=><article className="card" key={s.title}><span className="card-number">0{i+1}</span><h2>{s.title}</h2><p>{s.description}</p></article>)}<article className="card placeholder"><h2>Service catalogue review</h2><p>[CONTENT NEEDED: confirmed service names, detailed scope, process and deliverables]</p></article></div></section></>}
