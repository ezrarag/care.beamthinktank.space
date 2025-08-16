'use client'

import { useState } from 'react'
import { Heart, Gift, Users, PawPrint, Baby, UserCheck } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const donationCauses = [
  {
    id: 'child-care-fund',
    title: 'Child Care Fund',
    description: 'Support families in need of quality childcare services',
    icon: Baby,
    color: 'bg-blue-500',
    goal: 10000,
    raised: 6500,
    donors: 124
  },
  {
    id: 'elder-care-support',
    title: 'Elder Care Support',
    description: 'Help seniors access compassionate care and companionship',
    icon: UserCheck,
    color: 'bg-green-500',
    goal: 15000,
    raised: 8900,
    donors: 89
  },
  {
    id: 'pet-care-initiative',
    title: 'Pet Care Initiative',
    description: 'Ensure pets receive proper care and veterinary support',
    icon: PawPrint,
    color: 'bg-purple-500',
    goal: 8000,
    raised: 4200,
    donors: 67
  },
  {
    id: 'care-provider-training',
    title: 'Care Provider Training',
    description: 'Fund training and certification for care professionals',
    icon: Users,
    color: 'bg-orange-500',
    goal: 12000,
    raised: 7800,
    donors: 156
  }
]

export default function DonationsPage() {
  const [selectedCause, setSelectedCause] = useState<string>('')
  const [donationAmount, setDonationAmount] = useState<string>('')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [message, setMessage] = useState('')
  const [showDonationForm, setShowDonationForm] = useState(false)

  const presetAmounts = [25, 50, 100, 250, 500]

  const handleDonation = async () => {
    if (!selectedCause || !donationAmount) return

    try {
      // In a real app, you'd integrate with Stripe here
      // const session = await createDonationCheckoutSession(
      //   parseFloat(donationAmount),
      //   selectedCause,
      //   message
      // )
      
      console.log('Donation initiated:', {
        cause: selectedCause,
        amount: donationAmount,
        isAnonymous,
        message
      })

      // Reset form
      setSelectedCause('')
      setDonationAmount('')
      setMessage('')
      setShowDonationForm(false)
      
      alert('Thank you for your donation! You will be redirected to complete your payment.')
    } catch (error) {
      console.error('Error processing donation:', error)
      alert('There was an error processing your donation. Please try again.')
    }
  }

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
            <Heart className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Make a Difference
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your donations help families access quality care services and support care providers 
            in making a positive impact in their communities.
          </p>
        </div>

        {/* Donation Causes Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {donationCauses.map((cause) => {
            const IconComponent = cause.icon
            const progress = getProgressPercentage(cause.raised, cause.goal)
            
            return (
              <div key={cause.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`${cause.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {cause.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {cause.description}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>${cause.raised.toLocaleString()} raised</span>
                    <span>${cause.goal.toLocaleString()} goal</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">
                    {cause.donors} donors
                  </span>
                  <span className="text-sm text-gray-600">
                    {Math.round(progress)}% complete
                  </span>
                </div>

                <button
                  onClick={() => {
                    setSelectedCause(cause.id)
                    setShowDonationForm(true)
                  }}
                  className="btn-primary w-full"
                >
                  Donate Now
                </button>
              </div>
            )
          })}
        </div>

        {/* Donation Form Modal */}
        {showDonationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Make a Donation
                </h3>
                <button
                  onClick={() => setShowDonationForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                {/* Cause Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Cause
                  </label>
                  <select
                    value={selectedCause}
                    onChange={(e) => setSelectedCause(e.target.value)}
                    className="input-field"
                  >
                    <option value="">Choose a cause...</option>
                    {donationCauses.map(cause => (
                      <option key={cause.id} value={cause.id}>
                        {cause.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Donation Amount
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    {presetAmounts.map(amount => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setDonationAmount(amount.toString())}
                        className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                          donationAmount === amount.toString()
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Or enter custom amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="input-field"
                    min="1"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    placeholder="Share why you're making this donation..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="input-field resize-none"
                  />
                </div>

                {/* Anonymous Option */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700">
                    Make this donation anonymous
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleDonation}
                  disabled={!selectedCause || !donationAmount}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Gift className="w-4 h-4 mr-2 inline" />
                  Complete Donation
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Impact Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Impact
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Together, we've raised over $27,400 to support care initiatives across the country.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">436</div>
              <div className="text-gray-600">Total Donors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">$27,400</div>
              <div className="text-gray-600">Total Raised</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">4</div>
              <div className="text-gray-600">Active Causes</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
