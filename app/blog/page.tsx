import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights and updates from Pykupz Digital.",
};

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Digital perspectives from Pykupz."
        intro="Ideas, observations and updates from the world of digital marketing."
      />

      <section className="section section-tint">
        <div className="shell">
          <div className="empty-state">
            <h2>Insights are coming soon.</h2>
            <p>
              Follow Pykupz Digital on its official social channels for company
              updates and digital marketing content.
            </p>
            <Link className="button" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

