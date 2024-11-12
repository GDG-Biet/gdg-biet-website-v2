import Image from "next/image";
import line from "@/assets/line1.svg"
import Square from "@/assets/BlueSquare.svg"
import Circle from "@/assets/GreenCircle.svg"
import MobileLogo from "@/assets/MobileLogo.svg"
import leftlogo from "@/assets/LeftLogo.svg"
import rightlogo from "@/assets/RightLogo.svg"

export default function Hackathon(){
    return(
        <>
       {/* Hero Section */}
      <div className="lg:h-[90vh] pt-20">
        <div>
          <Image
            src={Square}
            alt="Element-Square"
            className="lg:h-1/2 h-1/6 absolute lg:left-0 -left-16 md:top-[40vh] top-[20vh] -z-0"
          />
        </div>
        <div>
          <Image
            src={Circle}
            alt="Element-Square"
            className="lg:h-1/2 h-1/6 absolute lg:right-0 -right-16 md:top-[50vh] top-[30vh] -z-0"
          />
        </div>
        <div className="absolute -top-4 right-0 -z-0 h-screen w-auto">
          <Image src={line} alt="line" />
        </div>

        <div className="w-1/2 m-auto mt-32">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center h-full">
            {/* logo for smaller screen */}
            <div className="lg:hidden h-10">
              <Image src={MobileLogo} alt="GDG-Logo" />
            </div>
            <div className=" h-72 justify-center w-[100%] hidden lg:flex p-5">
              <Image src={leftlogo} alt="GDG-Logo" />
            </div>
            <div className="text-center lg:text-9xl text-5xl font-Lato dark:text-white text-gray-400 font-bold">
              <strong className="text-yellow-500">H</strong>ack
              <br />
            </div>
            <div className=" h-72 justify-center w-[100%] hidden lg:flex p-5">
              <Image src={rightlogo} alt="GDG-Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-40 text-5xl text-center font-mono shadow-2xl font-thin"> <p>Coming Soon</p> </div>
       </>
    )
}
