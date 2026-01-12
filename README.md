# Uncle Nearest × HBCU Heroes Cocktail Challenge Website

A professional React and Node.js application for the Uncle Nearest × HBCU Heroes Cocktail Challenge campaign.

## Project Structure

```
HBCUheroeswebsite/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Application entry point
│   └── package.json
├── server/                 # Node.js backend
│   ├── server.js          # Express server
│   └── package.json
└── package.json           # Root package.json with scripts

```

## Features

- **Modern React Architecture**: Built with React 18 and Vite for fast development
- **Component-Based Design**: Reusable components following DRY principles
- **Responsive Design**: Mobile-first approach with breakpoints
- **Node.js Backend**: Express server ready for API integration
- **Professional Structure**: Organized codebase with separation of concerns

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install all dependencies (root, client, and server):
```bash
npm run install:all
```

Or install manually:
```bash
npm install
cd client && npm install
cd ../server && npm install
```

### Development

Run both frontend and backend concurrently:
```bash
npm run dev
```

Or run separately:
```bash
# Frontend (runs on http://localhost:3000)
npm run dev:client

# Backend (runs on http://localhost:5000)
npm run dev:server
```

### Build for Production

```bash
npm run build
```

This will create an optimized production build in `client/dist/`.

## Component Architecture

The application follows DRY (Don't Repeat Yourself) principles with reusable components:

### Core Components
- **Button**: Reusable button with variants (primary, secondary, tertiary)
- **Card**: Consistent card styling across the application
- **Container**: Responsive container with max-width
- **Section**: Page sections with consistent spacing
- **Grid**: Flexible grid layouts (2 or 3 columns)
- **SectionHeading**: Consistent section headers with eyebrow, title, and lead text

### Page Sections
- **Navigation**: Sticky navigation bar
- **Hero**: Landing section with trust indicators
- **Mission**: Mission statement and purpose
- **Impact**: Statistics and impact information
- **HowItWorks**: Step-by-step process explanation
- **WhereYourGiftGoes**: Donation tiers and impact areas
- **StudentStories**: Testimonials from students
- **ProvenPartnership**: Campaign history and results
- **Leadership**: Leadership team profiles
- **Partners**: Partner information and CTAs
- **Donate**: Donation section
- **Footer**: Site footer with links

## Styling

- CSS Variables for theming (defined in `src/index.css`)
- Component-scoped CSS files
- Responsive breakpoints at 980px and 520px
- Consistent design system with gold accent colors

## Backend API

The Express server is set up with:
- CORS enabled
- JSON body parsing
- Health check endpoint at `/api/health`

Future API endpoints can be added for:
- Donation processing
- Partner registration
- Contact form submissions
- Newsletter signups

## Image Assets

Place images in the `client/public/` directory. The following images are referenced:
- `hero-placeholder.jpg` - Hero background image
- `INC_3390-Edit.jpeg` - Fawn Weaver photo
- `dsc_5728 (4) (1).JPG` - George Lynch photo
- `C34168F5-536D-4022-9970-B68009FFDB5C (1).JPG` - Tracey Pennywell photo
- `student-placeholder.jpg` - Student testimonial placeholder
- `IMG_7121.jpg` - Payton Garcia photo
- `IMG_7124 (1).jpg` - Amir Long photo

## Notes

- Donation links are placeholders and should be replaced with actual Stripe/PayPal integration
- Partner form links are placeholders
- Email contact information should be updated in the Donate component

## License

ISC

