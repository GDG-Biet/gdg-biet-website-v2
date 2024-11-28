import Image from "next/image";
import line from "@/assets/line1.svg"
import Square from "@/assets/BlueSquare.svg"
import Circle from "@/assets/GreenCircle.svg"
import MobileLogo from "@/assets/MobileLogo.svg"
import leftlogo from "@/assets/LeftLogo.svg"
import rightlogo from "@/assets/RightLogo.svg"
import ProjectCard from "@/components/ProjectCard";
import projects from "@/Data/projects.json";

export default function Projects(){
    return(<>
        {/* Hero Section */}
      <div className="lg:h-[90vh] lg:pt-20 bg-blueprint">
        <div className="absolute w-full h-full top-0 bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-20 backdrop-blur-sm -z-10"></div>
        <div>
          <Image
            src={Square}
            alt="Element-Square"
            className="lg:h-1/2 h-1/6 absolute lg:block hidden lg:left-0 -left-16 md:top-[40vh] top-[20vh] -z-0"
          />
        </div>
        <div>
          <Image
            src={Circle}
            alt="Element-Square"
            className="lg:h-1/2 h-1/6 lg:block hidden absolute lg:right-0 -right-16 md:top-[50vh] top-[30vh] -z-0"
          />
        </div>
        <div className="absolute lg:block hidden -top-4 right-0 -z-0 h-screen w-auto">
          <Image src={line} alt="line" />
        </div>

        <div className="w-2/3 m-auto mt-32 h-36">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center h-full">
            {/* logo for smaller screen */}
            <div className="lg:hidden h-10">
              <Image src={MobileLogo} alt="GDG-Logo" />
            </div>
            <div className=" h-72 justify-center w-[100%] hidden lg:flex p-5">
              <Image src={leftlogo} alt="GDG-Logo" />
            </div>
            <div className="text-center lg:text-9xl text-5xl font-Lato text-white font-bold">
              <strong className="text-blue-600">P</strong>rojects
              <br />
            </div>
            <div className=" h-72 justify-center w-[100%] hidden lg:flex p-5">
              <Image src={rightlogo} alt="GDG-Logo" />
            </div>
          </div>
        </div>
      </div>
        <h2 className="lg:text-6xl text-4xl  w-full font-bold font-mono lg:text-left text-center border-b-4 border-black p-4">Projects by GDG</h2>
        <div className="lg:w-5/6 w-fit  m-auto gap-5 my-10">
      {projects.map((project) => (
        <div key={project.idx} className=''>
          <ProjectCard
            idx={project.idx}
            title={project.title}
            description={project.description}
            image={project.image}
            Github={project.github}
            liveLink={project.liveLink}
          />
          
        </div>
      ))}

      </div>

      <h2 className="lg:text-6xl text-4xl  w-full font-bold font-mono lg:text-left text-center border-b-4 border-black p-4">Upcoming Projects</h2>
        <div className="w-5/6 m-auto gap-5 my-10">
      <h3 className="lg:text-4xl text-3xl  w-full font-bold font-mono lg:text-center text-center p-2 text-gray-600">Coming Soon...</h3>

      </div>
      </>
    )
}