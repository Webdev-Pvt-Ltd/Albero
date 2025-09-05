'use client'

import { animate, motion, useMotionValue } from 'motion/react'
import React, { useEffect, useState, type CSSProperties } from 'react'
import useMeasure from 'react-use-measure'

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Icons
import { FaAppStoreIos, FaAws, FaCss3Alt, FaHtml5, FaJsSquare, FaLaravel, FaWordpress } from 'react-icons/fa'
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoNodejs } from 'react-icons/io5'
import { SiExpress, SiGodaddy, SiHostinger, SiMongodb, SiPhp } from 'react-icons/si'
import { TbBrandMysql, TbSeo } from 'react-icons/tb'
import { PiFigmaLogoFill } from 'react-icons/pi'
import { GrAndroid } from 'react-icons/gr'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

type InfiniteSliderProps = {
    children: React.ReactNode
    gap?: number
    speed?: number
    speedOnHover?: number
    direction?: 'horizontal' | 'vertical'
    reverse?: boolean
    className?: string
}

function InfiniteSlider({
    children,
    gap = 16,
    speed = 100,
    speedOnHover,
    direction = 'horizontal',
    reverse = false,
    className
}: InfiniteSliderProps) {
    const [currentSpeed, setCurrentSpeed] = useState(speed)
    const [ref, { width, height }] = useMeasure()
    const translation = useMotionValue(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [key, setKey] = useState(0)

    useEffect(() => {
        let controls
        const size = direction === 'horizontal' ? width : height
        if (size === 0) return

        const contentSize = size + gap
        const from = reverse ? -contentSize / 2 : 0
        const to = reverse ? 0 : -contentSize / 2

        const distanceToTravel = Math.abs(to - from)
        const duration = distanceToTravel / currentSpeed

        if (isTransitioning) {
            const remainingDistance = Math.abs(translation.get() - to)
            const transitionDuration = remainingDistance / currentSpeed
            controls = animate(translation, [translation.get(), to], {
                ease: 'linear',
                duration: transitionDuration,
                onComplete: () => {
                    setIsTransitioning(false)
                    setKey((prevKey) => prevKey + 1)
                }
            })
        } else {
            controls = animate(translation, [from, to], {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onRepeat: () => {
                    translation.set(from)
                }
            })
        }

        return () => controls?.stop()
    }, [key, translation, currentSpeed, width, height, gap, isTransitioning, direction, reverse])

    const hoverProps = speedOnHover
        ? {
              onHoverStart: () => {
                  setIsTransitioning(true)
                  setCurrentSpeed(speedOnHover)
              },
              onHoverEnd: () => {
                  setIsTransitioning(true)
                  setCurrentSpeed(speed)
              }
          }
        : {}

    return (
        <div className={cn('overflow-hidden', className)}>
            <motion.div
                className="flex w-max"
                style={{
                    ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === 'horizontal' ? 'row' : 'column'
                }}
                ref={ref}
                {...hoverProps}>
                {children}
                {children}
            </motion.div>
        </div>
    )
}

export type BlurredInfiniteSliderProps = InfiniteSliderProps & {
    fadeWidth?: number
    containerClassName?: string
}

export function BlurredInfiniteSlider({ children, fadeWidth = 80, containerClassName, ...sliderProps }: BlurredInfiniteSliderProps) {
    const maskStyle: CSSProperties = {
        maskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`
    }

    return (
        <div
            className={cn('relative w-full', containerClassName)}
            style={maskStyle}>
            <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
        </div>
    )
}

const LOGOS = [
    { id: 1, icon: <FaHtml5 size={36} />, iconName: 'HTML5' },
    { id: 2, icon: <FaCss3Alt size={36} />, iconName: 'CSS3' },
    { id: 3, icon: <FaJsSquare size={36} />, iconName: 'JavaScript' },
    { id: 4, icon: <RiTailwindCssFill size={36} />, iconName: 'Tailwind CSS' },
    { id: 5, icon: <RiReactjsFill size={36} />, iconName: 'React JS' },
    { id: 6, icon: <IoLogoNodejs size={36} />, iconName: 'NodeJS' },
    { id: 7, icon: <SiExpress size={36} />, iconName: 'Express' },
    { id: 8, icon: <SiMongodb size={36} />, iconName: 'MongoDB' },
    { id: 9, icon: <TbBrandMysql size={36} />, iconName: 'MySQL' },
    { id: 10, icon: <SiPhp size={36} />, iconName: 'PHP' },
    { id: 11, icon: <FaLaravel size={36} />, iconName: 'Laravel' },
    { id: 12, icon: <FaWordpress size={36} />, iconName: 'WordPress' },
    { id: 13, icon: <RiNextjsFill size={36} />, iconName: 'Next.js' },
    { id: 14, icon: <GrAndroid size={36} />, iconName: 'Android' },
    { id: 15, icon: <FaAppStoreIos size={36} />, iconName: 'iOS' },
    { id: 15, icon: <TbSeo size={36} />, iconName: 'SEO' },
    { id: 16, icon: <FaAws size={36} />, iconName: 'AWS' },
    { id: 17, icon: <PiFigmaLogoFill size={36} />, iconName: 'Figma' },
    { id: 18, icon: <SiHostinger size={36} />, iconName: 'Hostinger' },
    { id: 19, icon: <SiGodaddy size={36} />, iconName: 'Godaddy' }
    // { id: 16, icon: <FaGithub size={36} />, iconName: 'GitHub' },
    // { id: 17, icon: <IoLogoVercel size={36} />, iconName: 'Vercel' },
    // { id: 18, icon: <SiNetlify size={36} />, iconName: 'Netlify' },
    // { id: 19, icon: <FaWix size={36} />, iconName: 'Wix' }
]

export default function LogoCloudDemoPage() {
    return (
        <section className="bg-black overflow-hidden py-16 w-full">
            <div className="m-auto max-w-7xl px-6">
                {/* Эта структура отвечает за адаптивную верстку */}
                <div className="flex flex-col items-center md:flex-row">
                    {/* На экранах 'md' и шире этот блок будет слева с линией */}
                    <div className="flex-shrink-0 text-center md:text-right md:max-w-44 md:border-r md:border-gray-200 dark:md:border-gray-800 md:pr-6">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Empowering Business Through Technology</p>
                    </div>
                    {/* На маленьких экранах этот блок будет под текстом */}
                    <div className="w-full py-6 md:w-auto md:flex-1">
                        <BlurredInfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}
                            fadeWidth={80} // Ширина затухания по краям
                        >
                            {LOGOS.map((logo) => (
                                <div className="mx-auto w-fit dark:invert">{logo.icon}</div>
                            ))}
                        </BlurredInfiniteSlider>
                    </div>
                </div>
            </div>
        </section>
    )
}
