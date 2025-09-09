import { Link } from 'react-router-dom'
import { FlowButton } from '../../ui/flow-button'
import { Glitchy404 } from '../../ui/glitchy-404-1'

function NotFound() {
    return (
        <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white">
            <Glitchy404 />
            <h1 className="text-5xl font-bold mb-2 text-center md:text-justify">Page | Not Found</h1>
            <p className="text-2xl font-medium mb-2 text-center md:text-justify">The page you are looking for does not exist.</p>

            <Link
                to="/"
                className="mt-4">
                <FlowButton text="GO HOME" />
            </Link>
        </div>
    )
}

export default NotFound
