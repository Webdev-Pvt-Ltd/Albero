import SEO from '@/components/user/common/SEO'
import RefundPolicy from '@/components/user/refund/RefundPolicy'
import { refundSEO } from '@/constants/seo'

export default function Refund() {
    return (
        <div>
            {/* SEO */}
            <SEO
                title={refundSEO.title}
                description={refundSEO.description}
                keywords={refundSEO.keywords}
                url={refundSEO.url}
                canonical={refundSEO.canonical}
                image={refundSEO.image}
                type={refundSEO.type}
            />

            {/* Components */}
            <RefundPolicy />
        </div>
    )
}
