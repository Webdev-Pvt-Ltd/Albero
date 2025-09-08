import Stats from '@/components/user/home/Stats'
import { Hero } from '@/components/user/home/Hero'
import Services from '@/components/user/home/Services'
import Tools from '@/components/user/home/Tools'
import { Features } from '@/components/user/home/Features'
import Process from '@/components/user/home/Process'
import Pricing from '@/components/user/home/Pricing'
import WhyChooseUs from '@/components/user/home/WhyChooseUs'

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
            <Stats />
            <Services />
            <Features />
            <Process />
            <Pricing />
            <WhyChooseUs />
        </div>
    )
}
