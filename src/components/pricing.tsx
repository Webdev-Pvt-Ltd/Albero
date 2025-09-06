'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { CheckCircleIcon, StarIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type FREQUENCY = 'monthly' | 'yearly'
type CURRENCY = 'USD' | 'EUR' | 'INR'
const frequencies: FREQUENCY[] = ['monthly', 'yearly']
const currencies: CURRENCY[] = ['USD', 'EUR', 'INR']

// Currency conversion rates (example rates - you might want to fetch these from an API)
const currencyRates: Record<CURRENCY, number> = {
    USD: 1,
    EUR: 0.85,
    INR: 83.0
}

interface Plan {
    name: string
    info: string
    tag?: string
    price: {
        monthly: number
        yearly: number
    }
    features: {
        text: string
        tooltip?: string
    }[]
    btn: {
        text: string
        href: string
    }
    highlighted?: boolean
}

interface PricingSectionProps extends React.ComponentProps<'div'> {
    plans: Plan[]
}

export function PricingSection({ plans, ...props }: PricingSectionProps) {
    const [frequency, setFrequency] = React.useState<'monthly' | 'yearly'>('monthly')
    const [currency, setCurrency] = React.useState<CURRENCY>('USD')

    return (
        <div
            className={cn('flex w-full flex-col items-center justify-center space-y-5 p-4', props.className)}
            {...props}>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <PricingFrequencyToggle
                    frequency={frequency}
                    setFrequency={setFrequency}
                />
                <CurrencySelector
                    currency={currency}
                    setCurrency={setCurrency}
                />
            </div>
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {plans.map((plan) => (
                    <PricingCard
                        plan={plan}
                        key={plan.name}
                        frequency={frequency}
                        currency={currency}
                    />
                ))}
            </div>
        </div>
    )
}

type PricingFrequencyToggleProps = React.ComponentProps<'div'> & {
    frequency: FREQUENCY
    setFrequency: React.Dispatch<React.SetStateAction<FREQUENCY>>
}

export function PricingFrequencyToggle({ frequency, setFrequency, ...props }: PricingFrequencyToggleProps) {
    return (
        <div
            className={cn('bg-[#262626] mx-auto flex w-fit rounded-full border border-white/10 p-1', props.className)}
            {...props}>
            {frequencies.map((freq) => (
                <button
                    onClick={() => setFrequency(freq)}
                    className="relative px-4 py-1 text-sm capitalize">
                    <span className="text-white relative z-10">{freq}</span>
                    {frequency === freq && (
                        <motion.span
                            layoutId="frequency"
                            transition={{ type: 'spring', duration: 0.4 }}
                            className="bg-white absolute inset-0 z-10 rounded-full mix-blend-difference"
                        />
                    )}
                </button>
            ))}
        </div>
    )
}

type CurrencySelectorProps = React.ComponentProps<'div'> & {
    currency: CURRENCY
    setCurrency: React.Dispatch<React.SetStateAction<CURRENCY>>
}

export function CurrencySelector({ currency, setCurrency, ...props }: CurrencySelectorProps) {
    return (
        <div
            className={cn('bg-[#262626] mx-auto flex w-fit rounded-full border border-white/10 p-1', props.className)}
            {...props}>
            {currencies.map((curr) => (
                <button
                    onClick={() => setCurrency(curr)}
                    className="relative px-4 py-1 text-sm uppercase">
                    <span className="text-white relative z-10">{curr}</span>
                    {currency === curr && (
                        <motion.span
                            layoutId="currency"
                            transition={{ type: 'spring', duration: 0.4 }}
                            className="bg-white absolute inset-0 z-10 rounded-full mix-blend-difference"
                        />
                    )}
                </button>
            ))}
        </div>
    )
}

type PricingCardProps = React.ComponentProps<'div'> & {
    plan: Plan
    frequency?: FREQUENCY
    currency?: CURRENCY
}

