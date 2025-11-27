# BongoCart

**Short description :**
BongoCart is a lightweight e-commerce prototype built with Next.js, where users can browse a collection of clothing products. After logging in, users can add new products, view detailed information, update or delete their own products, and manage all items they’ve posted.

---

## 🔗 Live Demo & Repository

🌐 **Live Website:** [https://bongo-cart-bd.vercel.app/](https://bongo-cart-bd.vercel.app/)
📦 **GitHub Repo:** [https://github.com/eistiakahmed/bongo-cart](https://github.com/eistiakahmed/bongo-cart)

[![Live on Vercel](https://img.shields.io/badge/Live%20On-Vercel-black?logo=vercel)](https://bongo-cart-bd.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/eistiakahmed/bongo-cart)
[![GitHub backend Repo](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/eistiakahmed/bongo-cart-backend.git)
[![Live Server](https://img.shields.io/badge/Live%20On-Vercel-black?logo=vercel)](https://bongo-cart.vercel.app/)

---

## Project Overview

BongoCart is a small e-commerce style web application implemented with Next.js and React. It demonstrates a typical product listing, creation, management, and detail-view workflow: users can browse all products, add new products (after authentication), view product details, and manage (update/delete) the products they added.

**Main pages**

- `Home` — Marketing / landing page with highlights and featured items.
- `All Products` — Grid/list view of all products with search and filter capability.
- `Add Product` — Auth-protected page to create a new product (title, price, description, image, category, etc.).
- `Manage Product` — Auth-protected area where users can view, edit, and delete their added products.

## Key Features

- Product listing with details page
- Authenticated product creation and management (Firebase used for authentication & hosting backend calls)
- Responsive UI using Tailwind / DaisyUI
- Client-side interactions with Axios for API calls
- Toast notifications for user feedback using `react-hot-toast`

## Tech Stack & Dependencies

- **Framework:** Next.js 16
- **UI:** React 19, Tailwind CSS, DaisyUI
- **Icons:** react-icons, lucide-react
- **State / Requests:** axios
- **Notifications:** react-hot-toast
- **Auth / Backend (example):** Firebase

Provided `package.json` dependencies (from the project):

```json
"dependencies": {
  "axios": "^1.13.2",
  "firebase": "^12.6.0",
  "lucide-react": "^0.554.0",
  "next": "16.0.4",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.5.0"
},
"devDependencies": {
  "@tailwindcss/postcss": "^4",
  "babel-plugin-react-compiler": "1.0.0",
  "daisyui": "^5.5.5",
  "eslint": "^9",
  "eslint-config-next": "16.0.4",
  "tailwindcss": "^4"
}
```

## Getting Started (Development)

> These steps assume you already have Node.js and npm installed.

1. Clone the repository

```bash
git clone https://github.com/eistiakahmed/bongo-cart.git
cd bongo-cart
```

2. Install dependencies

```bash
npm install
```

3. Add environment variables (example)

Create a `.env.local` at project root and add Firebase / API keys required by your app:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```


4. Run development server

```bash
npm run dev
# or
next dev
```

Open `http://localhost:3000` to view the app.

## Production Build

```bash
npm run build
npm run start
```

Or use your preferred deployment platform (Vercel, Netlify, Firebase Hosting, etc.). For Next.js 16 consider Vercel for best compatibility.

## Suggested Folder Structure

```
bongo-cart/
│
└── src/
    ├── app/                      # Next.js App Router
    │   ├── manageProduct/
    │   │   └── page.jsx
    │   │
    │   ├── product update/
    │   │   └── [id]/
    │   │       └── page.jsx     # Update Single Product
    │   │
    │   ├── products/
    │   │   ├── [details]/
    │   │   │   └── page.jsx     # Product Details Page
    │   │   └── page.jsx         # All Products Page
    │   │
    │   ├── register/
    │   │   └── page.jsx         # User Register/Login
    │   │
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.jsx
    │   └── page.jsx             # Home Page
    │
    ├── Components/
    │   ├── Banner.jsx
    │   ├── Features.jsx
    │   ├── Footer.jsx
    │   ├── Navbar.jsx
    │   ├── ProtectedRoute.jsx
    │   ├── SearchProduct.jsx
    │   └── Testimonials.jsx
    │
    ├── Context/
    │   ├── AuthContext.jsx
    │   └── AuthProvider.jsx
    │
    ├── Firebase/
    │   └── firebase.config.js
    │
    ├── hooks/
    │   └── useAxiosSecure.jsx
    │
    ├── Shared/
    │   ├── Button.jsx
    │   ├── Card.jsx
    │   └── Container.jsx
    │
    ├── .env.local
    ├── .gitignore
    ├── eslint.config.mjs
    ├── jsconfig.json

```

## Authentication & Backend

- This project references Firebase for authentication. Create a Firebase project, enable the desired sign-in methods (email/password, Google, etc.) and add the config to `.env.local`.
- The app uses an API backend (example `http://localhost:5000`) to store product data. You can replace it with Firebase Firestore, Supabase, or your own Node/Express server.

## UI / UX Notes

- Make pages responsive — use Tailwind utility classes and DaisyUI components.
- Each product card should include an image, title, price, short description and action buttons (view, edit, delete — edit/delete only for product owner).
- Use optimistic UI updates for a snappier feel (update the UI immediately while the network request runs).

## Scripts (example)

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## Testing & Quality

- Add ESLint and Prettier for consistent code style (ESLint already listed in devDependencies).
- Write unit tests for critical utilities and component rendering using a testing library (Jest + React Testing Library).

## Common Improvements / Next Steps

- Add pagination and server-side search for the All Products page.
- Implement role-based access control (admin vs regular users).
- Add image uploads (Firebase Storage or another cloud storage) with client-side resizing.
- Add payment integration (Stripe sandbox) if converting prototype to a real shop.

## Troubleshooting

- If you run into `404` or API errors, ensure your backend (`http://localhost:5000`) is running and CORS is enabled.
- If you cannot use `useState` inside Next.js route/server components, move stateful UI into client components (`'use client'`) or use the pages/app router appropriately.

## Contribution

If you want to contribute:

1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description

## Contact

**Author:** Eistiak Ahmed
📧 Email: [eistiakahmedmeraj@gmail.com](mailto:eistiakahmedmeraj@gmail.com)
🔗 GitHub: [https://github.com/eistiakahmed](https://github.com/eistiakahmed)

---
