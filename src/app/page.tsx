
import Image from "next/image";
import line from "@/assets/line1.svg"
import line2 from "@/assets/line2.svg"
import HeroLogo from "@/components/HeroLogo"
import Square from "@/assets/BlueSquare.svg"
import Circle from "@/assets/GreenCircle.svg"
import Triangle from "@/assets/Triangle.svg"
import SquareGray from "@/assets/Square.svg"
import Group from "@/assets/Group.svg"
import arc from "@/assets/arc.svg"
export default function Home() {
  return (
    <div className="w-min-[1280px] mx-auto ">  

      {/* Hero Section */}
      <div className="lg:h-[80vh] mb-20">
     <div><Image src={Square} alt="Element-Square" className="lg:h-1/2 h-1/6 absolute lg:left-0 -left-16 top-[40vh] -z-10"/></div>
     <div><Image src={Circle} alt="Element-Square" className="lg:h-1/2 h-1/6 absolute lg:right-0 -right-16 top-[50vh] -z-10"/></div>
      <div className="absolute -top-4 right-0 -z-10 h-screen w-auto"><Image src={line} alt="line"/></div>
      <div className="absolute top-[1000px] left-[450px] -z-10 h-[100vh] w-full lg:block hidden"><Image src={line2} alt="line"/></div>

      <div className="w-1/2 m-auto mt-32"><HeroLogo></HeroLogo></div>
      <div className="w-full flex  justify-center mt-5">
        <h3 className="font-Lato text-black dark:text-gray-500 font-normal text-center mt-5 text-xl">On Campus<br/><strong className="text-[#FBBC04] mt-10 text-2xl leading-10">BIET</strong>, Lucknow</h3>
       </div>
      <div className="flex justify-center gap-7 mt-10">
        <button className="p-2 font-semibold px-10 text-lg border-2 border-black dark:border-gray-500 bg-[#4285F4] rounded-lg text-white ">Join Chapter</button>
        <button className="p-2 font-semibold px-10 text-lg border-2 border-black dark:border-gray-500 text-[#4285F4] rounded-lg">Open Position</button>
      </div>
      </div>
      {/* Event Section */}
      <div className="flex justify-center -z-10 flex-col h-[100vh]">
        <div className="flex gap-4 flex-row items-center justify-center">
          <h3 className="tracking-widest text-5xl font-semibold text-center justify-center relative z-10 text-black dark:text-gray-500">Events</h3>
          <div className="h-40 w-40 lg:block hidden bg-yellow-500 rounded-full absolute lg:left-[410px] -z-10 border-black border-2"></div>
         </div>
         <div className="w-4/5 h-[400px] bg-slate-600 bg-opacity-25 mt-16 m-auto rounded-3xl relative"> 
         <Image src={Triangle} alt="Triangle" className="absolute -right-20 -bottom-20 -z-0"/>
         <Image src={SquareGray} alt="Triangle" className="absolute -left-20 bottom-[-10rem] -z-0"/>
         </div>
       </div>

      <div className="grid grid-cols-2 gap-5 w-11/12 m-auto">
        <div className="lg:w-4/5 w-full h-auto flex justify-center items-center">
          <p className=" sm:text-sm md:text-base lg:text-2xl text-justify text-black dark:text-gray-500">At BIET on campus GDG we are creating a dynamic, ever-growing community of tech enthusiasts who are passionate about <strong className="text-[#34A853]">technology</strong>, <strong className="text-[#4285F4]">development</strong>, and the <strong className="text-[#EA4335]">joy</strong> of continuous learning. </p>
        </div>
        <div className="w-full h-auto">
        <Image src={Group} alt="GDG-group-illustration"/>
        </div>
      </div>
      <div className="m-auto w-4/6 mt-60 flex justify-center flex-col text-[#656C73]">
        <p className=" pl-10 text-xl font-semibold text-black dark:text-gray-500">We</p>
        <p className="lg:text-7xl md:text-5xl sm:text-2xl text-lg text-center text-black dark:text-gray-500"><strong className="text-[#34A853] bg-green-200 dark:bg-opacity-0 md:rounded-2xl sm:rounded-lg px-3 mx-2">Learn</strong>,<strong className="text-[#EA4335] dark:bg-opacity-0 bg-red-200 rounded-2xl px-3">Innovate</strong> & <strong className="text-[#4285F4] dark:bg-opacity-0 bg-blue-200 rounded-2xl px-3 mx-1">Create</strong></p>
        <p className="text-center m-5 text-[#FBBC04] text-2xl font-base">while having fun.</p>
        {/* <div><Image src={arc} alt="arc" className="right-10 absolute"/></div> */}
       </div>
    </div>
  );
}
