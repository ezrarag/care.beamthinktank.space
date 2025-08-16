import { createClient } from '@supabase/supabase-js'

// These environment variables need to be set in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface CareProvider {
  id: string
  name: string
  email: string
  phone: string
  city: string
  service_type: 'child-care' | 'elder-care' | 'pet-care'
  experience_years: number
  hourly_rate: number
  bio: string
  avatar_url?: string
  is_verified: boolean
  rating: number
  created_at: string
}

export interface Booking {
  id: string
  user_id: string
  provider_id: string
  service_type: 'child-care' | 'elder-care' | 'pet-care'
  start_time: string
  end_time: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  total_amount: number
  notes?: string
  created_at: string
}

export interface Donation {
  id: string
  user_id: string
  amount: number
  cause: string
  message?: string
  is_anonymous: boolean
  created_at: string
}

export interface Milestone {
  id: string
  user_id: string
  title: string
  description: string
  category: 'child-care' | 'elder-care' | 'pet-care'
  achieved_at: string
  created_at: string
}

export interface User {
  id: string
  email: string
  full_name: string
  phone?: string
  city: string
  avatar_url?: string
  created_at: string
}
