# graykuglen.com

Portfolio site for Gray Kuglen, a product designer who builds with AI.

Built with Next.js (App Router, static export) and Tailwind CSS, deployed on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

## Where things live

- `src/app/page.tsx`: homepage
- `src/components/sections/`: homepage sections
- `src/lib/case-studies.ts`: all case-study content, rendered by `src/app/work/[slug]/page.tsx`
- `src/app/services/page.tsx`: services page

Originally started from a commercial Shadcnblocks template; see `LICENSE`.
