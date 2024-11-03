import Image from "next/image"
import MobileLogo from "@/assets/MobileLogo.svg"
import leftlogo from "@/assets/LeftLogo.svg"
import rightlogo from "@/assets/RightLogo.svg"

export default function HeroLogo(){
    return<div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center h-full">
        {/* logo for smaller screen */}
        <div className="lg:hidden h-10"><Image src={MobileLogo} alt="GDG-Logo"/></div> 
       <div className=" h-52 justify-center w-[100%] hidden lg:flex p-5"><Image src={leftlogo} alt="GDG-Logo"/></div> 
        <div className="text-center lg:text-6xl text-5xl font-Lato text-[#656C73]"><strong className="text-[#EA4335]">G</strong>oogle<br/><strong className="text-[#4285F4]">D</strong>eveloper<br/><strong className="text-[#34A853]">G</strong>roups</div>
        <div className=" h-52 justify-center w-[100%] hidden lg:flex p-5"><Image src={rightlogo} alt="GDG-Logo"/></div>
    </div>
    </div>
}