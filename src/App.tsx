import './App.css'
import { Routes, Route } from 'react-router-dom'

// Components
import { Navbar } from './components/ui/navbar'

// Pages
import Home from './pages/user/Home'

export default function App() {
    return (
        <div className="">
            <Navbar />

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
            </Routes>
        </div>
    )
}
