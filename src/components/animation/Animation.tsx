"use client"
import { useLottie } from "lottie-react";
import animation from "./Wumpus.json"
// import Lottie from "lottie-react";

export default function MyComponent() {

    const options = {
        animationData: animation ,
        loop: true
      };
      const { View } = useLottie(options);
  return (<>
   <div className='w-20 h-10'> {View}</div>
      </>
  );
}