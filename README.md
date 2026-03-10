# 🤖 Teku AI - Custom AI Agents & Automations

**Teku AI** is a boutique agency specializing in designing and implementing Artificial Intelligence ecosystems that scale businesses. This repository contains the official website and the proprietary **Design System** developed for the brand.

---

### 🚀 Tech Stack

We chose a lightweight, modern architecture focused on **Core Web Vitals** and a superior user experience:

- **SSG:** [Eleventy (11ty)](https://www.11ty.dev/) for ultra-fast static HTML delivery and SEO optimization.
- **Interactivity:** [Alpine.js](https://alpinejs.dev/) for minimalist reactivity without the overhead of heavy frameworks.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with a custom design token configuration.
- **Templating:** [Nunjucks](https://mozilla.github.io/nunjucks/) for advanced modular componentization (DRY principle).

### 🎨 Design System: "Minimalist Futurism"

The project uses a visual system based on **Glassmorphism**, focusing on depth, transparency, and neon illumination.

- **Typography:** `Space Grotesk` (Geometric Headings) & `Inter` (Legible Body).
- **Featured Components:**
  - **Locale Toggle:** Instant language switcher (EN/PT) with PNG flags and a minimalist circular design.
  - **Infinite Tech Marquee:** Double-row scrolling carousel with edge-fade masks and "pause on hover."
  - **Video Portfolio Cards:** 16:9 optimized cards with custom glassmorphism play-overlays.
  - **Sticky Interface:** A smart floating language switcher that appears dynamically during scrolling.
  - **Custom Scrollbar:** A thin, themed scrollbar with a cyan glow effect.

### 🛠️ Solutions & Expertise

Our services focus on technical excellence and business impact:

- **AI Custom Systems:** Tailored end-to-end automations built with `n8n` or `Make.com` to eliminate manual bottlenecks.
- **AI Voice Agents:** Natural-sounding conversational AI for customer support and appointment booking.
- **Strategic AI Audits:** Comprehensive analysis of your current business workflows to identify high-ROI AI opportunities.
- **Workflow Integration:** Seamlessly connecting your favorite tools (Slack, Airtable, Stripe, CRM) with the latest LLMs (GPT-4, Claude 3.5).

### 🏗️ Project Structure

```text
src/
├── _includes/
│   ├── components/   # Modular HTML blocks (Navbar, Footer, Cards)
│   └── layouts/      # Base templates (Base.njk)
├── assets/
│   ├── css/          # Tailwind directives & Custom animations
│   ├── js/           # Alpine.js logic and global scripts
│   └── img/          # Logos, brand assets, and flag PNGs
└── index.njk         # Main entry point with dynamic content sections
```

### 💻 Getting Started

**Prerequisites**

Make sure you have [Node.js](https://nodejs.org/en) installed on your machine.

**Installation**

1. Clone the repository
   ```bash
   git clone https://github.com/kelciocajueiro/teku-ai.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```
**Development**

Start the local development server (Eleventy + Tailwind Watcher):

   ```bash
   npm run dev
   ```
**Build**

Generate the optimized production version:

   ```bash
   npm run build
   ```

### 📄 License

This project is licensed under the **MIT** License. See the ```LICENSE``` file for details.

<p>
Built with ❤️ by the <strong>Teku AI</strong> team
</p>
