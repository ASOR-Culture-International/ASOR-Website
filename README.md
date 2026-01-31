# ASOR Culture International Website

A professional, scalable, and responsive organizational website built with React, designed to communicate purpose, transformation, and community impact.

## 🎯 Project Overview

ASOR Culture International is a transformative organization dedicated to helping individuals discover their purpose and live lives of intentional impact. This website showcases the organization's programs, mission, and founder while providing a seamless user experience across all devices.

## ✨ Features

- **Modern React Architecture**: Built with functional components and hooks
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Component-Based Structure**: Modular, reusable components for easy maintenance
- **Professional Design**: Clean, elegant design with custom color palette
- **Fast Performance**: Optimized for speed with Vite build tool
- **SEO-Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels
- **Future-Ready**: Prepared for CMS integration and API connections

## 🎨 Brand Colors

- **Primary (Deep Royal Purple)**: `#66345C` - Headers, primary elements
- **Secondary (Rich Gold)**: `#CEB031` - CTAs, highlights
- **Accent (Soft Gold)**: `#C3AD4F` - Subtle accents
- **Dark (Deep Plum)**: `#512F4A` - Footer, depth

## 📁 Project Structure

```
asor-website/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── ProgramCard.jsx
│   │   └── SectionWrapper.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Founder.jsx
│   │   └── Contact.jsx
│   ├── styles/            # Global styles
│   │   └── global.css
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd asor-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📄 Pages

### Home Page
- Hero section with compelling headline
- About preview
- Programs overview
- Founder highlight
- Call-to-action sections

### About Page
- Organization story
- Mission & Vision
- Core values
- Impact statistics
- Approach methodology

### Programs Page
- Purpose Discovery Hub
- Transformation (Annual Program)
- Purposeful Teens
- JCI Training
- Detailed program information

### Founder Page
- Professional bio
- Achievements timeline
- Leadership philosophy
- Areas of expertise
- Booking CTA

### Contact Page
- Contact form
- Contact information
- Social media links
- Office hours
- Map placeholder

## 🎨 Customization

### Changing Colors

Edit `src/styles/global.css`:

```css
:root {
  --color-primary: #66345C;
  --color-secondary: #CEB031;
  /* ... other colors */
}
```

### Changing Fonts

Edit `index.html` Google Fonts link and `src/styles/global.css`:

```css
:root {
  --font-display: 'YourFont', serif;
  --font-body: 'YourFont', serif;
  --font-accent: 'YourFont', sans-serif;
}
```

### Adding New Pages

1. Create new page component in `src/pages/`
2. Import in `src/App.jsx`
3. Add route in the Routes component
4. Add navigation link in `src/components/Header.jsx`

### Updating Content

All text content is directly in the component files for easy editing:
- Update text directly in JSX
- Modify arrays for programs, achievements, values, etc.
- Replace image placeholders with actual images

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 968px
- Desktop: > 968px

## 🔧 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

Or simply drag the `dist/` folder to Netlify's web interface.

## 🔌 Future Enhancements

### CMS Integration

The site is ready for CMS integration. Recommended options:
- **Sanity.io**: Modern headless CMS
- **Strapi**: Open-source headless CMS
- **Contentful**: Enterprise-grade CMS

### API Integration

To connect to an API:
1. Create API service files in `src/services/`
2. Use `fetch` or `axios` in components
3. Add loading states and error handling

### Form Backend

To make the contact form functional:
1. Set up backend API (e.g., Node.js/Express)
2. Or use form services (Formspree, Netlify Forms)
3. Update form submission handler in `Contact.jsx`

### Analytics

Add Google Analytics or similar:
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🛠️ Tech Stack

- **React 18**: UI framework
- **React Router 6**: Client-side routing
- **Vite**: Build tool and dev server
- **CSS3**: Styling with CSS variables
- **Google Fonts**: Typography

## 📝 Component Usage

### Button Component

```jsx
import Button from './components/Button';

<Button variant="primary" size="large" href="/contact">
  Get Started
</Button>
```

### Program Card

```jsx
import ProgramCard from './components/ProgramCard';

<ProgramCard 
  title="Program Name"
  description="Program description"
  features={['Feature 1', 'Feature 2']}
/>
```

### Section Wrapper

```jsx
import SectionWrapper from './components/SectionWrapper';

<SectionWrapper 
  variant="light" 
  title="Section Title" 
  subtitle="Section Subtitle"
>
  {/* Content */}
</SectionWrapper>
```

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Build Errors

Clear cache and reinstall:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

## 📞 Support

For questions or issues:
- Email: info@asorculture.org
- Create an issue in the repository

## 📜 License

© 2024 ASOR Culture International. All rights reserved.

## 🙏 Acknowledgments

Built with modern web technologies and best practices for optimal performance and user experience.

---

**Version**: 1.0.0  
**Last Updated**: January 2025
