import { Badge } from '@/components/ui/badge'
import { Check, X, BarChart3, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { FaHandshake, FaStopwatch } from 'react-icons/fa'
import { RiCustomerService2Line } from 'react-icons/ri'

export default function WhyChooseUs() {
    const features = [
        {
            name: '24/7 Customer Support',
            icon: <RiCustomerService2Line className="w-5 h-5 text-white" />,
            us: true,
            others: false
        },
        {
            name: 'Customizable Solutions',
            icon: <MdOutlineDashboardCustomize className="w-5 h-5 text-white" />,
            us: true,
            others: false
        },
        {
            name: 'Affordable Pricing',
            icon: <DollarSign className="w-5 h-5 text-white" />,
            us: true,
            others: true
        },
        {
            name: 'Fast Implementation',
            icon: <FaStopwatch className="w-5 h-5 text-white" />,
            us: true,
            others: false
        },
        {
            name: 'Advanced Analytics',
            icon: <BarChart3 className="w-5 h-5 text-white" />,
            us: true,
            others: false
        },
        {
            name: 'User-Friendly Dashboard',
            icon: <FaHandshake className="w-5 h-5 text-white" />,
            us: true,
            others: false
        }
    ]

    return (
        <div className="bg-black px-5 py-12 md:py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl"></div>
            </div>

            <div className="text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}>
                    <Badge
                        variant="outline"
                        className="mb-6 text-white">
                        Why Choose Us
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Your Success is Our Priority</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        See how we stack up against the competition with our premium features and dedicated support
                    </p>
                </motion.div>
            </div>

            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}>
                {/* Desktop Table View (hidden on mobile) */}
                <div className="hidden md:block bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-2xl shadow-blue-900/20">
                    <div className="grid grid-cols-3 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] p-1">
                        <div className="p-6 text-left flex items-center">
                            <h3 className="font-semibold text-lg text-white">Features</h3>
                        </div>
                        <div className="p-6 text-center bg-gradient-to-r from-zinc-900/30 to-zinc-800/20 relative">
                            <div className="absolute inset-0 bg-[#262626]"></div>
                            <span className="font-semibold text-lg text-white relative z-10">Our Company</span>
                            <div className="absolute top-2 right-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                        <div className="p-6 text-center">
                            <span className="font-semibold text-lg text-white">Others</span>
                        </div>
                    </div>

                    <div className="divide-y divide-white/5">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                className="grid grid-cols-3 hover:bg-white/5 transition-colors duration-300"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}>
                                <div className="p-6 text-left flex items-center gap-3">
                                    <div className="bg-[#262626] p-2 rounded-lg">{feature.icon}</div>
                                    <span className="text-white font-medium">{feature.name}</span>
                                </div>
                                <div className="p-6 text-center bg-black/10">
                                    {feature.us ? (
                                        <div className="flex justify-center items-center">
                                            <div className="bg-green-900/20 p-2 rounded-full">
                                                <Check className="text-green-400 w-5 h-5" />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex justify-center items-center">
                                            <div className="bg-red-900/20 p-2 rounded-full">
                                                <X className="text-red-400 w-5 h-5" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 text-center">
                                    {feature.others ? (
                                        <div className="flex justify-center items-center">
                                            <div className="bg-green-900/20 p-2 rounded-full">
                                                <Check className="text-green-400 w-5 h-5" />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex justify-center items-center">
                                            <div className="bg-red-900/20 p-2 rounded-full">
                                                <X className="text-red-400 w-5 h-5" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Card View (shown on mobile) */}
                <div className="md:hidden space-y-4 max-w-4xl mx-auto">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-900/30 to-blue-800/20 px-6 py-3 rounded-full">
                            <span className="font-semibold text-white">Comparison</span>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            className="bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden shadow-lg shadow-blue-900/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}>
                            <div className="p-4 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] flex items-center gap-3">
                                <div className="bg-[#262626] p-2 rounded-lg">{feature.icon}</div>
                                <span className="text-white font-medium">{feature.name}</span>
                            </div>

                            <div className="divide-y divide-white/5">
                                {/* Our Company Row */}
                                <div className="p-4 flex justify-between items-center bg-blue-900/10">
                                    <span className="text-white font-medium">Our Company</span>
                                    {feature.us ? (
                                        <div className="bg-green-900/20 p-2 rounded-full">
                                            <Check className="text-green-400 w-5 h-5" />
                                        </div>
                                    ) : (
                                        <div className="bg-red-900/20 p-2 rounded-full">
                                            <X className="text-red-400 w-5 h-5" />
                                        </div>
                                    )}
                                </div>

                                {/* Others Row */}
                                <div className="p-4 flex justify-between items-center">
                                    <span className="text-white font-medium">Others</span>
                                    {feature.others ? (
                                        <div className="bg-green-900/20 p-2 rounded-full">
                                            <Check className="text-green-400 w-5 h-5" />
                                        </div>
                                    ) : (
                                        <div className="bg-red-900/20 p-2 rounded-full">
                                            <X className="text-red-400 w-5 h-5" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-black/10 border-1 border-white/30 p-6 rounded-2xl max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-white mb-3">Ready to experience the difference?</h3>
                        <p className="text-gray-400 mb-4">Join hundreds of satisfied clients who've chosen our premium services</p>

                        <button className="relative inline-block font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-yellow-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-yellow-600 hover:outline-white/30 hover:outline-1">
                            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                            <span className="relative z-10 block px-4 py-2 rounded-2xl bg-neutral-950">
                                <div className="relative z-10 flex items-center space-x-3">
                                    <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-yellow-300">
                                        Get Started Today
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-yellow-300">
                                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                    </svg>
                                </div>
                            </span>
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
