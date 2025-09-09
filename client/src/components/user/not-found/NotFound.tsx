import { Link } from 'react-router-dom'
import { FlowButton } from '../../ui/flow-button'
import { Glitchy404 } from '../../ui/glitchy-404-1'
import SEO from '../common/SEO'

function NotFound() {
    return (
        <div>
            {/* SEO */}
            <SEO
                title="Albero - Page Not Found (404)"
                description="The page you are looking for does not exist. Return to the homepage and explore our web development and digital growth solutions."
                keywords="Albero, 404 error, page not found, web development, digital solutions, website design, custom web apps, business growth"
                url="https://www.albero.in/"
                canonical="https://www.albero.in/"
                image="https://www.albero.in/og-image.png"
                type="website"
            />

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
        </div>
    )
}

export default NotFound
