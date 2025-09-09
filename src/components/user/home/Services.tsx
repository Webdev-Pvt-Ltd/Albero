import { Badge } from '@/components/ui/badge'
import { ServicesSection } from '@/components/ui/feature'

export default function Services() {
    return (
        <section
            id="services"
            className="bg-black text-white px-5 py-12 md:py-18">
            <div className="text-center mb-16">
                <Badge
                    variant="outline"
                    className="mb-6">
                    Our Services
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Web Development Solutions</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    From simple websites to complex enterprise applications, we deliver solutions tailored to your needs.
                </p>
            </div>

            <ServicesSection />
        </section>
    )
}
