import Image from "next/image";
import person from "@/assets/image.png"

export default function Storycard(){
    return <div className="w-5/6 bg-amber-300 h-auto rounded-3xl relative">
        <div className="sm:p-5 px-5 py-5 flex lg:h-1/2 h-2/3 flex-col">
        <h3 className="lg:text-lg text-sm  text-center text-black font-bold">“Thanks to GDG on campus I got 2 internship offers”</h3>
        <p className="text-xs text-right lg:text-center text-black lg:text-base font-semibold">-Amar Deep Rao</p>
        </div>
        <div className="absolute right-0 lg:-bottom-20 -bottom-24 flex flex-col justify-center items-center">
            <Image src={person} alt="image" className="lg:w-32 lg:h-32 w-20 h-20 rounded-full"/>
            <div className="grid grid-flow-col col-span-2 mt-2 gap-2">
                {/* Twitter */}
                <div className="w-8 h-8 fill-stone-950 dark:fill-white flex justify-center items-center">
                    <svg viewBox="0 0 50 50" width="50px" height="50px">
                        <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"/>
                    </svg>
                </div>
                {/* Linkdin */}
                <div className="w-8 h-8 fill-stone-950 dark:fill-white flex justify-center items-center">
                    <svg width="50px" height="50px" viewBox="-1.5 0 19 19">
                    <path d="M15.917 17.5H.083V1.666h15.834zM5.77 6.427a.96.96 0 0 0-1.032-.96.962.962 0 1 0-.025 1.92h.013a.963.963 0 0 0 1.044-.96zm-.123 1.719H3.803v5.552h1.845zm6.658 2.368c0-1.705-.91-2.5-2.125-2.5a1.832 1.832 0 0 0-1.663.917v-.786H6.67c.025.52 0 5.554 0 5.554h1.848v-3.102a1.264 1.264 0 0 1 .06-.45 1.011 1.011 0 0 1 .946-.676c.67 0 .936.51.936 1.256V13.7h1.846zm-3.8-1.564.013-.019v.019z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
}