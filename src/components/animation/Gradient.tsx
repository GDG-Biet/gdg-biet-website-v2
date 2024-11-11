"use client"
import { useLottie } from "lottie-react";
import animation from "./gradient.json"
// import Lottie from "lottie-react";

export default function Gradient() {

    const options = {
        animationData: animation ,
        loop: true
      };
      const { View } = useLottie(options);
  return (<div className="w-full h-full relative flex justify-center items-start">
    <div className="absolute w-full h-full bg-white dark:bg-black dark:bg-opacity-25 z-10 bg-opacity-20 backdrop-blur-md"></div>
   <div className='w-1/2 h-1/2'> {View}</div>
    </div>
  );
}