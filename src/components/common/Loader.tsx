import { Spinner } from '../ui/luma-spin'
import Logo from '../../assets/images/common/loading.png'

export default function Loader() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-black">
            <div className="w-full lg:w-[30vw] h-[25vh] mb-8">
                <img
                    src={Logo}
                    alt="Loading..."
                    className="w-full h-full object-cover"
                />
            </div>
            <Spinner />
        </div>
    )
}
