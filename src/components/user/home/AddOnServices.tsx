import { cn } from '@/lib/utils'

type CURRENCY = 'USD' | 'EUR' | 'INR'

interface AddOnService {
    name: string
    priceRange: {
        inr: string
        usd: string
        eur: string
    }
    frequency: string
    description: string
}

const SERVICES: AddOnService[] = [
    {
        name: 'Maintenance Plans',
        priceRange: {
            inr: '₹5,000 – ₹25,000',
            usd: '$60 – $300',
            eur: '€55 – €255'
        },
        frequency: '/ month',
        description: 'Regular updates, security patches, and technical support'
    },
    {
        name: 'Hosting & Domain',
        priceRange: {
            inr: '₹3,000 – ₹10,000',
            usd: '$36 – $120',
            eur: '€32 – €100'
        },
        frequency: '/ year',
        description: 'Reliable hosting with SSL certificates and domain management'
    },
    {
        name: 'UI/UX Design',
        priceRange: {
            inr: '₹10,000 – ₹50,000',
            usd: '$120 – $600',
            eur: '€110 – €510'
        },
        frequency: '',
        description: 'Custom design solutions and user experience optimization'
    },
    {
        name: 'SEO & Marketing',
        priceRange: {
            inr: '₹15,000 – ₹70,000',
            usd: '$180 – $840',
            eur: '€165 – €715'
        },
        frequency: '',
        description: 'Search engine optimization and digital marketing campaigns'
    }
]

interface AddOnServicesProps {
    currency: CURRENCY
}

export function AddOnServices({ currency }: AddOnServicesProps) {
    return (
        <div className="w-full max-w-7xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-center text-white mb-8">Add-On Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((service, idx) => (
                    <div
                        key={idx}
                        className={cn('rounded-2xl border border-white/10 bg-[#161616] p-6 text-center shadow-lg hover:shadow-xl transition')}>
                        <h3 className="text-lg font-semibold mb-2 text-white">{service.name}</h3>
                        <p className="text-xl font-bold text-white">
                            {service.priceRange[currency.toLowerCase() as keyof typeof service.priceRange]}{' '}
                            <span className="text-sm font-normal text-gray-400">{service.frequency}</span>
                        </p>
                        <p className="mt-3 text-sm text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
