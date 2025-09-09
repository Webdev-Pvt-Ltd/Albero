const images = {
    alt: 'Feature screenshot',
    step1img1: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1740&auto=format&fit=crop',
    step1img2: 'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1740&auto=format&fit=crop',
    step2img1: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1661&auto=format&fit=crop',
    step2img2: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1170&auto=format&fit=crop',
    step3img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1740&auto=format&fit=crop',
    step4img: 'https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=1170&auto=format&fit=crop',
    step5img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop'
}

const defaultClasses = {
    img: 'rounded-xl border border-neutral-200 border-neutral-800 shadow-2xl shadow-black/10 shadow-neutral-950/50',
    step1img1: 'w-[50%] md:w-[90%] left-0 md:left-0 top-5',
    step1img2: 'w-[60%] md:hidden left-20 md:left-30 top-20',
    step2img1: 'w-[60%] md:hidden md:w-[50%] left-20 md:left-0 top-20',
    step2img2: 'w-[50%] md:w-[90%] left-0 md:0 top-5 md:top-5',
    step3img: 'w-[80%] md:w-[90%] left-0 top-5',
    step4img: 'w-[80%] md:w-[90%] left-0 top-5',
    step5img: 'w-[80%] md:w-[90%] left-0 top-5'
} as const

const TOTAL_STEPS = 5

const steps = [
    {
        id: '1',
        name: 'Step 1',
        title: 'Discovery & Strategy',
        description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project strategy.'
    },
    {
        id: '2',
        name: 'Step 2',
        title: 'Design (UI/UX, Figma prototypes)',
        description: 'Our designers create beautiful, user-friendly interfaces with detailed Figma prototypes for your approval.'
    },
    {
        id: '3',
        name: 'Step 3',
        title: 'Development (Frontend + Backend)',
        description: 'Our developers bring designs to life using modern technologies and best practices for optimal performance.'
    },
    {
        id: '4',
        name: 'Step 4',
        title: 'Testing & QA (Performance, Security)',
        description: 'Rigorous testing ensures your website is secure, fast, and works perfectly across all devices and browsers.'
    },
    {
        id: '5',
        name: 'Step 5',
        title: 'Launch & Ongoing Support',
        description: 'We deploy your website and provide continuous support, maintenance, and updates as needed.'
    }
]

export const processData = {
    badgeTitle: 'Our Process',
    heading: 'How We Bring Your Vision to Life',
    description: 'Our proven 5-step process ensures quality delivery and client satisfaction.',
    images: images,
    defaultClasses: defaultClasses,
    totalSteps: TOTAL_STEPS,
    steps: steps
}
