import Image from "next/image";
import line from "@/assets/line1.svg"
import line2 from "@/assets/line2.svg"
import Square from "@/assets/BlueSquare.svg"
import Circle from "@/assets/GreenCircle.svg"
import MobileLogo from "@/assets/MobileLogo.svg"
import leftlogo from "@/assets/LeftLogo.svg"
import rightlogo from "@/assets/RightLogo.svg"

export default function Events(){
    return(
        <>
        {/* Hero Section */}
      <div className="lg:h-[80vh] mb-20">
      <div><Image src={Square} alt="Element-Square" className="lg:h-1/2 h-1/6 absolute lg:left-0 -left-16 top-[40vh] -z-0"/></div>
      <div><Image src={Circle} alt="Element-Square" className="lg:h-1/2 h-1/6 absolute lg:right-0 -right-16 top-[50vh] -z-0"/></div>
       <div className="absolute -top-4 right-0 -z-10 h-screen w-auto"><Image src={line} alt="line"/></div>
       {/* <div className="absolute top-[1000px] left-[450px] -z-10 h-[200vh] w-full lg:block hidden"><Image src={line2} alt="line"/></div> */}
 
       <div className="w-1/2 m-auto mt-32">
       
       <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center h-full">
        {/* logo for smaller screen */}
        <div className="lg:hidden h-10"><Image src={MobileLogo} alt="GDG-Logo"/></div> 
       <div className=" h-52 justify-center w-[100%] hidden lg:flex p-5"><Image src={leftlogo} alt="GDG-Logo"/></div> 
        <div className="text-center lg:text-6xl text-5xl font-Lato text-[#656C73]"><strong className="text-[#EA4335]">E</strong>vents<br/></div>
        <div className=" h-52 justify-center w-[100%] hidden lg:flex p-5"><Image src={rightlogo} alt="GDG-Logo"/></div>
    </div>
       </div>
       </div>
       </>
    )
}
