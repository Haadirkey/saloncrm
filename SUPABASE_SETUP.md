# Supabase Project Configuration

## Project Details
- **Project Name:** salon-crm
- **Project ID:** gaxzccmnrljgzgshtenp
- **Region:** eu-north-1
- **Status:** ACTIVE_HEALTHY
- **Database Host:** db.gaxzccmnrljgzgshtenp.supabase.co
- **PostgreSQL Version:** 17.6.1.038

## API Configuration
- **API URL:** https://gaxzccmnrljgzgshtenp.supabase.co
- **Anon Key:** (See .env.local file)

## Environment Variables

Create a `.env.local` file in the root directory with:

```
NEXT_PUBLIC_SUPABASE_URL=https://gaxzccmnrljgzgshtenp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdheHpjY21ucmxqZ3pnc2h0ZW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2MzA4MDcsImV4cCI6MjA3ODIwNjgwN30.CGSVsvCPZaqttlu7MBS3uTmQ8TD4WDftPawmpij6xLc
```

## Authentication

Supabase Auth is enabled by default. The following features are available:
- Email/Password authentication
- User signup and login
- Session management
- Protected routes

## Next Steps

1. Ensure `.env.local` file exists with the credentials above
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Test authentication by signing up a new user at `/signup`
5. Login at `/login` and access the admin dashboard at `/admin`

