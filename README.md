# Salon CRM - Admin Panel

A modern admin panel with authentication built with Next.js, TypeScript, and Supabase.

## Features

- 🔐 User authentication (Login & Signup)
- 🛡️ Protected admin routes
- 🎨 Modern UI with Tailwind CSS
- ⚡ Built with Next.js 14 App Router
- 🔒 Secure authentication with Supabase Auth

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory with:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── admin/          # Protected admin dashboard
│   ├── login/          # Login page
│   ├── signup/         # Signup page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page (redirects)
│   └── globals.css     # Global styles
├── lib/
│   ├── supabase.ts     # Supabase client
│   └── auth.ts         # Authentication utilities
└── package.json
```

## Authentication Flow

1. **Signup**: Users can create an account with email and password
2. **Login**: Existing users can sign in with their credentials
3. **Protected Routes**: Admin pages check for authentication and redirect to login if not authenticated
4. **Session Management**: Uses Supabase Auth for secure session handling

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Supabase** - Backend as a service (Auth & Database)
- **Tailwind CSS** - Utility-first CSS framework

