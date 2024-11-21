"use client"


import Image from "next/image";
import leftlogo from "@/assets/LeftLogo.svg"
import rightlogo from "@/assets/RightLogo.svg"
import { useState } from "react";
import Members from "./Members";
import Lead from "./Lead";

const Team = ()=>{
  const [year,setYear]=useState(2023);
    return<>
          <div className="w-5/12 m-auto h-32 flex justify-center items-center border-b-2">
        <div className=" h-full justify-center w-[100%] hidden lg:flex p-5 cursor-pointer" onClick={()=>{setYear(year>2023?year-1:year) }}><Image src={leftlogo} alt="GDG-Logo" /></div>
        <div className="w-5/6 h-2/3 rounded-full border-4 border-blue-600 flex justify-center items-center">
        <p className="text-center lg:text-4xl text-2xl dark:text-white font-bold">{year}</p>
        </div>
        <div className=" h-full justify-center w-[100%] hidden lg:flex p-5 cursor-pointer" onClick={()=>{setYear(year<2025?year+1:year)}} ><Image src={rightlogo} alt="GDG-Logo"/></div>
      </div>
      <div className=" w-full dark:bg-slate-900 dark:bg-opacity-15 mt-5">
        <Lead year={year}></Lead>
        <Members
        year={year}
        ></Members>
      </div>
    </>
}

export default Team;