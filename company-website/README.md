# NEXORA Technology - Company Website

A multi-page corporate website for **NEXORA Technology**, a technology and software consulting firm based in Sangli, Maharashtra.

Built with clean HTML5, custom Vanilla CSS, and modern JavaScript.

---

## 🌟 Pages & Architecture

1. **[Home (`index.html`)](./index.html)**
   - Hero header with localized badge and call-to-action buttons.
   - Live metrics bar (Projects Delivered, Satisfaction Rate, Support).
   - Service highlights with feature checklists.
   - Structured 3-step development roadmap (`Discover → Build → Deploy`).
   - Why NEXORA feature grid and conversion CTA banner.

2. **[About Us (`about.html`)](./about.html)**
   - Company background and origin story.
   - Distinct Mission & Vision value boxes.
   - Core company values (Integrity, Quality, Continuous Improvement).

3. **[Services (`services.html`)](./services.html)**
   - 6 comprehensive service cards (Web Development, Custom Software, UI Design, Database Solutions, API Integrations, Maintenance).
   - Technology stack pill grid (HTML5, CSS3, JavaScript, Node.js, Python, MySQL, REST APIs, Git).

4. **[Contact Us (`contact.html`)](./contact.html)**
   - Contact information card with office address, email, phone, and business hours.
   - Interactive contact form with real-time field validation and success confirmation.

---

## 📁 File Structure

```
company-website/
│
├── index.html          # Homepage
├── about.html          # About company & mission
├── services.html       # Service offerings & tech stack
├── contact.html        # Contact details & inquiry form
│
├── css/
│   └── style.css       # Design tokens, variables, typography & layout styles
│
└── js/
    └── script.js       # Mobile navigation toggle & client-side form validation
```

---

## 🎨 Design System & Highlights

- **CSS Variables (`:root`)**: Reusable color palette, shadows, spacing, and border radii.
- **Typography**: Integrated [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts.
- **Mobile-First Responsive Layout**: Smooth drawer navigation menu for screens under 768px.
- **Validation**: Real-time feedback for required fields, email formatting, and phone numbering with user-friendly error banners.

---

## 🚀 How to Run

No build step or external dependencies required. Simply open `index.html` in your favorite browser or use Live Server:

```bash
# Option 1: Double-click index.html in file explorer

# Option 2: Using any simple HTTP server
npx serve .
```
