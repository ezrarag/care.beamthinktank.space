'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, Star, MapPin, Clock, DollarSign } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { supabase, CareProvider } from '@/lib/supabase'

export default function ServicesPage() {
  const [providers, setProviders] = useState<CareProvider[]>([])
  const [filteredProviders, setFilteredProviders] = useState<CareProvider[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedService, setSelectedService] = useState<string>('all')
  const [selectedCity, setSelectedCity] = useState<string>('all')
  const [loading, setLoading] = useState(true)

  const serviceTypes = [
    { id: 'all', label: 'All Services' },
    { id: 'child-care', label: 'Child Care' },
    { id: 'elder-care', label: 'Elder Care' },
    { id: 'pet-care', label: 'Pet Care' },
  ]

  const cities = [
    'all', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'
  ]

  useEffect(() => {
    fetchProviders()
  }, [])

  useEffect(() => {
    filterProviders()
  }, [providers, searchQuery, selectedService, selectedCity])

  const fetchProviders = async () => {
    try {
      setLoading(true)
      // In a real app, you'd fetch from Supabase
      // const { data, error } = await supabase.from('care_providers').select('*')
      
      // Mock data for demo
      const mockProviders: CareProvider[] = [
        {
          id: '1',
          name: 'Sarah Johnson',
          email: 'sarah@example.com',
          phone: '+1-555-0123',
          city: 'New York',
          service_type: 'child-care',
          experience_years: 8,
          hourly_rate: 25,
          bio: 'Experienced childcare provider with CPR certification and early childhood education background.',
          is_verified: true,
          rating: 4.8,
          created_at: new Date().toISOString()
        },
        {
          id: '2',
          name: 'Michael Chen',
          email: 'michael@example.com',
          phone: '+1-555-0124',
          city: 'Los Angeles',
          service_type: 'elder-care',
          experience_years: 12,
          hourly_rate: 30,
          bio: 'Compassionate elder care specialist with nursing background and dementia care experience.',
          is_verified: true,
          rating: 4.9,
          created_at: new Date().toISOString()
        },
        {
          id: '3',
          name: 'Emma Rodriguez',
          email: 'emma@example.com',
          phone: '+1-555-0125',
          city: 'Chicago',
          service_type: 'pet-care',
          experience_years: 5,
          hourly_rate: 20,
          bio: 'Animal lover and certified pet sitter with veterinary assistant training.',
          is_verified: true,
          rating: 4.7,
          created_at: new Date().toISOString()
        }
      ]
      
      setProviders(mockProviders)
    } catch (error) {
      console.error('Error fetching providers:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterProviders = () => {
    let filtered = providers

    if (selectedService !== 'all') {
      filtered = filtered.filter(provider => provider.service_type === selectedService)
    }

    if (selectedCity !== 'all') {
      filtered = filtered.filter(provider => provider.city === selectedCity)
    }

    if (searchQuery) {
      filtered = filtered.filter(provider => 
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.bio.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilteredProviders(filtered)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading care providers...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Care Providers
          </h1>
          <p className="text-xl text-gray-600">
            Connect with trusted, verified care professionals in your area
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search providers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Service Type Filter */}
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {serviceTypes.map(type => (
                <option key={type.id} value={type.id}>{type.label}</option>
              ))}
            </select>

            {/* City Filter */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {cities.map(city => (
                <option key={city} value={city}>
                  {city === 'all' ? 'All Cities' : city}
                </option>
              ))}
            </select>

            {/* Results Count */}
            <div className="flex items-center justify-center text-gray-600">
              {filteredProviders.length} provider{filteredProviders.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Providers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProviders.map((provider) => (
            <div key={provider.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{provider.name}</h3>
                  <p className="text-gray-600 capitalize">{provider.service_type.replace('-', ' ')}</p>
                </div>
                {provider.is_verified && (
                  <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Verified
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {provider.city}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {provider.experience_years} years experience
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2" />
                  ${provider.hourly_rate}/hour
                </div>
                <div className="flex items-center text-gray-600">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  {provider.rating} rating
                </div>
              </div>

              <p className="text-gray-700 mb-4 line-clamp-3">{provider.bio}</p>

              <div className="flex space-x-2">
                <button className="btn-primary flex-1">Book Now</button>
                <button className="btn-secondary">View Profile</button>
              </div>
            </div>
          ))}
        </div>

        {filteredProviders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No care providers found matching your criteria.</p>
            <p className="text-gray-500">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
