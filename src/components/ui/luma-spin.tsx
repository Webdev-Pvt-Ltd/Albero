export const Spinner = () => {
    return (
        <div className="relative bg-black w-[65px] aspect-square">
            <span className="absolute rounded-[50px] animate-loaderAnim shadow-[inset_0_0_0_3px] shadow-gray-800 dark:shadow-gray-100" />
            <span className="absolute rounded-[50px] animate-loaderAnim animation-delay shadow-[inset_0_0_0_3px] shadow-gray-800 dark:shadow-gray-100" />
            <style>
                {`
                    @keyframes loaderAnim {
                        0% {
                            inset: 0 35px 35px 0;
                        }
                        12.5% {
                            inset: 0 35px 0 0;
                        }
                        25% {
                            inset: 35px 35px 0 0;
                        }
                        37.5% {
                            inset: 35px 0 0 0;
                        }
                        50% {
                            inset: 35px 0 0 35px;
                        }
                        62.5% {
                            inset: 0 0 0 35px;
                        }
                        75% {
                            inset: 0 0 35px 35px;
                        }
                        87.5% {
                            inset: 0 0 35px 0;
                        }
                        100% {
                            inset: 0 35px 35px 0;
                        }
                    }
                    .animate-loaderAnim {
                        animation: loaderAnim 1.5s infinite;
                    }
                    .animation-delay {
                        animation-delay: -0.75s;
                    }
                `}
            </style>
        </div>
    )
}
