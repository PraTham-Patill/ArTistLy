# 🎭 ArTistLy – Performing Artist Booking Platform

ArTistLy is a performing artist booking platform that connects Event Planners with Artist Managers through a responsive web interface. It allows event planners to browse artists and send booking requests, while artist managers can onboard and manage talent.

---

## 🚀 Tech Stack

* **Framework:** Next.js 13+ (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **UI:** ShadCN UI
* **Forms:** React Hook Form + Zod
* **Animations:** Framer Motion
* **Theme:** Next-Themes
* **Icons:** Lucide React
* **Deployment:** Vercel

---

## 📄 Key Pages

### 🏠 Homepage

* Hero section with CTA
* Artist category cards (Singers, Dancers, Speakers, DJs)
* Responsive navigation

### 🎨 Artist Listing Page

* Grid layout of artist cards (Name, Category, Price, Location, CTA)
* Filters: Category, Location, Price Range
* Real-time search by name or bio
* Mobile-optimized filter drawer

### 📝 Artist Onboarding Form

* Fields: Name, Bio, Category, Languages, Fee, Location, Profile Image
* Validation using React Hook Form and Zod
* Controlled components with error feedback
* Data submission to mock API

### 📋 Manager Dashboard 

* Table of artist submissions
* Columns: Name, Category, City, Fee, Action
* Static/mock data with sorting/filtering

---

## 📱 Responsive Design

* Mobile-first approach using Tailwind breakpoints
* Drawer-based filter UI on small screens
* Adaptive layout and navigation

---

## ⚙️ Features

* `useState`, `useEffect`, `useContext` for logic and state
* Custom hooks and reusable components
* Controlled form handling with error display
* Semantic HTML with SEO metadata
* ARIA attributes and accessibility practices
* Performance optimizations (lazy loading, image optimization)

---

## 🔧 Getting Started

```bash
git clone https://github.com/PraTham-Patill/ArTistLy
cd ArTistLy
npm install
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment

* Deployed on Vercel via GitHub integration
* Auto-deploys on push to `main` branch
* No environment variables required
* Optional custom domain support

---

Made By Pratham Patil
**ArTistLy** – Connecting talent with opportunity. 🎭✨
