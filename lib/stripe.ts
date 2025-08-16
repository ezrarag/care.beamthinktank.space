import Stripe from 'stripe'

// Initialize Stripe with secret key
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

// Stripe configuration for client-side
export const stripeConfig = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
}

// Payment intent creation for bookings
export async function createPaymentIntent(amount: number, metadata: any) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      metadata,
      automatic_payment_methods: {
        enabled: true,
      },
    })
    return paymentIntent
  } catch (error) {
    console.error('Error creating payment intent:', error)
    throw error
  }
}

// Create checkout session for donations
export async function createDonationCheckoutSession(amount: number, cause: string, message?: string) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Donation to ${cause}`,
              description: message || `Thank you for your donation to ${cause}`,
            },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/donations/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/donations`,
      metadata: {
        cause,
        message,
        type: 'donation',
      },
    })
    return session
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw error
  }
}

// Payment types
export interface PaymentMetadata {
  booking_id?: string
  user_id: string
  provider_id: string
  service_type: string
  amount: number
}

export interface DonationMetadata {
  cause: string
  message?: string
  user_id: string
  amount: number
}
