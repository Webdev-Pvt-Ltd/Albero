import { PricingSection } from '@/components/pricing'
import { Badge } from '@/components/ui/badge'
import { AddOnServices } from './AddOnServices'
import React from 'react'

const PLANS = [
    {
        name: 'HTML/CSS',
        tag: 'Basic',
        info: 'Perfect for simple static websites',
        price: {
            monthly: 180,
            yearly: 1500
        },
        features: [
            { text: 'Up to 5 static pages (HTML, CSS, JS)' },
            { text: 'Fully responsive design' },
            { text: 'Basic SEO setup (meta tags, sitemap)' },
            { text: 'Fast-loading lightweight site' },
            { text: 'Contact form with email integration' },
            { text: '1 round of revisions included' },
            { text: 'Email support (Mon–Fri)' }
        ],
        btn: {
            text: 'Contact Us',
            href: '/contact',
            variant: 'outline'
        }
    },
    {
        name: 'WordPress',
        tag: 'Standard',
        info: 'Flexible CMS for blogs, business, and e-commerce',
        price: {
            monthly: 300,
            yearly: 2500
        },
        features: [
            { text: 'Custom WordPress theme design & setup' },
            { text: 'Up to 10 pages with CMS editing' },
            { text: 'E-commerce support (WooCommerce)' },
            { text: 'SEO plugins & optimization' },
            { text: 'Blog setup with categories & tags' },
            { text: 'Plugin integration (forms, sliders, galleries)' },
            { text: '2 rounds of revisions included' },
            { text: 'Email & chat support' }
        ],
        btn: {
            text: 'Contact Us',
            href: '/contact',
            variant: 'secondary'
        }
    },
    {
        name: 'MERN Stack',
        tag: 'Most Popular',
        info: 'Best for startups & businesses scaling fast',
        price: {
            monthly: 1800,
            yearly: 2450
        },
        features: [
            { text: 'Full-stack app with MongoDB, Express, React, Node.js' },
            { text: 'Dynamic pages with CMS or admin panel' },
            { text: 'User authentication & roles' },
            { text: 'E-commerce functionality (shopping cart, payments)' },
            { text: 'API integrations (third-party services)' },
            { text: 'Advanced SEO + analytics setup' },
            { text: '3 rounds of revisions included' },
            { text: 'Priority email & chat support' }
        ],
        btn: {
            text: 'Get Premium Quote',
            href: '/contact',
            variant: 'default'
        },
        highlighted: true
    },
    {
        name: 'Laravel Advanced',
        tag: 'Enterprise',
        info: 'Enterprise-grade solution with PHP & Laravel',
        price: {
            monthly: 600,
            yearly: 1800
        },
        features: [
            { text: 'Custom Laravel backend with scalable architecture' },
            { text: 'Advanced e-commerce (multi-vendor, subscriptions)' },
            { text: 'Robust REST APIs / GraphQL support' },
            { text: 'Integration with CRM, ERP, or internal tools' },
            { text: 'Advanced security (JWT, OAuth, 2FA)' },
            { text: 'Performance optimization & caching' },
            { text: 'Dedicated project manager' },
            { text: 'Ongoing maintenance & updates' },
            { text: '24/7 premium support' }
        ],
        btn: {
            text: 'Contact Enterprise Team',
            href: '/contact',
            variant: 'destructive'
        }
    }
]

export default function Pricing() {
    const [frequency, setFrequency] = React.useState<'monthly' | 'yearly'>('monthly')
    const [currency, setCurrency] = React.useState<'USD' | 'EUR' | 'INR'>('USD')

    return (
        <div className="w-full overflow-hidden bg-black py-12 md:py-20">
            <div className="text-center mb-16">
                <Badge
                    variant="outline"
                    className="mb-6 text-white">
                    Pricing
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Transparent, Affordable Pricing</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-white px-5">
                    Choose the perfect plan for your project. All prices include design, development, and initial support.
                </p>
            </div>

            {/* Pricing Plans */}
            <PricingSection
                plans={PLANS}
                frequency={frequency}
                setFrequency={setFrequency}
                currency={currency}
                setCurrency={setCurrency}
            />

            {/* Add-On Services */}
            <AddOnServices currency={currency} />
        </div>
    )
}
