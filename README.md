# Portfolio

Personal portfolio website for Hank Linder showcasing skills in economics, data analytics, and product development.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured to deploy automatically to Vercel when you push to the main branch.

## Customization Guide

### Key Files to Edit

#### 1. **Headshot Photo**
- **Location**: `/public/images/headshot.jpg`
- **How to update**: Replace the existing file with your professional photo
- **Recommended size**: Square aspect ratio (1:1), at least 800x800px

#### 2. **Projects Data**
- **Location**: `/data/projects.ts`
- **What to edit**: Add, remove, or modify project entries in the `projects` array
- **Fields to update**:
  - `title`, `summary`, `description`
  - `problem`, `solution`, `impact`
  - `techStack` (array of technologies)
  - `liveUrl`, `githubUrl` (use `#` as placeholder if not available)
  - `featured` (boolean to show on homepage)

#### 3. **Books & Thinkers**
- **Books**: `/data/books.ts` - Edit the `books` array
- **Thinkers**: `/data/thinkers.ts` - Edit the `thinkers` array
- Add or remove entries as needed

#### 4. **Skills**
- **Location**: `/data/skills.ts`
- Edit the `skills` array to update skill categories and items

#### 5. **About Page Content**
- **Location**: `/app/about/page.tsx`
- Edit the bio paragraphs and timeline items
- Update the "What I'm Looking For" section

#### 6. **Contact Information**
- **Location**: 
  - `/components/Footer.tsx` (footer email)
  - `/app/contact/page.tsx` (contact page)
- Update email addresses and social media links

#### 7. **Resume PDF**
- **Location**: `/public/resume.pdf`
- Replace the placeholder with your actual resume PDF
- The `/resume` route will automatically redirect to this file

#### 8. **Homepage Stats**
- **Location**: `/app/page.tsx`
- Edit the `stats` array in the Hero section to update the numbers

#### 9. **SEO Metadata**
- **Location**: `/app/layout.tsx`
- Update the `metadata` object with your information

## Project Structure

```
Portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects listing page
│   ├── resume/            # Resume redirect route
│   ├── layout.tsx         # Root layout with Navbar/Footer
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── SectionHeader.tsx
│   └── Tag.tsx
├── data/                  # Data files (easy to edit)
│   ├── books.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── thinkers.ts
└── public/                # Static assets
    ├── images/
    │   └── headshot.jpg   # Your professional photo
    └── resume.pdf         # Your resume PDF
```

## Technologies Used

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React**

## Features

- ✅ Responsive design (mobile-first)
- ✅ Sticky navigation with mobile hamburger menu
- ✅ SEO optimized with metadata
- ✅ Accessible (ARIA labels, focus states)
- ✅ Smooth hover animations and transitions
- ✅ Professional, minimal design
- ✅ Easy to customize via data files

## Notes

- All placeholder links use `#` - replace with actual URLs when available
- Email addresses are set to `hanklinder@example.com` - update to your actual email
- LinkedIn URL is a placeholder - update with your actual profile
- The resume PDF is a placeholder - replace with your actual resume
