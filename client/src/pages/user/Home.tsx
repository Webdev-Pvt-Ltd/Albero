import Stats from '@/components/user/home/Stats'
import { Hero } from '@/components/user/home/Hero'
import Services from '@/components/user/home/Services'
import Tools from '@/components/user/home/Tools'
import { Features } from '@/components/user/home/Features'
import Process from '@/components/user/home/Process'
import Pricing from '@/components/user/home/Pricing'
import WhyChooseUs from '@/components/user/home/WhyChooseUs'
import Testimonials from '@/components/user/home/Testimonials'
import { Contact } from '@/components/user/home/Contact'
import SEO from '@/components/user/common/SEO'

export default function Home() {
    return (
        <div>
            {/* SEO */}
            <SEO
                title="Albero - Web Development & Digital Growth Solutions"
                description="Albero helps startups, SMEs, and enterprises with smarter web development, faster launch, and digital growth solutions. Build, scale, and grow your business online."
                keywords="Albero, web development company, digital solutions, website design, custom web apps, startups, SMEs, enterprise software, business growth, IT services"
                url="https://www.albero.in/"
                canonical="https://www.albero.in/"
                image="https://www.albero.in/og-image.png"
                type="website"
            />

            {/* Components */}
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
            <Testimonials />
            <WhyChooseUs />
            <Contact />
        </div>
    )
}
