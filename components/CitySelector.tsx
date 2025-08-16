'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'

interface CitySelectorProps {
  cities: string[]
  selectedCity: string
  onCityChange: (city: string) => void
}

export default function CitySelector({ cities, selectedCity, onCityChange }: CitySelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleCitySelect = (city: string) => {
    onCityChange(city)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg px-4 py-3 text-left text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex items-center justify-between"
      >
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-white opacity-70" />
          <span className={selectedCity ? 'text-white' : 'text-white opacity-70'}>
            {selectedCity || 'Select your city'}
          </span>
        </div>
        <ChevronDown className={`w-5 h-5 text-white opacity-70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-50">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => handleCitySelect(city)}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 ${
                selectedCity === city ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
