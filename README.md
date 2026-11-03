# Pykupz Digital website

Production-ready website for **Pykupz Digital**, rebuilt independently from Squarespace.

## Stack
- Next.js App Router
- TypeScript
- React
- Tailwind CSS 4
- Vercel-ready

## Local setup
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Production check
```bash
npm run lint
npm run build
npm start
```

## GitHub workflow
1. Create an empty GitHub repository.
2. Copy this project into the repository folder.
3. Run:
```bash
git init
git add .
git commit -m "Build Pykupz Digital website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Deploy to Vercel
1. In Vercel, choose **Add New → Project**.
2. Import the GitHub repository.
3. Keep the detected framework as **Next.js**.
4. No environment variables are required.
5. Deploy and test the temporary `vercel.app` URL.
6. Only after testing, attach `pykupz.in` and `www.pykupz.in` in Vercel.

## Content editing
- Company/site details: `data/site.ts`
- Services: `data/services.ts`
- Portfolio entries: `data/projects.ts`
- Blog entries: `data/posts.ts`
- Page copy: the matching file under `app/`

## Assets
Place approved files under:
- `public/images/brand/`
- `public/images/services/`
- `public/images/projects/`
- `public/images/blog/`

The current brand mark is implemented in CSS because the source logo file was not available to the build environment. Replace it with the supplied official logo asset when available.

## Contact form
The form validates required fields and opens the visitor's email application addressed to `business.support@pykupz.in`. It does not claim server-side delivery and needs no paid service.

## Custom domain and Microsoft 365 email
Do not replace nameservers and do not delete or overwrite existing mail-related MX, SPF/TXT, DKIM or autodiscover records. Add only the website records Vercel specifically provides after the temporary deployment succeeds. DNS values are intentionally not included in this repository.

## Security
No secrets, credentials, raw exports or private DNS files belong in this repository. `.env*`, build output and dependencies are ignored.
