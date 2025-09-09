import SEO from '@/components/user/common/SEO'
import RefundPolicy from '@/components/user/refund/RefundPolicy'

export default function Refund() {
    return (
        <div>
            {/* SEO */}
            <SEO
                title="Refund Policy - Albero"
                description="Read Albero's Refund Policy to understand eligibility, non-refundable items, and the refund process. We prioritize your satisfaction and provide clear guidance for refunds."
                keywords="Albero refund policy, refunds, return policy, digital services refund, purchase refund, service refund"
                url="https://www.albero.in/refund-policy"
                canonical="https://www.albero.in/refund-policy"
                image="https://www.albero.in/og-image.png"
                type="website"
            />

            {/* Components */}
            <RefundPolicy />
        </div>
    )
}
