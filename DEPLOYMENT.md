# Deployment Guide - ASOR Culture International Website

This guide provides step-by-step instructions for deploying your website to popular hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All content is finalized
- [ ] Images are optimized and added
- [ ] Contact form backend is configured (if applicable)
- [ ] Analytics tracking is set up (if applicable)
- [ ] SEO meta tags are updated
- [ ] All links are tested
- [ ] Site works on mobile, tablet, and desktop

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is optimal for React applications with zero configuration.

#### Method A: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Login to Vercel (creates account if needed)
   - Confirm project settings
   - Deploy to production

5. **Your site is live!**
   Vercel provides a URL like `your-project.vercel.app`

#### Method B: Vercel Git Integration

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects React and configures build settings
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to main branch automatically deploys
   - Pull requests get preview deployments

#### Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

---

### Option 2: Netlify

Netlify is another excellent option with great features.

#### Method A: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Specify build folder**
   When prompted, enter: `dist`

#### Method B: Netlify Drag & Drop

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to the deployment area
   - Your site is live instantly!

#### Method C: Netlify Git Integration

1. **Push to GitHub** (same as Vercel instructions)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

#### Custom Domain on Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records
4. SSL is automatically configured

---

### Option 3: GitHub Pages

Free hosting for static sites.

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/asor-website",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/asor-website/'
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

---

### Option 4: Traditional Web Hosting (cPanel)

For shared hosting with cPanel.

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Connect via FTP/SFTP
   - Upload contents of `dist/` folder to `public_html/`

3. **Configure server**
   Create `.htaccess` file in root:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 🔧 Environment Variables

If you add environment variables later:

### Vercel
1. Go to Project Settings → Environment Variables
2. Add variables (e.g., `VITE_API_URL`)
3. Redeploy

### Netlify
1. Go to Site Settings → Build & Deploy → Environment
2. Add variables
3. Trigger new deploy

### Local Development
Create `.env` file:
```
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 📊 Post-Deployment Steps

### 1. Set Up Analytics

**Google Analytics**
1. Create GA4 property
2. Add tracking code to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Set Up Form Handling

**Option A: Netlify Forms**
Add to form tag:
```jsx
<form name="contact" method="POST" data-netlify="true">
```

**Option B: Formspree**
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 3. SEO Optimization

1. **Submit sitemap to Google**
   - Generate sitemap
   - Submit at Google Search Console

2. **Add meta tags** (already included in index.html)
   - Update as needed for each page
   - Consider adding Open Graph tags for social sharing

### 4. Performance Monitoring

- Set up [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- Monitor Core Web Vitals
- Use [WebPageTest](https://www.webpagetest.org/)

### 5. Security

- Enable HTTPS (automatic on Vercel/Netlify)
- Set up security headers
- Configure CSP (Content Security Policy) if needed

---

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. **Main Branch**: Auto-deploys to production
2. **Feature Branches**: Get preview URLs
3. **Pull Requests**: Automatic preview deployments

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/new-feature

# Create pull request (gets preview URL)
# Merge to main (auto-deploys to production)
```

---

## 🆘 Troubleshooting

### Blank Page After Deployment

**Issue**: Site shows blank page  
**Solution**: Check browser console for errors. Usually routing issue.

For Vercel/Netlify, create `vercel.json` or `netlify.toml`:

**vercel.json**:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**netlify.toml**:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 404 on Page Refresh

**Issue**: Direct URL access shows 404  
**Solution**: Configure server for SPA routing (see above)

### Build Failures

1. Check build logs
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility
4. Try local build: `npm run build`

### Slow Initial Load

1. Optimize images
2. Enable code splitting
3. Add lazy loading for routes
4. Use CDN for assets

---

## 📱 Mobile Optimization

Ensure mobile performance:
1. Test on real devices
2. Use Chrome DevTools mobile emulation
3. Check [PageSpeed Insights](https://pagespeed.web.dev/)
4. Optimize images for mobile

---

## 🎯 Custom Domain Setup

### Registrar DNS Settings (Most Common)

**For Vercel**:
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

**For Netlify**:
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     your-site.netlify.app
```

### DNS Propagation
- Can take 24-48 hours
- Check status: [whatsmydns.net](https://www.whatsmydns.net/)

---

## 📝 Maintenance & Updates

### Regular Updates
```bash
# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Update React
npm install react@latest react-dom@latest
```

### Monitoring

Set up:
- Uptime monitoring (UptimeRobot, Pingdom)
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)

---

## 🎉 You're Live!

Your ASOR Culture International website is now deployed and accessible to the world!

**Next Steps**:
1. Share the URL with stakeholders
2. Monitor analytics and performance
3. Gather user feedback
4. Iterate and improve

For questions or issues, refer to the platform's documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://docs.github.com/pages)
