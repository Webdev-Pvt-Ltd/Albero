import { useState } from 'react'
import { sendContactForm, type ContactData } from '@/services/contactService'
import { showSuccess, showError } from '@/lib/toast'

export const useContactForm = () => {
    const [loading, setLoading] = useState(false)

    const submitForm = async (formData: ContactData) => {
        setLoading(true)
        try {
            const res = await sendContactForm(formData)
            showSuccess('Message sent successfully!')
            return res
        } catch (err: unknown) {
            if (typeof err === 'object' && err !== null && 'response' in err) {
                const response = (err as { response?: { data?: { message?: string } } }).response
                showError(response?.data?.message || 'Something went wrong!')
            } else {
                showError('Something went wrong!')
            }
        } finally {
            setLoading(false)
        }
    }

    return { submitForm, loading }
}
