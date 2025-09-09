import SEO from '@/components/user/common/SEO'
import TermsAndPolicies from '@/components/user/terms/TermsAndPolicies'
import { termsSEO } from '@/constants/seo'

export default function Terms() {
    return (
        <div>
            {/* SEO */}
            <SEO
                title={termsSEO.title}
                description={termsSEO.description}
                keywords={termsSEO.keywords}
                url={termsSEO.url}
                canonical={termsSEO.canonical}
                image={termsSEO.image}
                type={termsSEO.type}
            />

            {/* Components */}
            <TermsAndPolicies />
        </div>
    )
}
