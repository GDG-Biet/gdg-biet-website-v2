"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  title: string;
  description: string;
  idx: number;
  image: string;
  Github:string;
  liveLink:string;

};

const ProjectCard: React.FC<EventCardProps> = ({title, description,image,idx,Github,liveLink}) => {
  return (
    <div key={idx} className="w-full flex lg:flex-row flex-col  rounded-lg dark:bg-opacity-0">
        <Image className="hover:scale-125 duration-300" width={500} height={500} src={image} alt=""></Image>
        <div className=" h-full m-auto lg:ml-4 p-2 lg:bg-slate-300 dark:bg-opacity-20 rounded-lg" >
        <h2 className="lg:text-2xl font-mono font-bold p-4 text-center lg:text-left">{title}</h2>
        <p className="lg:text-xl font-mono font-medium lg:px-4"><strong>Description:</strong> {description}</p>
        <div className="flex flex-row justify-evenly px-4 mt-4">
            <button className="hover:bg-blue-500 lg:bg-transparent bg-blue-500 dark:text-white lg:text-black text-white font-bold lg:text-xl text-base rounded-lg lg:p-4 p-2 px-4 duration-200"><Link href={Github}>Github</Link></button>
            <button className="hover:bg-blue-500 lg:bg-transparent bg-blue-500 dark:text-white lg:text-black text-white font-bold lg:text-xl text-base rounded-lg lg:p-4 p-2 px-4 duration-200"><Link href={liveLink}>Visit the website</Link></button>
        </div>
        </div>
    </div>
  );
}

export default ProjectCard;