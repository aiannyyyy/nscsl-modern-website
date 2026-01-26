# Newborn Screening Center Southern Luzon - Modern Website

A modern React-based website for the Newborn Screening Center (NSC) Southern Luzon, featuring interactive maps, dark mode support, and comprehensive facility information.

## 📋 Overview

This is a responsive, feature-rich web application built with React and TypeScript, providing comprehensive information about newborn screening services, facilities, and resources for the Southern Luzon region.

## 🏗️ Technical Architecture

### Frontend Stack
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Build Tool**: Vite (modern bundler)
- **Routing**: React Router DOM
- **UI Components**: Lucide React (icons)
- **Data Visualization**: Recharts
- **State Management**: React Context API

### Key Technologies
- **Maps Integration**: Google Maps Embed API
- **Geocoding**: OpenCage Geocoding API
- **CSV Parsing**: Native JavaScript with custom parser
- **Theme Management**: React Context with localStorage persistence
- **Responsive Design**: Mobile-first Tailwind CSS approach

## 📁 Project Structure

```
src/
├── components/
│   ├── about/
│   │   ├── tabs/
│   │   │   ├── AboutTab.tsx          # About section content
│   │   │   ├── FacilitiesTab.tsx     # Facilities search & maps
│   │   │   ├── FAQTab.tsx            # Frequently asked questions
│   │   │   └── WhyScreenTab.tsx      # Why screening matters (table)
│   │   ├── modals/
│   │   │   └── AboutModal.tsx        # Extended about info modal
│   │   └── AboutTabs.tsx             # Tab navigation container
│   ├── home/
│   │   ├── BlogSection.tsx           # Blog posts with modals
│   │   ├── ContactSection.tsx        # Contact form section
│   │   ├── HeroSection.tsx           # Hero carousel
│   │   ├── JobPostings.tsx           # Job listings
│   │   ├── MissionSection.tsx        # Mission & vision cards
│   │   ├── PartnersSection.tsx       # Partner organizations
│   │   ├── StoriesSection.tsx        # Success stories
│   │   └── TestimonialSection.tsx    # Quote testimonial
│   ├── layout/
│   │   ├── Footer.tsx                # Footer with contact info
│   │   ├── Layout.tsx                # Main layout wrapper
│   │   └── Navbar.tsx                # Navigation bar
│   ├── modals/
│   │   └── AboutModal.tsx            # Reusable modal component
│   ├── Preloader.tsx                 # Page loading animation
│   └── Watermark.tsx                 # Background watermark
├── context/
│   └── ThemeContext.tsx              # Dark/light mode context
├── pages/
│   ├── About.tsx                     # About page with tabs
│   └── Home.tsx                      # Home page
├── utils/
│   └── geocodingService.ts           # Geocoding utilities
├── App.tsx                           # Root component
├── main.tsx                          # React entry point
└── App.css                           # Global styles
```

## 🎨 Component Architecture

### Page Components
- **Home** - Landing page with multiple sections
- **About** - Tabbed interface with 4 sections

### Section Components
Each section is independently styled with dark mode support:
- Hero carousel with navigation
- Mission/Vision feature cards
- Blog grid with modal details
- Testimonial quote block
- Stories carousel
- Contact form section
- Partner logos grid
- Job postings placeholder
- Footer with multi-column layout

### Layout Components
- **Navbar** - Fixed header with mobile menu, theme toggle
- **Footer** - Contact info, social links, office details
- **Layout** - Root wrapper combining Navbar, content, Footer

### Shared Components
- **Watermark** - Fixed background logo (reusable across pages)
- **Preloader** - Initial page load animation
- **Modals** - About modal for extended content

## 🎭 Dark Mode Implementation

### Theme Context
- Centralized dark/light mode state management
- Stores preference in localStorage
- Provides `isDark` boolean and `toggleTheme` function
- Applied to all components via conditional Tailwind classes

