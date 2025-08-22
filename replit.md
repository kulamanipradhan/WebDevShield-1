# Overview

This is a full-stack portfolio website for a cybersecurity engineer and web developer. The application showcases professional experience, skills, projects, and includes a contact form for potential clients or employers. It's built as a modern single-page application with a cybersecurity theme, featuring a dark/light mode toggle and responsive design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with a custom cybersecurity theme featuring cyber-green (#00FF88) and cyber-blue (#00D4FF) accent colors
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Production Build**: ESBuild for fast bundling and compilation

## Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless driver for cloud deployment
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Shared schema definitions between client and server using Drizzle-Zod for validation
- **Development Storage**: In-memory storage implementation for development/testing
- **Migration**: Drizzle Kit for database schema migrations

## Authentication and Authorization
- **Current State**: No authentication system implemented
- **Contact System**: Open contact form without user authentication
- **Session Management**: Connect-pg-simple configured for PostgreSQL session storage (ready for future auth implementation)

## Design Patterns
- **Monorepo Structure**: Unified codebase with shared types and schemas
- **Component-Based UI**: Modular React components with consistent design system
- **API Layer**: RESTful API with centralized error handling and request/response logging
- **Type Safety**: End-to-end TypeScript with shared interfaces between frontend and backend
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## Development Experience
- **Hot Reload**: Vite HMR for instant development feedback
- **Error Handling**: Runtime error overlay for development debugging
- **Code Quality**: TypeScript strict mode and ESLint-ready configuration
- **Path Aliases**: Configured import aliases for clean code organization

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Environment**: DATABASE_URL environment variable for database connectivity

## UI and Styling
- **Radix UI**: Accessible component primitives for dialogs, dropdowns, and form elements
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Google Fonts**: Inter and JetBrains Mono for typography
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Replit Integration**: Cartographer plugin for Replit environment development
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Date-fns**: Date manipulation and formatting utilities

## Build and Runtime
- **Vite**: Development server and build tool with React plugin
- **Express**: Web server framework with JSON parsing and static file serving
- **TanStack Query**: Data fetching and caching library for React

## Validation and Forms
- **Zod**: Schema validation for API requests and form data
- **React Hook Form**: Form state management with Hookform resolvers
- **Drizzle-Zod**: Integration between Drizzle ORM and Zod validation

## Contact Form Integration
- **Current**: Server-side logging of contact submissions
- **Future Ready**: Structured for email service integration (Nodemailer, SendGrid, etc.)