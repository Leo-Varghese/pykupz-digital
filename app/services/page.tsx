import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore digital marketing services from Pykupz Digital.",
};

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Digital marketing built around your goals."
        intro="We help organizations communicate clearly, strengthen their digital presence and connect with the right audience."
      />

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">How we help</p>
              <h2>Focused digital support.</h2>
            </div>
            <p>
              Every engagement begins by understanding the organization,
              audience and outcome before deciding the right digital approach.
            </p>
          </div>

          <div className="grid-3">
            {services.map((service, index) => (
              <article className="card" key={service.title}>
                <span className="card-number">0{index + 1}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </article>
            ))}

            <article className="card">
              <span className="card-number">02</span>
              <h2>Digital presence</h2>
              <p>
                Support for building a professional and consistent presence
                across relevant digital channels.
              </p>
            </article>

            <article className="card">
              <span className="card-number">03</span>
              <h2>Campaign planning</h2>
              <p>
                Thoughtful campaign direction aligned with the audience,
                message and business objective.
              </p>
            </article>
          </div>

          <div style={{ marginTop: "40px" }}>
            <Link className="button" href="/contact">
              Discuss your requirements
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


