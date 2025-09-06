import { cn } from '@/lib/utils'
import {
    IconFileTypeJsx,
    IconBrandWordpress,
    IconBrandLaravel,
    IconBrandReact,
    IconBrandNextjs,
    IconPhotoSquareRounded,
    IconCloud,
    IconEyeSearch
} from '@tabler/icons-react'

export function FeaturesSectionWithHoverEffects() {
    const features = [
        {
            title: 'HTML/JS Development',
            description:
                'We build fast, responsive, and interactive static websites with modern JavaScript features to deliver seamless user experiences.',
            icon: <IconFileTypeJsx />
        },
        {
            title: 'WordPress Development',
            description:
                'Custom WordPress solutions tailored to your business needs—ranging from simple blogs to fully functional e-commerce platforms.',
            icon: <IconBrandWordpress />
        },
        {
            title: 'Laravel Development',
            description:
                'Robust, scalable, and secure Laravel applications with clean code and optimized backend performance for your business growth.',
            icon: <IconBrandLaravel />
        },
        {
            title: 'MERN Stack',
            description:
                'Full-stack web applications using MongoDB, Express.js, React, and Node.js for dynamic, scalable, and high-performance solutions.',
            icon: <IconBrandReact />
        },
        {
            title: 'Next.js Development',
            description:
                'Cutting-edge Next.js applications with server-side rendering, SEO optimization, and lightning-fast performance for modern web apps.',
            icon: <IconBrandNextjs />
        },
        {
            title: 'UI/UX Design',
            description: 'Beautiful, user-friendly designs focused on delivering intuitive digital experiences and enhancing customer engagement.',
            icon: <IconPhotoSquareRounded />
        },
        {
            title: 'Hosting & Domain',
            description: 'Reliable hosting and domain management services with smooth deployment, high uptime, and complete scalability.',
            icon: <IconCloud />
        },
        {
            title: 'SEO & Marketing',
            description: 'Data-driven SEO strategies and digital marketing solutions to boost online visibility, traffic, and conversions.',
            icon: <IconEyeSearch />
        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature
                    key={feature.title}
                    {...feature}
                    index={index}
                />
            ))}
        </div>
    )
}

const Feature = ({ title, description, icon, index }: { title: string; description: string; icon: React.ReactNode; index: number }) => {
    return (
        <div
            className={cn(
                'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
                (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
                index < 4 && 'lg:border-b dark:border-neutral-800'
            )}>
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">{icon}</div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
        </div>
    )
}
