import { Badge } from '@/components/ui/badge'
import { ServicesSection } from '@/components/ui/feature'
import { servicesData } from '@/constants/services'

export default function Services() {
    return (
        <section
            id="services"
            className="bg-black text-white px-5 py-12 md:py-18">
            <div className="text-center mb-16">
                <Badge
                    variant="outline"
                    className="mb-6 text-white text-xl">
                    {servicesData.badgeTitle}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{servicesData.heading}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{servicesData.description}</p>
            </div>

            <ServicesSection />
        </section>
    )
}
