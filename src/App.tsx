import './App.css'
import { Suspense, lazy, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Loader from './components/common/Loader'
import NotFound from './components/common/NotFound'
import { Navbar } from './components/ui/navbar'
import OfflinePage from './components/common/OfflinePage'
import Footer from './components/animated-footer'

// Lazy load pages
const Home = lazy(() => import('./pages/user/Home'))

export default function App() {
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(() => {
        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    if (!isOnline) {
        return <OfflinePage />
    }

    return (
        <div>
            {/* <Navbar /> */}
            <Navbar />

            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Routes>
            </Suspense>

            {/* Footer */}
            <Footer
                leftLinks={[
                    { href: '/terms', label: 'Terms & policies' },
                    { href: '/privacy-policy', label: 'Privacy policy' }
                ]}
                rightLinks={[
                    { href: '/about', label: 'About' },
                    { href: '/services', label: 'Services' },
                    { href: '/contact', label: 'Contact' },
                    { href: 'https://www.instagram.com/taher_max_', label: 'Instagram' },
                    { href: 'https://github.com/tahermaxse', label: 'Facebook' }
                ]}
                copyrightText="Albero 2025. All Rights Reserved"
                barCount={20}
            />
        </div>
    )
}
