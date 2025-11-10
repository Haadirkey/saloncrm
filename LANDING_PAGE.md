# Selvkia Landing Page

A beautiful, modern landing page for Selvkia - Beauty Without Boundaries, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

### 🎨 Design
- **Fonts**: Inter (primary) and Poppins (headings)
- **Color Scheme**: 
  - Light Green: `#E8F5E9`
  - Primary Green: `#4CAF50`
  - Dark Green: `#2E7D32`
  - Orange Accent: `#FF9800`
- **Modern UI**: Rounded corners, shadows, gradients

### ✨ Animations
- **Framer Motion**: Smooth animations and transitions
- **Scroll Animations**: Elements fade in as you scroll
- **Hover Effects**: Interactive hover states on cards and buttons
- **Header**: Sticky header with scroll-based background change

### 📱 Sections

1. **Header**
   - Sticky navigation bar
   - Logo with "S" icon
   - Navigation links (Home, Products, Services, Contact)
   - "For Businesses" button → Links to `/admin` dashboard
   - Login button → Links to `/login`

2. **Hero Section**
   - "High Quality Control" badge
   - Main heading: "Beauty Without Boundaries"
   - Descriptive text with highlighted keywords
   - CTA buttons: "Shop Now" and "Book Appointment"
   - Animated image containers

3. **Partners Section**
   - Scrolling partner logos
   - Light green background

4. **Find Trusted Salons & Spa**
   - Search bar with filters
   - Grid of salon cards (6 cards)
   - Each card shows: image, name, rating, hours, location
   - "View Now" and "Book Now" buttons
   - "Explore All" button

5. **Featured Products**
   - Product grid (6 products)
   - Product cards with images, names, prices
   - Favorite/heart button
   - Add to cart button
   - "New" and "Sale" badges
   - "Explore All" button

6. **Verification/Trust Section**
   - Large text about verification
   - Highlighted keywords: "safety, ethics, and sustainability"
   - Image on the right side

7. **Footer**
   - Company information
   - Quick links
   - Copyright information

## Components

All components are located in the `components/` directory:

- `Header.tsx` - Navigation header
- `Hero.tsx` - Hero section with CTA
- `Partners.tsx` - Partner logos section
- `SalonsSection.tsx` - Salons and spa listings
- `ProductsSection.tsx` - Featured products
- `VerificationSection.tsx` - Trust and verification section
- `Footer.tsx` - Footer with links

## Navigation

- **Home**: `/` - Landing page
- **Products**: `#products` - Scrolls to products section
- **Services**: `#services` - Scrolls to salons section
- **Contact**: `#contact` - Scrolls to footer
- **For Businesses**: `/admin` - Admin dashboard (requires authentication)
- **Login**: `/login` - Login page

## Responsive Design

The landing page is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Getting Started

The landing page is already set up and running. Visit:
- **Local**: http://localhost:3000
- The page automatically loads when you start the dev server

## Customization

### Colors
Edit `tailwind.config.js` to change colors:
```javascript
colors: {
  primary: {
    light: '#E8F5E9',
    DEFAULT: '#4CAF50',
    dark: '#2E7D32',
    darker: '#1B5E20',
  },
  accent: {
    orange: '#FF9800',
    green: '#81C784',
  },
}
```

### Animations
Animations are configured in `tailwind.config.js` and use Framer Motion in components.

## Next Steps

1. Add real product/salon data from database
2. Implement search functionality
3. Add booking functionality
4. Connect to Supabase for data storage
5. Add user authentication for bookings

