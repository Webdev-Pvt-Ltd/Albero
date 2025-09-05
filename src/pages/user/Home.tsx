import { Hero } from '@/components/ui/hero'
import Tools from '@/components/user/home/Tools'

export default function Home() {
    return (
        <div>
            <Hero
                title="Smarter Development • Faster Launch • Better Growth"
                subtitle="We help startups, SMEs, and enterprises grow digitally with tailored web solutions."
                eyebrow="Get a Free Quote"
                ctaLabel="Get Started"
            />
            <Tools />
        </div>
    )
}
