# VIS Academy — Velocity International STEM Academy

This repository is a starter scaffold for the VIS Academy marketing and learning site built with Vite + React + Tailwind CSS.

Live deployment instructions (Vercel)

1. Import this repository into Vercel (vercel.com) using GitHub.
2. Set the following Environment Variables in your Vercel project settings:
   - VITE_SUPABASE_URL = https://ccmcomoyzqfsbfpvmumb.supabase.co
   - VITE_SUPABASE_ANON_KEY = <your-supabase-anon-key>
   - VITE_PAYSTACK_PUBLIC_KEY = <your-paystack-public-key> (optional)
   - SITE_CONTACT_EMAIL = support@visacademy.com
3. Build & Deploy. Vercel will run `npm run build` and publish the site.

Local development

1. npm install
2. Copy `.env.example` to `.env` and fill in your keys
3. npm run dev
4. Open http://localhost:5173

Notes
- No secret keys are committed to this repo. Add keys to Vercel or your local .env only.
- This scaffold includes pages and components for Landing, Courses, Course detail, Learn page, Student & Instructor dashboards, and Admin.