export function PricingCard({ plan, className, frequency = frequencies[0], currency = 'USD', ...props }: PricingCardProps) {
    // Convert price based on selected currency
    const convertedPrice = plan.price[frequency] * currencyRates[currency]

    // Format price based on currency
    const formatPrice = (price: number, currency: CURRENCY) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: currency === 'USD' || currency === 'EUR' ? 2 : 0,
            maximumFractionDigits: currency === 'INR' ? 0 : 2
        }).format(price)
    }

    return (
        <div
            key={plan.name}
            className={cn('relative flex w-full flex-col rounded-lg border border-white/10', className)}
            {...props}>
            {plan.highlighted && (
                <BorderTrail
                    style={{
                        boxShadow: '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)'
                    }}
                    size={100}
                />
            )}
            <div className={cn('bg-[#262626] rounded-t-lg border-b border-white/10 p-4', plan.highlighted && 'bg-[#262626]')}>
                <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
                    {plan.highlighted && (
                        <p className="bg-white flex items-center gap-1 rounded-md border border-white/10 px-2 py-0.5 text-xs">
                            <StarIcon className="h-3 w-3 fill-current" />
                            Popular
                        </p>
                    )}
                    {frequency === 'yearly' && (
                        <p className="bg-[#161616] text-white flex items-center gap-1 rounded-md border border-white/10 px-2 py-0.5 text-xs">
                            {Math.round(((plan.price.monthly * 12 - plan.price.yearly) / plan.price.monthly / 12) * 100)}% off
                        </p>
                    )}
                </div>

                <div className="text-lg font-medium text-white">{plan.name}</div>
                {plan.tag && <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">{plan.tag}</p>}
                <p className="text-white text-sm font-normal">{plan.info}</p>
                <h3 className="mt-2 flex items-end gap-1">
                    <span className="text-3xl font-bold text-white">{formatPrice(convertedPrice, currency)}</span>
                    <span className="text-white">{plan.name !== 'Free' ? '/' + (frequency === 'monthly' ? 'month' : 'year') : ''}</span>
                </h3>
            </div>
            <div className={cn('text-white space-y-4 px-4 py-6 text-sm', plan.highlighted && 'bg-muted/40')}>
                {plan.features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2">
                        <CheckCircleIcon className="text-white h-4 w-4" />
                        <TooltipProvider>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <p className={cn(feature.tooltip && 'cursor-pointer border-b border-white/10 border-dashed')}>{feature.text}</p>
                                </TooltipTrigger>
                                {feature.tooltip && (
                                    <TooltipContent>
                                        <p>{feature.tooltip}</p>
                                    </TooltipContent>
                                )}
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                ))}
            </div>
            <div className={cn('mt-auto w-full border-t border-white/10/10 p-3', plan.highlighted && 'bg-[#262626]')}>
                <Button
                    className={`w-full ${plan.highlighted ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-[#262626]'}`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                    asChild>
                    <Link to={plan.btn.href}>{plan.btn.text}</Link>
                </Button>
            </div>
        </div>
    )
}

type BorderTrailProps = {
    className?: string
    size?: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transition?: any
    delay?: number
    onAnimationComplete?: () => void
    style?: React.CSSProperties
}

export function BorderTrail({ className, size = 60, transition, delay, onAnimationComplete, style }: BorderTrailProps) {
    const BASE_TRANSITION = {
        repeat: Infinity,
        duration: 5,
        ease: 'linear'
    }

    return (
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
            <motion.div
                className={cn('absolute aspect-square bg-zinc-500', className)}
                style={{
                    width: size,
                    offsetPath: `rect(0 auto auto 0 round ${size}px)`,
                    ...style
                }}
                animate={{
                    offsetDistance: ['0%', '100%']
                }}
                transition={{
                    ...(transition ?? BASE_TRANSITION),
                    delay: delay
                }}
                onAnimationComplete={onAnimationComplete}
            />
        </div>
    )
}
