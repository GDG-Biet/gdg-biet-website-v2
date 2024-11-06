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
    <div key={idx} className="flex flex-col gap-4 bg-white dark:border-2 dark:bg-black rounded-2xl m-4 h-auto">
      <div className=" rounded-lg">
      <Link href={link}><Image className="w-[100%] h-auto rounded-xl" width={500} height={500} src={image} alt="Event Image" /></Link> 
      </div>
      <div className="text-left flex flex-col p-2">
        <div className="h-5/6"><h2 className="text-left font-bold text-xl dark:text-slate-500">{title}</h2>
        <p className="dark:text-slate-500">{description}</p></div>
        <div className="h-1/6 w-full flex flex-row">
        <TechStack tech={tech} idx={idx}></TechStack>
        </div>
      </div>
    </div>
  );
}

export default Eventcard;

const TechStack : React.FC<TechStackProps> = ({tech,idx})=>{

  return tech.map((stack) => {
   
    return <div className=" m-2 p-2 bg-blue-400 bg-opacity-30 rounded-md flex justify-center items-center" key={idx}><p className="font-bold">{stack}</p></div>;
  });


}