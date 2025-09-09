import React from 'react'

const BackToTopButton: React.FC = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group relative h-[55px] w-[55px] flex items-center justify-center gap-2 rounded-full bg-neutral-900 shadow-[0_0_15px_rgba(181,160,255,0.4)] transition-all duration-300 overflow-hidden cursor-pointer hover:w-[160px] hover:rounded-[50px] hover:bg-gradient-to-r hover:bg-[#262626]">
                {/* SVG Icon */}
                <svg
                    className="h-4 w-4 text-white transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 384 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 
          0l-160 160c-12.5 12.5-12.5 
          32.8 0 45.3s32.8 12.5 45.3 
          0L160 141.2V448c0 17.7 
          14.3 32 32 32s32-14.3 
          32-32V141.2L329.4 246.6c12.5 
          12.5 32.8 12.5 45.3 
          0s12.5-32.8 0-45.3l-160-160z"
                    />
                </svg>

                {/* Text on Hover */}
                <span className="absolute opacity-0 translate-y-4 text-[0px] font-medium tracking-wide text-white transition-all duration-200 group-hover:static group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-[14px]">
                    Back to Top
                </span>
            </button>
        </div>
    )
}

export default BackToTopButton
