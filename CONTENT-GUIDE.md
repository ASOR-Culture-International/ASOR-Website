# Content Editing Guide

This guide helps you update text, images, and other content on the ASOR Culture International website without technical knowledge.

## 📝 Quick Reference

| What to Update | File Location | Line Numbers |
|----------------|---------------|--------------|
| Home page hero text | `src/pages/Home.jsx` | ~20-30 |
| About page bio | `src/pages/About.jsx` | ~50-70 |
| Programs details | `src/pages/Programs.jsx` | ~10-80 |
| Founder bio | `src/pages/Founder.jsx` | ~70-100 |
| Contact info | `src/pages/Contact.jsx` | ~30-50 |
| Header navigation | `src/components/Header.jsx` | ~20-30 |
| Footer content | `src/components/Footer.jsx` | Throughout |

## 🏠 Home Page Updates

### Hero Section

**File**: `src/pages/Home.jsx`

Find and update:
```jsx
<h1 className="hero__title">
  Transform Your Life Through
  <span className="hero__title-highlight"> Purpose Discovery</span>
</h1>
<p className="hero__subtitle">
  Empowering individuals and communities to live intentionally, 
  discover their purpose, and create lasting impact in the world.
</p>
```

### Programs Preview

Find the `programs` array around line 10:
```jsx
const programs = [
  {
    title: 'Purpose Discovery Hub',
    description: 'Your description here...',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3'
    ]
  },
  // ... more programs
];
```

Update:
- `title`: Program name
- `description`: Brief description
- `features`: Array of bullet points

### Statistics

Find around line 90:
```jsx
<div className="stat">
  <div className="stat__number">500+</div>
  <div className="stat__label">Lives Transformed</div>
</div>
```

Update numbers and labels as needed.

## 📖 About Page Updates

**File**: `src/pages/About.jsx`

### Organization Story

Find around line 50:
```jsx
<p className="story-section__text">
  ASOR Culture International was founded on the belief...
</p>
```

Update the three paragraphs to tell your story.

### Mission & Vision

Find around line 80:
```jsx
<p className="mission-vision__text">
  To empower individuals to discover their unique purpose...
</p>
```

### Core Values

Find the `values` array around line 10:
```jsx
const values = [
  {
    title: 'Purpose-Driven',
    description: 'We believe every individual...',
    icon: '🎯'
  },
  // ... more values
];
```

Update or add values by modifying this array.

## 🎓 Programs Page Updates

**File**: `src/pages/Programs.jsx`

### Program Details

Find the `programs` array around line 10:
```jsx
const programs = [
  {
    id: 'purpose-discovery',
    title: 'Purpose Discovery Hub',
    tagline: 'Uncover Your Unique Calling',
    description: 'A comprehensive program...',
    features: [
      'Personal purpose assessment',
      'One-on-one coaching',
      // ... more features
    ],
    duration: '8 Weeks',
    format: 'Hybrid (Online + In-Person)',
    ideal: 'Individuals seeking clarity...'
  },
  // ... more programs
];
```

For each program, update:
- `title`: Program name
- `tagline`: Short catchy phrase
- `description`: Full description
- `features`: Array of what participants get
- `duration`: How long the program runs
- `format`: Delivery method
- `ideal`: Who should join

### Adding a New Program

Copy an existing program object and modify:
```jsx
{
  id: 'new-program',  // Unique ID
  title: 'New Program Name',
  tagline: 'Your Tagline',
  description: 'Full description...',
  features: ['Feature 1', 'Feature 2'],
  duration: 'Duration',
  format: 'Format',
  ideal: 'Target audience'
}
```

## 👤 Founder Page Updates

**File**: `src/pages/Founder.jsx`

### Bio Content

Find around line 70:
```jsx
<p className="founder-bio__text">
  Temitope Momoh is a passionate advocate...
</p>
```

Update the four paragraphs with current bio information.

### Achievements Timeline

Find the `achievements` array around line 10:
```jsx
const achievements = [
  {
    year: '2015',
    title: 'Founded ASOR Culture International',
    description: 'Established the organization...'
  },
  // ... more achievements
];
```

Add or modify achievements in chronological order.

### Areas of Expertise

Find the `expertise` array around line 30:
```jsx
const expertise = [
  'Purpose Discovery & Life Coaching',
  'Personal Development & Transformation',
  // ... more areas
];
```

## 📞 Contact Page Updates

**File**: `src/pages/Contact.jsx`

### Contact Information

Find around line 30:
```jsx
const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'info@asorculture.org',
    link: 'mailto:info@asorculture.org'
  },
  // ... more contact info
];
```

Update:
- `value`: Display text
- `link`: Actual link (mailto:, tel:, etc.)

### Office Hours

Find around line 140:
```jsx
<div className="hours-item">
  <span>Monday - Friday</span>
  <span>9:00 AM - 5:00 PM</span>
</div>
```

