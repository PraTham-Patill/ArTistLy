# ArTistLy - Performing Artist Booking Platform

## 🎭 Project Overview

ArTistLy is a comprehensive performing artist booking platform designed to connect Event Planners with talented Artist Managers. The platform enables event planners to browse artist profiles, shortlist preferences, and raise booking requests, while artist managers can onboard artists, receive leads, and manage responses through an intuitive dashboard.

## 🚀 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Theme**: Next-themes (Light/Dark mode)
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

\`\`\`
artistly-platform/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── artists/                 # Artist listing page
│   │   ├── page.tsx
│   │   └── loading.tsx
│   ├── onboarding/              # Artist onboarding form
│   │   └── page.tsx
│   └── dashboard/               # Manager dashboard
│       ├── page.tsx
│       └── loading.tsx
├── components/                   # Reusable components
│   ├── ui/                      # ShadCN UI components
│   ├── navigation.tsx           # Main navigation
│   └── theme-provider.tsx       # Theme context provider
├── lib/                         # Utilities and data
│   ├── data.ts                  # Mock data and types
│   └── utils.ts                 # Utility functions
├── hooks/                       # Custom hooks
│   └── use-toast.ts            # Toast notification hook
└── tailwind.config.ts          # Tailwind configuration
\`\`\`

## 🎯 Key Features

### 1. Homepage
- **Hero Section**: Engaging introduction with call-to-action buttons
- **Artist Categories**: 4 main categories (Singers, Dancers, Speakers, DJs)
- **Statistics**: Platform metrics and achievements
- **Responsive Design**: Mobile-first approach

### 2. Artist Listing Page
- **Grid Layout**: Responsive artist cards
- **Advanced Filtering**: Category, Location, Price Range
- **Search Functionality**: Real-time search by name/bio
- **Mobile Optimization**: Filter drawer for mobile devices

### 3. Artist Onboarding Form
- **Multi-section Form**: Comprehensive artist registration
- **Form Validation**: React Hook Form + Zod schema validation
- **Multi-select Components**: Categories and languages
- **File Upload**: Profile image upload interface
- **Success Handling**: Confirmation state management

### 4. Manager Dashboard
- **Statistics Overview**: Application metrics
- **Data Table**: Sortable and filterable submissions
- **Status Management**: Approve/reject functionality
- **Search & Filter**: Advanced filtering options

## 🎨 Design Features

### Logo & Branding
- **Unique Logo**: Gradient-based design with artistic elements
- **Brand Colors**: Purple to blue gradient theme
- **Typography**: Modern, clean font hierarchy
- **Consistent Theming**: Light/dark mode support

### UI/UX Elements
- **Smooth Animations**: Framer Motion transitions
- **Interactive Components**: Hover effects and micro-interactions
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Loading States**: Skeleton loaders and loading indicators

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Breakpoints**: Tailored for all screen sizes
- **Touch-Friendly**: Large tap targets and gestures
- **Navigation**: Collapsible mobile menu

## 🔧 Technical Implementation

### State Management
- **useState**: Local component state
- **useContext**: Theme management
- **useEffect**: Side effects and data fetching
- **Custom Hooks**: Reusable logic (toast notifications)

### Form Handling
- **React Hook Form**: Performance-optimized forms
- **Zod Validation**: Type-safe schema validation
- **Controlled Components**: Proper form state management
- **Error Handling**: User-friendly error messages

### Data Management
- **Mock Data**: Realistic artist and submission data
- **TypeScript Interfaces**: Type-safe data structures
- **Filtering Logic**: Client-side data filtering
- **Search Implementation**: Real-time search functionality

### Performance Optimization
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Component-level lazy loading
- **Bundle Optimization**: Tree shaking and minification

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18 or later
- npm or yarn package manager

### Installation
\`\`\`bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd artistly-platform

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

### Build for Production
\`\`\`bash
# Build the application
npm run build

# Start production server
npm start
\`\`\`

## 🚀 Deployment to Vercel

### Prerequisites
- Vercel account (free at vercel.com)
- GitHub repository with the project code

### Deployment Steps

1. **Install Vercel CLI** (optional)
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. **Deploy via GitHub Integration** (Recommended)
   - Push your code to a GitHub repository
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project" and import your GitHub repository
   - Vercel will automatically detect Next.js and configure build settings
   - Click "Deploy" and wait for the build to complete

3. **Deploy via CLI** (Alternative)
   \`\`\`bash
   # Login to Vercel
   vercel login
   
   # Deploy to production
   vercel --prod
   \`\`\`

4. **Custom Domain** (Optional)
   - In your Vercel dashboard, go to Project Settings
   - Navigate to "Domains" section
   - Add your custom domain and configure DNS

### Environment Variables
If you add any environment variables in the future, configure them in:
- Vercel Dashboard → Project Settings → Environment Variables

### Build Configuration
The project includes optimized build settings in `vercel.json` for:
- Performance optimization
- Security headers
- Regional deployment (Mumbai region for Indian users)

## 🌐 Deployment

The application is optimized for Vercel deployment:

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Auto-Deploy**: Automatic deployments on push to main branch
3. **Environment Variables**: Configure any required environment variables
4. **Custom Domain**: Optional custom domain configuration

## 📊 Evaluation Criteria Met

### Code Structure ✅
- Clean folder hierarchy
- Modular component architecture
- Reusable UI components
- Separation of concerns

### Responsiveness ✅
- Mobile-first design approach
- Flexible grid layouts
- Responsive navigation
- Touch-friendly interactions

### Forms ✅
- React Hook Form implementation
- Zod schema validation
- Multi-select dropdowns with checkboxes
- File upload interface
- Error handling and user feedback

### Listing & Filtering ✅
- Functional filter logic
- Real-time search
- Component reusability
- Grid to list responsive layout

### SEO & Accessibility ✅
- Proper meta tags and descriptions
- Semantic HTML structure
- Alt text for images
- ARIA labels and roles
- Keyboard navigation support

### React Skills ✅
- useState for local state management
- useContext for theme management
- useEffect for side effects
- Custom hooks implementation
- Component composition patterns

## 🎭 Platform Features

### For Event Planners
- Browse artist profiles
- Filter by category, location, and budget
- View artist ratings and reviews
- Request quotes and availability
- Shortlist favorite artists

### For Artist Managers
- Onboard new artists
- Manage artist profiles
- Receive booking inquiries
- Track application status
- Dashboard analytics

## 🔮 Future Enhancements

- User authentication system
- Real-time chat functionality
- Payment integration
- Calendar booking system
- Advanced analytics dashboard
- Mobile application
- Multi-language support

## 📝 License

This project is created for demonstration purposes as part of a frontend development assessment.

---

**ArTistLy** - Connecting talent with opportunity, one performance at a time. 🎭✨
