import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Facebook, Instagram, Linkedin, Loader2, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { useContactForm } from '@/hooks/user/useContactForm'
import { contactData } from '@/constants/contact'
import axios from 'axios'
import toast from 'react-hot-toast'

export const Contact = () => {
    const { submitForm, loading } = useContactForm()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const success = await submitForm(formData)

        if (success) {
            await handleSubmitGoogleForm()
            setFormData({ name: '', email: '', phone: '', message: '' })
        }
    }

    const handleSubmitGoogleForm = async () => {
        const scriptURL = import.meta.env.VITE_SHEET_URL

        const formDataSheet = new FormData()

        // Add form fields
        formDataSheet.append('Name', formData.name)
        formDataSheet.append('Email', formData.email)
        formDataSheet.append('Phone', formData.phone || 'N/A')
        formDataSheet.append('Message', formData.message)

        // Add date and time
        const today = new Date()
        const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
        const formattedTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
        formDataSheet.append('Date', formattedDate)
        formDataSheet.append('Time', formattedTime)

        try {
            const response = await axios.post(scriptURL as string, formDataSheet, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            if (response.status !== 200) {
                throw new Error('Failed to submit to Google Sheets')
            }

            return true
        } catch {
            toast.error('Something went wrong! Please try again later.')
            return false
        }
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
                        {contactData.badgeTitle}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{contactData.title}</h2>
                    <p className="text-lg text-white max-w-2xl mx-auto">{contactData.subtitle}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div>
                        <Card className="p-8">
                            <h3 className="text-2xl font-bold mb-6">{contactData.form.title}</h3>
                            <form
                                onSubmit={handleSubmit}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && e.target instanceof HTMLTextAreaElement) {
                                        e.stopPropagation()
                                        handleSubmit(e)
                                    }
                                }}
                                className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">{contactData.form.nameLabel}</label>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={contactData.form.namePlaceholder}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">{contactData.form.emailLabel}</label>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={contactData.form.emailPlaceholder}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">{contactData.form.phoneLabel}</label>
                                    <Input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder={contactData.form.phonePlaceholder}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">{contactData.form.messageLabel}</label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={contactData.form.messagePlaceholder}
                                        rows={4}
                                        required
                                    />
                                </div>

                                <button className="w-full text-zinc-200 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(143,140,140,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700">
                                    {loading ? <Loader2 className="animate-spin mx-auto text-white" /> : contactData.form.buttonLabel}
                                </button>
                            </form>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">{contactData.card.title}</h3>
                            <div className="space-y-4">
                                <a
                                    href={`mailto:${contactData.card.email}`}
                                    className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <span>{contactData.card.email}</span>
                                </a>
                                <a
                                    href={`tel:${contactData.card.phone}`}
                                    className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <span>{contactData.card.phone}</span>
                                </a>
                                <a
                                    className="flex items-center space-x-3"
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.card.address)}`}
                                    target="_blank"
                                    rel="noreferrer">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span>{contactData.card.address}</span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">{contactData.link.title}</h4>
                            <div className="flex space-x-4">
                                <a
                                    href={contactData.link.facebook}
                                    target="_blank"
                                    rel="noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon">
                                        <Facebook className="h-4 w-4" />
                                    </Button>
                                </a>
                                <a
                                    href={contactData.link.twitter}
                                    target="_blank"
                                    rel="noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon">
                                        <Twitter className="h-4 w-4" />
                                    </Button>
                                </a>
                                <a
                                    href={contactData.link.linkedin}
                                    target="_blank"
                                    rel="noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon">
                                        <Linkedin className="h-4 w-4" />
                                    </Button>
                                </a>
                                <a
                                    href={contactData.link.instagram}
                                    target="_blank"
                                    rel="noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon">
                                        <Instagram className="h-4 w-4" />
                                    </Button>
                                </a>
                            </div>
                        </div>

                        <Card className="p-6 bg-[#262626] text-primary-foreground rounded-2xl shadow-lg">
                            <h4 className="text-xl font-bold mb-3 text-white">{contactData.otherCard.title}</h4>
                            <p className="text-gray-300 leading-relaxed mb-2">
                                {contactData.otherCard.subtitle1} <span className="font-semibold text-white">{contactData.otherCard.subtitle2}</span>
                                {contactData.otherCard.subtitle3} <span className="italic">{contactData.otherCard.subtitle4}</span>
                                {contactData.otherCard.subtitle5}.
                            </p>
                            <div className="mt-3 text-sm text-gray-200">{contactData.otherCard.tagline}</div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
