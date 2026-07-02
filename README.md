# Urban Pulse Investments (Pty) Ltd

A modern, responsive company website for Urban Pulse Investments — a registered, multi-disciplinary Swazi company delivering quality goods, construction services, and professional procurement solutions across the Kingdom of Eswatini.

---

## Recent Changes

### Hero Section Updates
- **New SVG Background**: Replaced the original hero background image with a custom SVG illustration (`images/svg (1).svg`) that covers the entire hero section.
- **Removed Overlays**: Removed old `hero-bg.jpg` dependency and hero overlay gradient for a cleaner look.
- **Preserved CTAs**: Kept the call-to-action buttons ("Explore our services" and "Request a quote") fully functional!

---

## Folder Structure

```
urban-pulse-investments/
├── index.html          # Main HTML page
├── css/
│   └── style.css       # All styles (design, layout, responsive)
├── js/
│   └── main.js         # Navigation, scroll effects, lightbox
├── images/             # Upload your images here (see below)
└── README.md           # This file
```

---

## Images You Need to Upload

The following images must be added to the `images/` folder before uploading to GitHub. The HTML references these files by name — make sure your uploaded images match the filenames below exactly.

| Filename | Used For | Recommended Size |
|---|---|---|
| `logo.png` | Navigation logo & footer logo | 200 x 200 px (square, transparent background) |
| `hero-bg.jpg` | Full-screen hero background | 1920 x 1080 px |
| `about.jpg` | About section — left side image | 800 x 1000 px (portrait) |
| `gallery-1.jpg` | Gallery — Site preparation | 800 x 600 px |
| `gallery-2.jpg` | Gallery — Foundation works | 600 x 600 px |
| `gallery-3.jpg` | Gallery — JCB earthworks | 600 x 800 px (portrait) |
| `gallery-4.jpg` | Gallery — Rock clearance | 600 x 800 px (portrait) |
| `gallery-5.jpg` | Gallery — Earthworks monitoring | 600 x 600 px |
| `gallery-6.jpg` | Gallery — Tank inspection | 600 x 600 px |
| `gallery-7.jpg` | Gallery — Highland site | 600 x 600 px |
| `gallery-8.jpg` | Gallery — Materials supply | 600 x 600 px |
| `delivery-video.mp4` | Deliveries section — featured video | 720p, max 10MB |
| `delivery-1.jpg` | Deliveries — Brassia truck | 800 x 600 px |
| `delivery-2.jpg` | Deliveries — Canon copier | 800 x 600 px |
| `delivery-3.jpg` | Deliveries — On-site unpacking | 800 x 600 px |
| `delivery-4.jpg` | Deliveries — Careful offloading | 800 x 600 px |
| `delivery-5.jpg` | Deliveries — Loaded bakkie | 800 x 600 px |
| `director-1.jpg` | Directors — Qiniso Ntsika Dlamini | 400 x 500 px (portrait) |
| `director-2.jpg` | Directors — Ntombi Natasha Maziya | 400 x 500 px (portrait) |
| `contact.jpg` | Contact section background | 800 x 1000 px (portrait, dark for overlay) |

### Image Tips

- **File format**: JPG/JPEG for photos, PNG for the logo (transparent background preferred)
- **File names are case-sensitive** — use lowercase exactly as shown
- For best performance, compress JPGs to under 200KB each using a tool like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- The video file should be compressed (HandBrake is a good free tool)
- All photos should be high quality — they appear full-bleed in the design

---

## How to Deploy on GitHub Pages (Free Hosting)

### Step 1: Upload Images
1. Copy all your image files into the `images/` folder
2. Verify all filenames match the table above exactly

### Step 2: Create a GitHub Repository
1. Go to [github.com](https://github.com) and log in
2. Click **New Repository** (green button)
3. Name it: `urban-pulse-investments`
4. Make it **Public**
5. Click **Create repository**

### Step 3: Upload the Files
**Option A — GitHub Web Interface (easiest):**
1. In your new repo, click **"uploading an existing file"**
2. Drag and drop the entire folder contents (index.html, css/, js/, images/)
3. Make sure the folder structure is preserved (css/style.css, js/main.js, images/...)
4. Add a commit message: `Initial upload`
5. Click **Commit changes**

**Option B — Command Line (for developers):**
```bash
cd urban-pulse-investments
git init
git remote add origin https://github.com/YOUR_USERNAME/urban-pulse-investments.git
git add .
git commit -m "Initial upload"
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. In your repo, go to **Settings** tab
2. Click **Pages** in the left sidebar
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/(root)** folder
5. Click **Save**
6. Wait 1-2 minutes, then visit:
   ```
   https://YOUR_USERNAME.github.io/urban-pulse-investments/
   ```

---

## Customising the Content

### Edit Text Content
Open `index.html` in any text editor (VS Code, Notepad++, Sublime Text) and edit the text directly. Look for these sections:

- **Hero section** — Main headline and tagline
- **About section** — Company description
- **Services section** — Service descriptions and lists
- **Vision/Mission/Values** — Company principles
- **Who We Serve** — Client types
- **Directors** — Bio text
- **References** — Contact details
- **Compliance** — Registration details
- **Contact** — Phone, email, address
- **Footer** — Copyright and social links

### Update Social Media Links
In the footer, replace the `#` with your actual social media URLs:
```html
<a href="https://facebook.com/yourpage">Facebook</a>
<a href="https://linkedin.com/company/yourcompany">LinkedIn</a>
<a href="https://twitter.com/yourhandle">Twitter / X</a>
```

### Change Colours (Optional)
Open `css/style.css` and edit the CSS variables at the top:
```css
:root {
  --navy: #0d1b2a;       /* Dark background */
  --orange: #e07b2e;     /* Accent / brand colour */
  --cream: #faf8f5;      /* Page background */
  --warm: #f0ebe3;       /* Section background */
  --gray: #7a8494;       /* Body text secondary */
}
```

---

## Browser Compatibility

- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Features

- Fully responsive (desktop, tablet, mobile)
- Smooth scroll navigation
- Mobile hamburger menu
- Lightbox image viewer for delivery photos
- Video showcase section
- Animated hover effects
- Accessibility-friendly (keyboard navigation, focus states, reduced-motion support)
- Fast loading — external fonts and icons loaded from CDN

---

## Need Help?

If something isn't working after uploading:
1. Check that all image filenames match exactly (case-sensitive)
2. Open the browser's developer tools (F12) and check the Console for errors
3. Make sure the folder structure is preserved on GitHub (css/, js/, images/ as subfolders)
4. Verify GitHub Pages is enabled in your repository settings

---

**Urban Pulse Investments (Pty) Ltd**
Mbabane, Eswatini
