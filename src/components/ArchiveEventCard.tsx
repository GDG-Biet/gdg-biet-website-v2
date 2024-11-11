
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

const ArchiveEventCard: React.FC<EventCardProps> = ({title, description,image,idx,tech,link}) =>{
    return<div key={idx}>
    <div className=" w-full bg-white border-2 hover:border-green-800 dark:border-0 dark:bg-slate-800 dark:bg-opacity-50 rounded-lg flex flex-col">
        <div className="w-full">
        <Link href={link}><Image className="w-full rounded-xl" width={500} height={500} src={image} alt="Event Image" /></Link> 
        </div>
        <h3 className="text-3xl p-4 pb-2 border-b-2 border-black dark:border-slate-300 font-bold">{title}</h3>
        <p className="text-lg w-11/12 p-2 m-auto">{description}</p>
        <div className="h-1/6 w-full flex flex-row justify-between">
         <div className="w-full flex flex-row"><TechStack tech={tech} idx={idx}></TechStack></div>
         <p className="px-5 py-1 text-center font-bold rounded-md bg-green-600 text-xl m-2 text-green-950">Docs</p>
        </div>

    </div>
  </div>
}


export default ArchiveEventCard;

const TechStack : React.FC<TechStackProps> = ({tech,idx})=>{

  return tech.map((stack) => {
   
    return <div className=" m-2 px-2 py-1 bg-blue-400 bg-opacity-80 rounded-md flex justify-center items-center dark:text-slate-100 font-bold" key={idx}><p className="font-bold">{stack}</p></div>;
  });


}