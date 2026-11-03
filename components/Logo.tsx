import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="logo" aria-label="Pykupz Digital home">
      <span className="logo-mark" aria-hidden="true"><i /><b /></span>
      <span className={inverse ? "text-white" : "text-ink"}>PYKUPZ <strong>DIGITAL</strong></span>
    </Link>
  );
}
