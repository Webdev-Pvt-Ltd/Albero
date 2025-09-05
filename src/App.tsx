import './App.css'
import { Suspense, lazy, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Loader from './components/common/Loader'
import NotFound from './components/common/NotFound'
import { Navbar } from './components/ui/navbar'
import OfflinePage from './components/common/OfflinePage'

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
        </div>
    )
}
