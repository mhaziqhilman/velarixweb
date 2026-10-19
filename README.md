# Velarix Technology — website

Single-page marketing site for Velarix Technology Sdn. Bhd. Built with Vite, React 19, TypeScript and Tailwind. Design tokens live in `src/tokens.css`; page styles in `src/index.css`; all copy in `src/content.ts`.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` type-checks and writes the production bundle to `dist/`. `npm run lint` runs ESLint.

Note: the contact form only delivers on the Netlify deployment. Locally it shows a notice instead of sending.

## Deploy on Netlify

1. Push this folder to a Git repository (GitHub, GitLab or Bitbucket) and import it in Netlify as a new site. `netlify.toml` already sets the build command (`npm run build`) and publish folder (`dist`).
2. **Enable form detection** before the first deploy: Site configuration → Forms → *Enable form detection*. Netlify finds the hidden `contact` form in `index.html` during the build.
3. Deploy. Submissions appear under the site's **Forms** tab.
4. **Email notifications**: Site configuration → Notifications → Form submission notifications → *Add notification* → Email → `velarixtechnology@gmail.com`. Without this step submissions stay in the dashboard only.
5. Send one test message from the live site and confirm it arrives in Gmail (check Spam the first time).

## Point velarixtechnology.com at Netlify

The domain is registered at YeahHost. Two options:

**Option A — keep YeahHost DNS (recommended, least change)**

1. In Netlify: Domain management → *Add a domain* → `velarixtechnology.com`, then also add `www.velarixtechnology.com`.
2. In YeahHost's DNS zone for the domain, add:
   - `A` record, host `@`, value `75.2.60.5` (Netlify's load balancer)
   - `CNAME` record, host `www`, value `<your-site-name>.netlify.app`
   - Remove any old `A` or `CNAME` records for `@` and `www` that point elsewhere.
3. Wait for DNS to propagate (minutes to a few hours), then in Netlify enable HTTPS (Let's Encrypt is automatic once DNS resolves).

**Option B — use Netlify DNS**

In Netlify choose *Set up Netlify DNS* for the domain, then at YeahHost replace the domain's nameservers with the four `dns1–4.p0x.nsone.net` names Netlify shows. Netlify then manages all records.

Netlify's Domain management page shows the exact values to use if they differ from the above.

## Content and assets

- Copy, navigation, services and contact details: `src/content.ts`
- Logo: `public/assets/logo.png`
- Service diagrams: `src/components/figures/`
- The old service photos in `public/assets/services/` are no longer used and can be deleted.

A copy of the pre-redesign site is kept in `backup/2026-10-19-pre-redesign/`.
