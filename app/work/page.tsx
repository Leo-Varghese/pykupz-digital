import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Discover the approach and capabilities of Pykupz Digital.",
};

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Thoughtful digital work starts with clear objectives."
        intro="We approach every engagement by understanding the organization, its audience and the result it wants to achieve."
      />

      <section className="section">
        <div className="shell split">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 className="statement">
              Strategy before execution.
            </h2>
          </div>

          <div>
            <p>
              Pykupz Digital works with organizations to identify priorities,
              shape the right message and develop a focused digital direction.
            </p>

            <ul className="check-list">
              <li>Understand the organization and its goals</li>
              <li>Identify the intended audience</li>
              <li>Develop a clear digital direction</li>
              <li>Review and improve the approach</li>
            </ul>

            <Link className="button" href="/contact">
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


