import React from "react";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  title: string;
  description: string;
  idx: number;
  image: string;
  tech:string[];
  link:string;

};

type TechStackProps ={
  tech : string[];
  idx: number;
}

const Eventcard: React.FC<EventCardProps> = ({title, description,image,idx,tech,link}) => {
  return (
    <div key={idx} className="flex md:flex-row flex-col gap-4 border-2 dark:bg-slate-800 bg-opacity-50 dark:bg-opacity-50 rounded-2xl m-4 p-3 h-auto">
      <div className="md:w-2/5 rounded-lg shadow-lg hover:shadow-green-400 duration-300">
      <Link href={link}><Image className="w-[100%] h-auto rounded-2xl" width={500} height={500} src={image} alt="Event Image" /></Link> 
      </div>
      <div className="text-left md:pl-4 flex flex-col pt-4 3/5">
        <div className="h-5/6"><h2 className="text-left font-bold text-3xl dark:text-slate-3">{title}</h2>
        <p className="dark:text-slate-300 py-5">{description}</p></div>
        <div className="flex flex-row justify-between w-full h-1/6">
        <div className="h-full w-full flex flex-row">
        <TechStack tech={tech} idx={idx}></TechStack>
        </div>
        <button className="m-auto bg-red-500 text-red-100 px-10 py-3 rounded-xl font-semibold drop-shadow-lg"><Link href={link}>RSVP</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Eventcard;

const TechStack : React.FC<TechStackProps> = ({tech,idx})=>{

  return tech.map((stack) => {
   
    return <div className=" m-2 p-2 bg-blue-400 bg-opacity-80 rounded-md flex justify-center items-center dark:text-slate-100" key={idx}><p className="font-bold">{stack}</p></div>;
  });


}