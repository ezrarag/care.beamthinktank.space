'use client'

import { useState } from 'react'
import { Search, Heart, Users, PawPrint, Baby, UserCheck, Calendar, Gift } from 'lucide-react'
import CitySelector from '@/components/CitySelector'
import ServiceCard from '@/components/ServiceCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cities = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'
]

const services = [
  {
    id: 'child-care',
    title: 'Child Care',
    description: 'Professional childcare services for all ages',
    icon: Baby,
    color: 'bg-blue-500',
    features: ['24/7 availability', 'Certified providers', 'Educational activities']
  },
  {
    id: 'elder-care',
    title: 'Elder Care',
    description: 'Compassionate care for seniors',
    icon: UserCheck,
    color: 'bg-green-500',
    features: ['Medical assistance', 'Companionship', 'Home care']
  },
  {
    id: 'pet-care',
    title: 'Pet Care',
    description: 'Loving care for your furry friends',
    icon: PawPrint,
    color: 'bg-purple-500',
    features: ['Pet sitting', 'Dog walking', 'Veterinary care']
  }
]

export default function HomePage() {
  const [selectedCity, setSelectedCity] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Find Trusted Care in Your City
          </h1>
          <p className="text-xl mb-8 text-primary-100">
            Professional care services for children, elders, and pets. 
            Book trusted providers, track milestones, and make a difference.
          </p>
          
          {/* City Selector */}
          <div className="max-w-md mx-auto mb-8">
            <CitySelector 
              cities={cities}
              selectedCity={selectedCity}
              onCityChange={setSelectedCity}
            />
          </div>
          
          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for care services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive care solutions tailored to your needs. 
              From childcare to elder care and pet services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose BEAM Care?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make finding and managing care services simple, secure, and reliable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Providers</h3>
              <p className="text-gray-600">All care providers are thoroughly vetted and certified</p>
            </div>
            
            <div className="text-center">
              <div className="bg-care-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-care-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Simple scheduling and management system</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Care Milestones</h3>
              <p className="text-gray-600">Track progress and celebrate achievements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Donations</h3>
              <p className="text-gray-600">Support care initiatives and make a difference</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
