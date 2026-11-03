# Migration notes

## Successfully migrated
- Organization name: Pykupz Digital
- Confirmed business category: digital marketing
- Confirmed public email: `business.support@pykupz.in`
- Primary routes: Home, Services, Our Work, About Us, Blog, Careers and Contact
- Official LinkedIn, Instagram, YouTube and Facebook links supplied by the site owner
- Responsive navigation and footer
- Search metadata, sitemap and robots configuration
- Mail-app-based contact workflow

## Available legacy content
The supplied XML excerpt contained site metadata, a site title and legacy contributor records. It did not contain publishable pages, posts, services, project descriptions, case-study bodies or usable asset references.

Legacy contributor names and email addresses were intentionally excluded. XML contributors do not establish current membership.

## Unavailable or awaiting approval
- Full company description, history, mission and values
- Approved service catalogue and service details
- Portfolio and case-study content
- Client-approved project images and outcomes
- Blog posts
- Current vacancies
- Official logo source file in the project workspace
- Favicon and social-sharing image

## Placeholders requiring manual review
Visible `[CONTENT NEEDED: ...]` labels identify content that must be confirmed by Pykupz Digital before publication.

## Legacy URL mapping
| Legacy URL | New URL | Status |
|---|---|---|
| `/` | `/` | Implemented |
| `/our-services` | `/services` | Configure redirect if the legacy path is confirmed |
| `/our-work` | `/work` | New route implemented |
| `/about-us` | `/about` | Configure redirect if the legacy path is confirmed |
| `/contact-us` | `/contact` | Configure redirect if the legacy path is confirmed |

## Intentionally not reproduced
- Squarespace editing/subscription UI
- Squarespace-generated markup, styles or scripts
- Newsletter form, because no confirmed email-list backend was supplied
- Unsupported revenue/ROI claims visible in an old screenshot
- Public legacy contributor profiles
- Fake case studies, testimonials, statistics, clients, awards or job openings

## Infrastructure separation
The application contains no DNS configuration and no mail credentials. Website records should be added separately after the Vercel preview deployment has been verified, while preserving Microsoft 365 mail records.
