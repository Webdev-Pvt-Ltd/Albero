import apiClient from '@/lib/apiClient'

export interface ContactData {
    name: string
    email: string
    phone: string
    message: string
}

export const sendContactForm = async (data: ContactData) => {
    const response = await apiClient.post('/contact', data)
    return response.data
}