## 🎨 Adding Images

### Current Setup

All sections have image placeholders that look like:
```jsx
<div className="image-placeholder">
  [Image Placeholder]
</div>
```

### Adding Real Images

1. **Add image to project**
   - Create `src/assets/images/` folder
   - Add your image file (e.g., `hero-image.jpg`)

2. **Import image in component**
   ```jsx
   import heroImage from '../assets/images/hero-image.jpg';
   ```

3. **Replace placeholder**
   ```jsx
   // Before:
   <div className="image-placeholder">
     [Hero Image]
   </div>

   // After:
   <img src={heroImage} alt="Description" />
   ```

### Image Best Practices

- **Format**: Use JPG for photos, PNG for graphics, WebP for best compression
- **Size**: Optimize images before uploading
  - Hero images: 1920x1080px max
  - Profile images: 800x800px max
  - Program cards: 600x400px max
- **File size**: Keep under 500KB each
- **Alt text**: Always include descriptive alt text

### Example: Home Page Hero

```jsx
import heroImage from '../assets/images/hero-background.jpg';

// In the component:
<section 
  className="hero" 
  style={{backgroundImage: `url(${heroImage})`}}
>
  {/* existing content */}
</section>
```

## 🎯 Navigation Updates

**File**: `src/components/Header.jsx`

Find around line 20:
```jsx
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/programs', label: 'Programs' },
  { path: '/founder', label: 'Founder' },
  { path: '/contact', label: 'Contact' },
];
```

To add a new page:
1. Add to this array
2. Create the page component
3. Add route in `App.jsx`

## 🔗 Footer Updates

**File**: `src/components/Footer.jsx`

### Organization Description

Find around line 15:
```jsx
<p className="footer__description">
  Transforming lives through purpose discovery...
</p>
```

### Social Media Links

Find around line 50:
```jsx
<a href="#facebook" aria-label="Facebook">
```

Replace `#facebook` with actual URLs.

## 🎨 Color Updates

**File**: `src/styles/global.css`

Find around line 5:
```css
:root {
  --color-primary: #66345C;
  --color-secondary: #CEB031;
  --color-accent: #C3AD4F;
  --color-dark: #512F4A;
}
```

Change hex codes to update colors site-wide.

## ✍️ Font Updates

**File**: `index.html` and `src/styles/global.css`

1. **Choose fonts from Google Fonts**
   - Go to [fonts.google.com](https://fonts.google.com)
   - Select fonts
   - Copy embed code

2. **Update index.html**
   ```html
   <link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
   ```

3. **Update global.css**
   ```css
   :root {
     --font-display: 'YourFont', serif;
     --font-body: 'YourFont', serif;
     --font-accent: 'YourFont', sans-serif;
   }
   ```

## 📋 Common Tasks

### Update Button Text

Search for `<Button` in any file and update the text between tags:
```jsx
<Button variant="primary">
  Your New Text Here
</Button>
```

### Update Form Fields

**File**: `src/pages/Contact.jsx`

Find around line 140:
```jsx
<option value="program-inquiry">Program Inquiry</option>
```

Add or modify options as needed.

### Update Footer Copyright

**File**: `src/components/Footer.jsx`

Find around line 80:
```jsx
<p className="footer__copyright">
  © {currentYear} ASOR Culture International. All rights reserved.
</p>
```

## 🔄 Testing Changes

After making changes:

1. **Save the file**
2. **Check your browser** - Changes should appear automatically
3. **If not, refresh** the page
4. **Test on mobile** - Use browser developer tools

## 🆘 Common Issues

### Text Not Updating

- **Issue**: Saved changes don't appear
- **Solution**: 
  - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
  - Stop and restart dev server: `npm run dev`

### Broken Layout

- **Issue**: Layout looks broken after changes
- **Solution**: Check for:
  - Missing closing tags: `</div>`, `</p>`
  - Missing quotes: `className="..."`
  - Typos in className values

### Image Not Showing

- **Issue**: Image placeholder still showing
- **Solution**: 
  - Check file path is correct
  - Check import statement at top of file
  - Ensure image file exists in project

## 💡 Pro Tips

1. **Make backups**: Copy file content before major changes
2. **Test in stages**: Update one section at a time
3. **Use search**: Ctrl+F to find specific text quickly
4. **Comments**: Add comments to remember what you changed
   ```jsx
   {/* Updated contact email - Jan 2024 */}
   ```
5. **Git commits**: Commit after each major change
   ```bash
   git add .
   git commit -m "Updated about page content"
   ```

## 📚 Need Help?

- Check the main README.md for technical setup
- See DEPLOYMENT.md for publishing changes
- Contact your developer for complex changes

---

**Remember**: Always test changes locally before deploying to production!
