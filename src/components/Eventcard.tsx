import React from "react";
import Image from "next/image";
import rightlogo from "@/assets/RightLogo.svg";
import { Url } from "next/dist/shared/lib/router/router";

type EventCardProps = {
  title: string;
  description: string;
  idx: number;
  image: string;

};

const Eventcard: React.FC<EventCardProps> = ({title, description,image,idx}) => {
  return (
    <div className="flex flex-row bg-red-200 rounded-2xl m-4 p-3 h-auto">
      <div className="w-2/5 bg-red-100 rounded-lg">
        <Image className="w-[100%] h-auto rounded-2xl" width={500} height={500} src={image} alt="Event Image" />
      </div>
      <div className="text-left pl-4">
        <h2 className="text-left font-bold text-xl dark:text-black">{title}</h2>
        <p className="dark:text-black">{description}</p>
      </div>
    </div>
  );
}

export default Eventcard;