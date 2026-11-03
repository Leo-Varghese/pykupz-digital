import Image from "next/image";
import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="logo" aria-label="Pykupz Digital home">
      <Image
        src="/images/brand/02.jpg"
        alt="Pykupz Digital"
        width={220}
        height={48}
        priority
        className={inverse ? "brand-logo brand-logo-footer" : "brand-logo"}
      />
    </Link>
  );
}
