import SEO from '@/components/user/common/SEO'
import TermsAndPolicies from '@/components/user/terms/TermsAndPolicies'

export default function Terms() {
    return (
        <div>
            {/* SEO */}
            <SEO
                title="Terms & Policies - Albero"
                description="Read Albero's Terms & Policies to understand the rules, intellectual property rights, and limitations of liability when using our services."
                keywords="Albero terms and policies, website terms, service agreement, intellectual property, liability, user agreement, rules, policies"
                url="https://www.albero.in/terms-and-policies"
                canonical="https://www.albero.in/terms-and-policies"
                image="https://www.albero.in/og-image.png"
                type="website"
            />

            {/* Components */}
            <TermsAndPolicies />
        </div>
    )
}
