import { Card } from '@/components/ui/card'
import { Badge } from '../../ui/badge'

type Stat = {
    value: string
    label: string
}

const STATS: Stat[] = [
    { value: '5+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' }
]

export default function Stats() {
    return (
        <section className="bg-black py-12 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
                <Badge
                    variant="outline"
                    className="mb-6 text-white">
                    About Our Agency
                </Badge>
                <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">Empowering Businesses with Digital Transformation</h2>
                <p className="text-lg text-white/70 mb-8">
                    With over 5 years of experience serving 200+ clients across various industries, we specialize in creating high-performance web
                    solutions that drive business growth.
                </p>
            </div>
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
                <Card
                    role="list"
                    aria-label="Key product stats"
                    className={[
                        // Always 3 columns, never wrap
                        'grid grid-cols-3',
                        // Equal width and spacing
                        'gap-2 sm:gap-4 md:gap-6',
                        'p-3 sm:p-4 md:p-6',
                        // Vertical dividers between items
                        'divide-x'
                    ].join(' ')}>
                    {STATS.map((s, i) => (
                        <div
                            key={i}
                            role="listitem"
                            className="flex flex-col items-center justify-center px-3 text-center">
                            <div
                                className={[
                                    'text-white font-semibold tracking-tight whitespace-nowrap',
                                    // Fluid font size
                                    'text-[clamp(1.75rem,5vw,2.5rem)] leading-none'
                                ].join(' ')}>
                                {s.value}
                            </div>
                            <p className="text-white/70 mt-2 text-sm sm:text-base">{s.label}</p>
                        </div>
                    ))}
                </Card>
            </div>
        </section>
    )
}
