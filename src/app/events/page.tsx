import Image from "next/image";
import line from "@/assets/line1.svg";
import Square from "@/assets/BlueSquare.svg";
import Circle from "@/assets/GreenCircle.svg";
import MobileLogo from "@/assets/MobileLogo.svg";
import leftlogo from "@/assets/LeftLogo.svg";
import rightlogo from "@/assets/RightLogo.svg";
import Eventcard from "@/components/Eventcard";
import eventdata from "@/Data/eventdata.json";
import archiveEvent from "@/Data/archiveEventdata.json";
import ArchiveEventCard from "@/components/ArchiveEventCard";
export default function Events() {
  return (
    <>
      {/* Hero Section */}
      <div className="lg:h-[90vh] pt-20">
        <div className="absolute w-full h-full top-0 bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-20 backdrop-blur-sm -z-10"></div>
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

        <div className="w-4/6 m-auto mt-32">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center h-full">
            {/* logo for smaller screen */}
            <div className="lg:hidden h-10">
              <Image src={MobileLogo} alt="GDG-Logo" />
            </div>
            <div className=" h-72 justify-center w-[100%] hidden lg:flex p-5">
              <Image src={leftlogo} alt="GDG-Logo" />
            </div>
            <div className="text-center lg:text-9xl text-5xl font-Lato dark:text-white text-gray-400 font-bold">
              <strong className="text-[#EA4335]">E</strong>vents
              <br />
            </div>
            <div className=" h-72 justify-center w-[100%] hidden lg:flex p-5">
              <Image src={rightlogo} alt="GDG-Logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 m-auto border-b-4  mb-4 border-gray-500">
        <h1 className="h-auto mt-10 lg:mt-0 lg:text-left font-extrabold lg:text-6xl text-3xl text-center mx-10 rounded-2xl dark:text-red-400 text-slate-500">Upcoming Events</h1>
      </div>
      <div className="h-auto  dark:bg-opacity-0 w-5/6 md:m-auto m-auto p-3 rounded-2xl ">
      {eventdata.map((event) => (
        <div key={event.idx} className='w-full'>
          <Eventcard
            idx={event.idx}
            title={event.title}
            description={event.description}
            image={event.image}
            tech={event.tech}
            link={event.link}
          />
          
        </div>
      ))}

      </div>
      <div className="w-11/12 m-auto border-b-4  mb-4 border-gray-500 mt-20">
        <h1 className="h-auto mt-10 lg:mt-0 lg:text-left font-extrabold lg:text-6xl text-3xl text-center mx-10 rounded-2xl dark:text-red-400 text-slate-500">Archive Events</h1>
      </div>
      <div className="grid grid-cols-2 dark:bg-opacity-0 w-5/6 m-auto p-3 rounded-2xl gap-14">
      {archiveEvent.map((event) => (
        <div key={event.idx} className='w-full '>
          <ArchiveEventCard
            idx={event.idx}
            title={event.title}
            description={event.description}
            image={event.image}
            tech={event.tech}
            link={event.link}
          />
          
        </div>
      ))}

      </div>
    </>
  );
}
