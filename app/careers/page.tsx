import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Connect with Pykupz Digital about career opportunities.",
};

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Create, learn and grow with us."
        intro="Pykupz Digital welcomes people interested in digital marketing, creative work and building meaningful online experiences."
      />

      <section className="section">
        <div className="shell content-block">
          <p className="eyebrow">Work with Pykupz</p>
          <h2>Introduce yourself.</h2>

          <p>
            If you are interested in future opportunities with Pykupz Digital,
            send us a short introduction together with your portfolio, résumé
            or professional profile.
          </p>

          <a
            className="button"
            href={`mailto:${site.email}?subject=Career%20interest%20%E2%80%94%20Pykupz%20Digital`}
          >
            Send your profile
          </a>
        </div>
      </section>
    </>
  );
}