### Color Scheme
- **Light Mode**: Blue primary (#063FA1), white backgrounds
- **Dark Mode**: Dark gray backgrounds (gray-800/900), yellow accents (#F27D0C)
- **Smooth Transitions**: All color changes use `duration-300` for visual polish

## 📊 Data Management

### CSV-Based Facilities Data
- Facilities stored in CSV format per province (CAVITE, LAGUNA, BATANGAS, RIZAL, QUEZON)
- Custom CSV parser converts to Facility objects
- Real-time search filtering against facility names
- Latitude/longitude coordinates for map integration

### State Management
- React hooks (useState, useEffect) for local component state
- Context API for global theme state
- No external state management library needed

## 🗺️ Maps Integration

### Google Maps Features
- Custom embed URLs with map IDs for pre-marked locations
- Province-specific maps show all facilities
- Search functionality switches to direct Google Maps search
- Search results displayed with zoom level control
- Responsive iframe container

### Search Functionality
- Local CSV data filtering for facility list
- Google Maps embed for visual location display
- Search notice with "Back to Province Map" button
- Search query persists until manually cleared

## 🎯 Key Features

### Responsive Design
- Mobile-first Tailwind approach
- Grid layouts adapt from 1 to 2-3 columns
- Touch-friendly buttons and inputs
- Responsive typography with lg breakpoints

### Interactive Elements
- Expandable accordions (FAQs)
- Image carousels (Hero, Stories)
- Modal dialogs (Blog, About)
- Hover effects and smooth transitions
- Tab navigation (About page)

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Focus indicators on buttons
- Color contrast meets WCAG standards

## 🔄 Component Communication Flow

```
App
├── ThemeProvider (Context)
│   └── Router
│       └── Layout
│           ├── Navbar (toggleTheme)
│           ├── Preloader
│           ├── Routes
│           │   ├── Home
│           │   │   ├── HeroSection
│           │   │   ├── StoriesSection
│           │   │   ├── MissionSection
│           │   │   ├── BlogSection
│           │   │   ├── TestimonialSection
│           │   │   ├── JobPostings
│           │   │   └── ContactSection
│           │   └── About
│           │       └── AboutTabs
│           │           ├── AboutTab
│           │           ├── FacilitiesTab
│           │           ├── WhyScreenTab
│           │           └── FAQTab
│           └── Footer
└── Watermark (fixed background)
```

## 🎨 Styling Approach

### Tailwind CSS Classes
- Utility-first CSS framework
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Dark mode prefix: `dark:` (controlled via context)
- Custom colors: `#063FA1` (blue), `#F27D0C` (orange)
- Transitions: `transition-all duration-300` for smooth animations

### Reusable Style Patterns
- Conditional classes based on `isDark` state
- Consistent spacing using Tailwind scale
- Unified hover and focus states
- Gradient backgrounds for visual interest

## 📱 Performance Considerations

### Optimization Techniques
- Lazy loading for images and iframes
- Code splitting via React Router
- CSV data loaded on-demand per province
- Efficient re-renders with proper hooks usage
- Minimal bundle size with Vite

### Responsiveness
- Max-width container (max-w-5xl) for content constraints
- Flexible grid layouts
- Mobile-optimized navigation with hamburger menu
- Touch-friendly interface elements

## 🔐 Data Security

### No Sensitive Data Storage
- All data is publicly displayed information
- CSV files contain facility locations and names
- Contact information is published on site
- Theme preference stored locally in browser

### API Keys
- OpenCage API key in environment variables
- Google Maps uses embed URLs (no sensitive key exposure)
- All external APIs accessed securely via HTTPS

## 🚀 Production Ready Features

- ✅ Mobile responsive design
- ✅ Dark/light mode support
- ✅ SEO-friendly structure
- ✅ Accessibility compliance
- ✅ Smooth animations and transitions
- ✅ Error handling for failed data loads
- ✅ Loading states for async operations
- ✅ Fallback content for unavailable maps/data

## 📊 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Last Updated**: January 2026