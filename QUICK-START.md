# 🚀 Quick Start Guide - ASOR Culture International Website

Get your website running in 5 minutes!

## ⚡ Super Quick Setup

```bash
# 1. Navigate to project folder
cd asor-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

That's it! Open `http://localhost:5173` in your browser.

## 📁 What You Got

```
asor-website/
├── 📄 README.md           ← Full documentation
├── 📄 DEPLOYMENT.md       ← How to publish your site
├── 📄 CONTENT-GUIDE.md    ← How to edit content
├── 📄 QUICK-START.md      ← This file
│
├── src/
│   ├── components/        ← Reusable UI pieces
│   ├── pages/            ← All website pages
│   └── styles/           ← Design & colors
│
├── index.html            ← Main HTML template
├── package.json          ← Project configuration
└── vite.config.js        ← Build settings
```

## 🎯 What's Already Done

✅ **5 Complete Pages**
- Home - Hero, programs, founder preview
- About - Story, mission, values, impact
- Programs - 4 detailed programs
- Founder - Bio, achievements, philosophy
- Contact - Form, info, social links

✅ **Fully Responsive**
- Works on phones, tablets, desktops

✅ **Professional Design**
- Custom color scheme
- Beautiful typography
- Smooth animations

✅ **Production Ready**
- Optimized performance
- SEO-friendly
- Accessible

## 🎨 Customize Your Colors

**File**: `src/styles/global.css` (line 5)

```css
--color-primary: #66345C;    /* Deep Purple - Change this! */
--color-secondary: #CEB031;  /* Rich Gold - Change this! */
```

Save the file and see changes instantly!

## ✏️ Edit Content

### Home Page Text
**File**: `src/pages/Home.jsx`
- Line 20-30: Hero section
- Line 40-60: About preview
- Line 70-90: Programs

### Add Your Logo
1. Add image to `src/assets/images/logo.png`
2. Import in `src/components/Header.jsx`
3. Replace text logo with image

### Update Contact Info
**File**: `src/pages/Contact.jsx`
- Line 30-50: Email, phone, address

## 📸 Add Images

1. **Create images folder**
   ```bash
   mkdir -p src/assets/images
   ```

2. **Add your images** to this folder

3. **Use in components**
   ```jsx
   import myImage from '../assets/images/my-image.jpg';
   
   <img src={myImage} alt="Description" />
   ```

## 🚀 Deploy to Internet

### Option 1: Vercel (Easiest)

```bash
# Install Vercel
npm i -g vercel

# Deploy (first time)
vercel

# Deploy updates
vercel --prod
```

Your site is live! Free SSL, automatic deployments.

### Option 2: Netlify

```bash
# Install Netlify
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

Enter `dist` when asked for publish directory.

## 🔧 Common Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install package-name
```

## 💡 Next Steps

1. **Read CONTENT-GUIDE.md** - Learn how to update text
2. **Add your images** - Replace all placeholders
3. **Customize colors** - Make it match your brand
4. **Test on mobile** - Use Chrome DevTools
5. **Deploy** - Make it live!

## 🆘 Problems?

### Site won't start?
```bash
rm -rf node_modules
npm install
npm run dev
```

### Port already in use?
```bash
npm run dev -- --port 3000
```

### Changes not showing?
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

## 📚 Learn More

- **Full docs**: README.md
- **Deploy guide**: DEPLOYMENT.md
- **Content editing**: CONTENT-GUIDE.md

## 🎉 You're Ready!

Your professional website is ready to go. Just:
1. ✅ Customize content
2. ✅ Add images
3. ✅ Deploy
4. ✅ Share with the world!

---

**Questions?** Check the full README.md or contact support at info@asorculture.org

**Version**: 1.0.0 | **Built with**: React + Vite | **License**: © 2024 ASOR Culture International
