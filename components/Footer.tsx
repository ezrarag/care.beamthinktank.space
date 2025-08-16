import Link from 'next/link'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">BEAM Care</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting families with trusted care providers. Professional, reliable, and compassionate care services for children, elders, and pets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/child-care" className="text-gray-300 hover:text-white transition-colors">Child Care</Link></li>
              <li><Link href="/services/elder-care" className="text-gray-300 hover:text-white transition-colors">Elder Care</Link></li>
              <li><Link href="/services/pet-care" className="text-gray-300 hover:text-white transition-colors">Pet Care</Link></li>
              <li><Link href="/services/booking" className="text-gray-300 hover:text-white transition-colors">Bookings</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/providers" className="text-gray-300 hover:text-white transition-colors">Care Providers</Link></li>
              <li><Link href="/donations" className="text-gray-300 hover:text-white transition-colors">Donations</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 BEAM Care. All rights reserved. | 
            <Link href="/privacy" className="ml-2 text-gray-300 hover:text-white">Privacy Policy</Link> | 
            <Link href="/terms" className="ml-2 text-gray-300 hover:text-white">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
