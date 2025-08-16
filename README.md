# BEAM Care Site

A comprehensive care services platform connecting families with trusted care providers for children, elders, and pets. Built with Next.js, Supabase, and Stripe.

## Features

- **City Selector**: Find care services in your area
- **Care Services**: Child care, elder care, and pet care
- **Provider Profiles**: Verified care professionals with ratings and reviews
- **Booking System**: Schedule care appointments with integrated payments
- **Donations**: Support care initiatives and make a difference
- **Milestones**: Track care progress and celebrate achievements
- **Responsive Design**: Mobile-first, modern UI built with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd beam-care-site
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

### Supabase Tables

The application expects the following tables in your Supabase database:

#### care_providers
- id (uuid, primary key)
- name (text)
- email (text)
- phone (text)
- city (text)
- service_type (text: 'child-care', 'elder-care', 'pet-care')
- experience_years (integer)
- hourly_rate (numeric)
- bio (text)
- avatar_url (text, nullable)
- is_verified (boolean)
- rating (numeric)
- created_at (timestamp)

#### bookings
- id (uuid, primary key)
- user_id (uuid, foreign key)
- provider_id (uuid, foreign key)
- service_type (text)
- start_time (timestamp)
- end_time (timestamp)
- status (text: 'pending', 'confirmed', 'completed', 'cancelled')
- total_amount (numeric)
- notes (text, nullable)
- created_at (timestamp)

#### donations
- id (uuid, primary key)
- user_id (uuid, foreign key)
- amount (numeric)
- cause (text)
- message (text, nullable)
- is_anonymous (boolean)
- created_at (timestamp)

#### milestones
- id (uuid, primary key)
- user_id (uuid, foreign key)
- title (text)
- description (text)
- category (text)
- achieved_at (timestamp)
- created_at (timestamp)

#### users
- id (uuid, primary key)
- email (text)
- full_name (text)
- phone (text, nullable)
- city (text)
- avatar_url (text, nullable)
- created_at (timestamp)

## Stripe Integration

### Setup

1. Create a Stripe account and get your API keys
2. Set up webhook endpoints for payment confirmations
3. Configure products and pricing in your Stripe dashboard

### Features

- **Payment Intents**: For booking payments
- **Checkout Sessions**: For donations
- **Webhook Handling**: For payment confirmations

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Environment Variables in Vercel

Set these in your Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_APP_URL`

### Manual Deployment

```bash
npm run build
npm run start
```

## Project Structure

```
beam-care-site/
├── app/                    # Next.js app directory
│   ├── donations/         # Donations page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── CitySelector.tsx   # City selection dropdown
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Site header
│   └── ServiceCard.tsx    # Service display card
├── lib/                   # Utility libraries
│   ├── supabase.ts        # Supabase client & types
│   └── stripe.ts          # Stripe configuration
├── public/                # Static assets
├── .env.local.example     # Environment variables template
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── vercel.json            # Vercel deployment config
└── README.md              # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@beamcare.com or create an issue in this repository.

## Roadmap

- [ ] User authentication and profiles
- [ ] Real-time chat between users and providers
- [ ] Mobile app (React Native)
- [ ] Advanced scheduling with recurring appointments
- [ ] Insurance integration
- [ ] Multi-language support
- [ ] Advanced analytics and reporting
