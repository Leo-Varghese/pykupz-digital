import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Pykupz Digital, a digital marketing company.",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A digital-first marketing company."
        intro="Pykupz Digital helps organizations build a clear, professional and engaging digital presence."
      />

      <section className="section">
        <div className="shell split">
          <div>
            <p className="eyebrow">Pykupz Digital</p>
            <h2 className="statement">
              Clear communication. Thoughtful digital direction.
            </h2>
          </div>

          <div>
            <p>
              We believe effective digital marketing begins with understanding
              the organization, its audience and its goals.
            </p>

            <p>
              Our approach is focused, collaborative and shaped around the
              needs of each engagement rather than a one-size-fits-all formula.
            </p>

            <ul className="check-list">
              <li>Digital-first thinking</li>
              <li>Clear and professional communication</li>
              <li>Audience-focused planning</li>
              <li>Practical collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell split">
          <h2 className="statement">
            Have a digital marketing requirement?
          </h2>

          <div>
            <p>Tell us about your organization and what you want to achieve.</p>
            <Link className="button" href="/contact">
              Contact Pykupz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


