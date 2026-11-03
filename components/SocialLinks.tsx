import { site } from "@/data/site";

const icons = {
  linkedin: <path d="M6.5 8.2H3.2V19h3.3V8.2ZM4.8 3A1.9 1.9 0 1 0 4.8 6.8 1.9 1.9 0 0 0 4.8 3ZM19.8 12.8c0-3.3-1.8-4.9-4.2-4.9-1.9 0-2.8 1.1-3.3 1.8V8.2H9V19h3.3v-5.4c0-1.4.3-2.8 2-2.8s1.8 1.6 1.8 2.9V19h3.3l.4-6.2Z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.6" r="1" className="fill-current" /></>,
  youtube: <><path d="M21 8.1a2.6 2.6 0 0 0-1.8-1.8C17.6 6 12 6 12 6s-5.6 0-7.2.3A2.6 2.6 0 0 0 3 8.1 27 27 0 0 0 2.7 12 27 27 0 0 0 3 15.9a2.6 2.6 0 0 0 1.8 1.8c1.6.3 7.2.3 7.2.3s5.6 0 7.2-.3a2.6 2.6 0 0 0 1.8-1.8 27 27 0 0 0 .3-3.9 27 27 0 0 0-.3-3.9Z" /><path d="m10 15 5-3-5-3v6Z" className="fill-white stroke-none" /></>,
  facebook: <path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.6v8H14Z" />
};

export function SocialLinks() {
  return <div className="socials" aria-label="Pykupz Digital social profiles">{Object.entries(site.social).map(([name, href]) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Pykupz Digital on ${name}`}><svg viewBox="0 0 24 24" aria-hidden="true">{icons[name as keyof typeof icons]}</svg></a>)}</div>;
}


