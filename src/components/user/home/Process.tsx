import { FeatureCarousel } from '@/components/animated-feature-carousel'
import { Badge } from '@/components/ui/badge'

export default function Process() {
    const images = {
        alt: 'Feature screenshot',
        step1img1: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1740&auto=format&fit=crop',
        step1img2: 'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1740&auto=format&fit=crop',
        step2img1: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1661&auto=format&fit=crop',
        step2img2: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1170&auto=format&fit=crop',
        step3img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1740&auto=format&fit=crop',
        step4img: 'https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=1170&auto=format&fit=crop',
        step5img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop'
    }

    return (
        <div className="bg-black px-5 py-12 md:py-20">
            <div className="text-center mb-16">
                <Badge
                    variant="outline"
                    className="mb-6 text-white">
                    Our Process
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">How We Bring Your Vision to Life</h2>
                <p className="text-lg text-white max-w-2xl mx-auto">Our proven 5-step process ensures quality delivery and client satisfaction.</p>
            </div>
            <FeatureCarousel image={images} />
        </div>
    )
}
