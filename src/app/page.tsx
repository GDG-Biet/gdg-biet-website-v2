import Image from "next/image";
import line from "@/assets/line1.svg"
import line2 from "@/assets/line2.svg"
import HeroLogo from "@/components/HeroLogo"
import Storycard from "@/components/Storycard";
// import FAQs from "@/components/Faq";
import Square from "@/assets/BlueSquare.svg"
import Circle from "@/assets/GreenCircle.svg"
import Triangle from "@/assets/Triangle.svg"
import SquareGray from "@/assets/Square.svg"
import Group from "@/assets/Group.svg"
import arc from "@/assets/arc.svg"
import hexagon from "@/assets/hexagon.svg"
import ActionAreaCard from "@/components/ui/Card";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
  // const images = [
  //   { src: "/placeholder.svg?height=200&width=300", alt: "Image 1" },
  //   { src: "/placeholder.svg?height=250&width=350", alt: "Image 2" },
  //   { src: "/placeholder.svg?height=180&width=320", alt: "Image 3" },
  //   { src: "/placeholder.svg?height=220&width=280", alt: "Image 4" },
  //   { src: "/placeholder.svg?height=240&width=360", alt: "Image 5" },
  // ]

  return (
    <div className="w-min-[1280px] mx-auto">  

      {/* Hero Section */}
      <div className="lg:h-[80vh] mb-20">
     <div><Image src={Square} alt="Element-Square" className="lg:h-1/2 h-1/6 absolute lg:left-0 -left-16 top-[40vh] -z-0"/></div>
     <div><Image src={Circle} alt="Element-Square" className="lg:h-1/2 h-1/6 absolute lg:right-0 -right-16 top-[50vh] -z-0"/></div>
      <div className="absolute -top-4 right-0 -z-10 h-screen w-auto"><Image src={line} alt="line"/></div>
      <div className="absolute top-[1000px] left-[450px] -z-10 h-[200vh] w-full lg:block hidden"><Image src={line2} alt="line"/></div>

      <div className="w-1/2 m-auto mt-32"><HeroLogo></HeroLogo></div>
      <div className="w-full flex  justify-center mt-5">
        <h3 className="font-Lato text-black dark:text-white font-normal text-center mt-5 text-xl">On Campus<br/><strong className="text-[#FBBC04] mt-10 text-2xl leading-10">BIET</strong>, Lucknow</h3>
       </div>
      <div className="flex justify-center gap-7 mt-10">
        <button className="p-2 font-semibold px-10 text-lg border-2 border-black dark:border-gray-500 bg-[#4285F4] rounded-lg text-white ">Join Chapter</button>
        <button className="p-2 font-semibold px-10 text-lg border-2 border-black dark:border-gray-500 text-[#4285F4] rounded-lg">Open Position</button>
      </div>
      </div>
      {/* Event Section */}
      <div className="flex justify-center -z-10 flex-col h-[90vh] lg:h-[80vh]">
        <div className="flex gap-4 flex-row items-center justify-center">
          <h3 className="tracking-widest text-5xl font-semibold text-center justify-center relative z-10 text-black dark:text-gray-500">Events</h3>
          <div className="h-40 w-40 lg:block hidden bg-yellow-500 rounded-full absolute lg:left-[410px] -z-10 border-black border-2"></div>
         </div>
         <div className="w-4/5 h-[425px] bg-slate-600 bg-opacity-25 mt-16 m-auto rounded-3xl relative">
         <div className="justify-center flex">
         <Carousel className="">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-6 my-10" ><ActionAreaCard /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-6 my-10" ><ActionAreaCard /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-6 my-10" ><ActionAreaCard /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-6 my-10" ><ActionAreaCard /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-6 my-10" ><ActionAreaCard /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 mx-6 my-10" ><ActionAreaCard /></CarouselItem>

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          </div>
         

         {/* <Carousel items={cards} /> */}

         <Image src={Triangle} alt="Triangle" className="absolute -right-20 -bottom-20 -z-0"/>
         <Image src={SquareGray} alt="Triangle" className="absolute -left-20 bottom-[-10rem] -z-10"/>
         </div>
       </div>
        {/* About Section */}
      <div className="grid sm:grid-cols-2 gap-5 w-11/12 m-auto">
        <div className="w-full h-auto flex justify-center items-center">
          <p className="lg:w-4/5 text-lg lg:text-2xl text-justify text-black dark:text-gray-500">At BIET on campus GDG we are creating a dynamic, ever-growing community of tech enthusiasts who are passionate about <strong className="text-[#34A853]">technology</strong>, <strong className="text-[#4285F4]">development</strong>, and the <strong className="text-[#EA4335]">joy</strong> of continuous learning. </p>
        </div>
        <div className="w-full h-auto">
        <Image src={Group} alt="GDG-group-illustration"/>
        </div>
      </div>
      <div className="m-auto lg:mt-32 mt-10 sm:w-4/6 flex justify-center flex-col text-[#656C73]">
        <p className=" pl-10 text-xl font-semibold text-black dark:text-gray-500">We</p>
        <p className="lg:text-7xl md:text-5xl text-4xl text-center text-black dark:text-gray-500"><strong className="text-[#34A853] bg-green-200 dark:bg-opacity-0 md:rounded-2xl rounded-xl px-3 dark:px-0 mx-2">Learn</strong>,<strong className="text-[#EA4335] dark:bg-opacity-0 dark:px-1 bg-red-200 rounded-xl px-3">Innovate</strong> & <strong className="text-[#4285F4] dark:bg-opacity-0 dark:px-0 bg-blue-200 rounded-xl px-3 mx-1">Create</strong></p>
        <p className="text-center m-3 text-[#FBBC04] text-2xl font-base">while having fun.</p>
        <div><Image src={arc} alt="arc" className="lg:right-28 right-0  absolute h-16 lg:h-48 "/></div>
        <div><Image src={hexagon} alt="arc" className=" sm:left-10 absolute h-24 lg:h-48 "/></div>
       </div>

      {/* sponsers */}
      <div className="flex justify-center -z-10 flex-col sm:mt-36 mt-24">
        <h3 className="tracking-widest text-5xl font-semibold text-center relative z-10 text-black dark:text-gray-500">Sponsors</h3>
        <div className="w-full bg-slate-200 h-16 mt-5">

        </div>
      </div>
      {/* Story*/}
      <div className="flex justify-center -z-10 flex-col h-[60vh] lg:h-[70vh]">
        <h3 className="tracking-widest text-5xl font-semibold text-center relative z-10 text-black dark:text-gray-500">Stories</h3>
        <div className=" bg-blue-600 bg-opacity-50 backdrop-blur-xl p-10 lg:p-20 rounded-3xl mt-5 flex justify-center items-center">
          <Storycard></Storycard>
        </div>
      </div>
      {/* FAQs*/}
      <div className="flex justify-center -z-10 flex-col sm:mt-36 mt-24">
        <h3 className="tracking-widest text-5xl font-semibold text-center relative z-10 text-black dark:text-gray-500">FAQs</h3>
        <div className="w-full mt-5">
          <div className="md:w-5/6 bg-red-200 m-auto">
          {/* <FAQs></FAQs> */}
          </div>
        </div>
      </div>
    </div>
  );
}
