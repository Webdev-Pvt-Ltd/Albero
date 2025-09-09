import { FeatureCarousel } from '@/components/ui/animated-feature-carousel'
import { Badge } from '@/components/ui/badge'
import { processData } from '@/constants/process'

export default function Process() {
    return (
        <div className="bg-black px-5 py-12 md:py-20">
            <div className="text-center mb-16">
                <Badge
                    variant="outline"
                    className="mb-6 text-white text-xl">
                    {processData.badgeTitle}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{processData.heading}</h2>
                <p className="text-lg text-white max-w-2xl mx-auto">{processData.description}</p>
            </div>
            <FeatureCarousel image={processData.images} />
        </div>
    )
}
