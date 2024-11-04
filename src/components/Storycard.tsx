import Image from "next/image";
import person from "@/assets/image.png"
import x from "@/assets/twitter.svg"
import linkdin from "@/assets/Linkdin.svg"

export default function Storycard(){
    return <div className="w-5/6 bg-amber-300 h-auto rounded-3xl relative">
        <div className="sm:p-5 px-5 py-5 flex lg:h-1/2 h-2/3 flex-col">
        <h3 className="lg:text-lg text-sm  text-center text-black dark:text-gray-500">“Thanks to GDG on campus I got 2 internship offers”</h3>
        <p className="text-xs text-right lg:text-center text-black dark:text-gray-500 lg:text-base">-Amar Deep Rao</p>
        </div>
        <div className="absolute right-0 lg:-bottom-20 -bottom-24 flex flex-col justify-center items-center">
            <Image src={person} alt="image" className="lg:w-32 lg:h-32 w-20 h-20 rounded-full"/>
            <div className="flex flex-row gap-2 mt-2">
                <Image src={x} alt="twitter" className="w-5 h-5 lg:w-10 lg:h-10"></Image>
                <Image src={linkdin} alt="twitter" className="w-5 h-5 lg:w-10 lg:h-10"></Image>
            </div>
            </div>
    </div>
}