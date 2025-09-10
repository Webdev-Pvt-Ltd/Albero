import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from '../user/common/NavLink'
import { CopyrightIcon } from 'lucide-react'

interface LinkItem {
    href: string
    label: string
}

interface FooterProps {
    leftLinks: LinkItem[]
    rightLinks: LinkItem[]
    copyrightText: string
    barCount?: number
}

const Footer: React.FC<FooterProps> = ({ leftLinks, rightLinks, copyrightText, barCount = 23 }) => {
    const waveRefs = useRef<(HTMLDivElement | null)[]>([])
    const footerRef = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const animationFrameRef = useRef<number | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.2 }
        )

        if (footerRef.current) {
            observer.observe(footerRef.current)
        }

        return () => {
            if (footerRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(footerRef.current)
            }
        }
    }, [])

    useEffect(() => {
        let t = 0

        const animateWave = () => {
            const waveElements = waveRefs.current
            let offset = 0

            waveElements.forEach((element, index) => {
                if (element) {
                    offset += Math.max(0, 20 * Math.sin((t + index) * 0.3))
                    element.style.transform = `translateY(${index + offset}px)`
                }
            })

            t += 0.1
            animationFrameRef.current = requestAnimationFrame(animateWave)
        }

        if (isVisible) {
            animateWave()
        } else if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
            animationFrameRef.current = null
        }

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
                animationFrameRef.current = null
            }
        }
    }, [isVisible])

    return (
        <footer
            ref={footerRef}
            className="bg-black text-white relative flex flex-col w-full h-full justify-between select-none">
            <div className="container mx-auto flex flex-col md:flex-row justify-between w-full gap-4 pt-8 pb-24 px-4">
                <div className="space-y-2">
                    <ul className="flex flex-wrap gap-4">
                        {leftLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href}>
                                    <span className="text-sm hover:text-sky-400">{link.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm mt-4 flex items-center gap-x-1">
                        <CopyrightIcon className="h-4 w-4" />
                        {copyrightText}
                    </p>
                </div>
                <div className="space-y-4">
                    <ul className="flex flex-wrap gap-4">
                        {rightLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href}>
                                    <span className="text-sm hover:text-sky-400">{link.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="text-center md:text-right mt-4">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-sm hover:underline inline-flex items-center">
                            Back to top
                        </button>
                    </div>
                </div>
            </div>
            <div
                id="waveContainer"
                aria-hidden="true"
                style={{ overflow: 'hidden', height: 200 }}>
                <div style={{ marginTop: 0 }}>
                    {Array.from({ length: barCount }).map((_, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                waveRefs.current[index] = el
                            }}
                            className="wave-segment"
                            style={{
                                height: `${index + 1}px`,
                                backgroundColor: 'rgb(255, 255, 255)',
                                transition: 'transform 0.1s ease',
                                willChange: 'transform',
                                marginTop: '-2px'
                            }}
                        />
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
