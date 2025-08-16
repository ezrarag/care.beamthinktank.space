import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    icon: LucideIcon
    color: string
    features: string[]
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon

  return (
    <div className="card hover:shadow-lg transition-shadow duration-300 group">
      <div className="text-center">
        <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        <ul className="text-left mb-6 space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <Link 
          href={`/services/${service.id}`}
          className="btn-primary w-full group-hover:bg-primary-700 transition-colors duration-200"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
