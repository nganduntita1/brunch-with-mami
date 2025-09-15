# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

### Development Server
The development server runs on port 8080 and is configured to be accessible from all network interfaces (`::` binding).

## Project Architecture

### Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query) for server state
- **Database**: Supabase (PostgreSQL)
- **Form Handling**: React Hook Form with Zod validation

### Application Structure
```
src/
├── components/        # Reusable UI components
├── pages/            # Route-based page components
├── contexts/         # React contexts (AuthContext)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── integrations/     # External service integrations
├── assets/           # Static images and assets
└── types/            # TypeScript type definitions
```

### Key Components
- **NavBar**: Main navigation with mobile responsive design
- **HeroSection**: Landing page hero with custom animations
- **MasterclassSection**: Event/course promotion section
- **BlogPostForm**: Content management for blog posts
- **AdminLogin**: Authentication for admin features
- **InstagramFeed**: Social media integration

### Design System
The application uses a custom design system with:
- **Fonts**: Playfair Display (serif), Montserrat (sans-serif), The Seasons (custom serif)
- **Colors**: Custom "agenda" color palette with pink (#F8E9EB), dark (#1A1A1A), light (#F7EDE8), gray (#8A8A8A)
- **Animations**: Custom fade-in animations and Tailwind animate plugin

### Database Integration
- Uses Supabase as the backend database
- Configuration in `supabase/config.toml`
- Client setup in `src/integrations/supabase/client.ts`
- Type definitions in `src/integrations/supabase/types.ts`

### Routing Structure
- `/` - Home page (Index)
- `/about` - About page
- `/blog` - Blog listing and admin interface
- `/blog/:id` - Individual blog post
- `/events` - Events and courses
- `/shop` - Shop with admin interface
- `/shop/admin` - Shop administration

### Authentication
- Context-based authentication system (`AuthContext`)
- Admin panels for blog and shop management
- Protected routes for administrative functions

### Development Patterns
- Component-based architecture with TypeScript
- Custom hooks for reusable logic
- React Query for server state management
- Form validation using Zod schemas
- Responsive design with Tailwind mobile-first approach

## Project-Specific Guidelines

### Component Development
- All components are in TypeScript (.tsx files)
- Use the established design system colors and fonts
- Follow the mobile-first responsive design pattern
- Utilize Radix UI primitives for accessible components

### Styling Conventions
- Use Tailwind classes with the custom color palette
- Custom fonts: `font-playfair`, `font-montserrat`, `font-seasons`
- Custom colors available as `agenda-pink`, `agenda-dark`, `agenda-light`, `agenda-gray`
- Use `@` alias for imports from the src directory

### State Management
- Use React Query for server state and data fetching
- Use React Context for global application state (authentication)
- Local component state for UI-specific state

### File Organization
- Page components in `/pages` directory
- Reusable components in `/components` directory
- Custom hooks in `/hooks` directory
- Utilities in `/lib` directory
- Type definitions in `/types` directory

### Image Handling
- Images stored in `/src/assets` directory
- Vite config includes support for .JPG files in assetsInclude
- Use relative imports for images in components

### Development Tools
- ESLint configured with React and TypeScript rules
- Unused variables rule is disabled for development convenience
- Lovable Tagger plugin for component development tracking