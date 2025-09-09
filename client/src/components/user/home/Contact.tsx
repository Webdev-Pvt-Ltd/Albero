import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // console.log('Form submitted:', formData);
        // Handle form submission
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section
            id="contact"
            className="bg-black px-5 py-12 md:py-20 text-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <Badge
                        variant="outline"
                        className="mb-6 text-white text-xl">
                        Contact Us
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Your Website Today</h2>
                    <p className="text-lg text-white max-w-2xl mx-auto">
                        Ready to start your project? Get in touch with us for a free consultation and quote.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div>
                        <Card className="p-8">
                            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Phone</label>
                                    <Input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        rows={4}
                                        required
                                    />
                                </div>

                                <button className="w-full text-zinc-200 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(143,140,140,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
                                    Send Message
                                </button>
                            </form>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <span>contact@webdevagency.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <span>+91 98765 43210</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span>Mumbai, India</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Follow us</h4>
                            <div className="flex space-x-4">
                                <Button
                                    variant="outline"
                                    size="icon">
                                    <Facebook className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon">
                                    <Twitter className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon">
                                    <Linkedin className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon">
                                    <Instagram className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <Card className="p-6 bg-[#262626] text-primary-foreground rounded-2xl shadow-lg">
                            <h4 className="text-xl font-bold mb-3 text-white">✨ Free Consultation</h4>
                            <p className="text-gray-300 leading-relaxed mb-2">
                                Have a project idea in mind or need expert guidance with your development? Enjoy a{' '}
                                <span className="font-semibold text-white">free 30-minute consultation</span>
                                with our team to discuss your <span className="italic">goals, challenges,</span>
                                and the best way forward.
                            </p>
                            <div className="mt-3 text-sm text-gray-400">No obligations • 100% confidential • Expert advice</div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
