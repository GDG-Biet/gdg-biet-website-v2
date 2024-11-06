"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel";
  import Autoplay from "embla-carousel-autoplay";
  import React from "react";
  import Image from "next/image";
  import Link from "next/link";
  
  type EventCardProps = {
    idx: number;
    image: string;
    link:string;
  
  };
  
export default function Sponsers(){
    return<>
    <div className="justify-center flex ">
      <Carousel className=" md:w-auto" 
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
          <Card
      idx= {1}
      image={"/cat.jpg"}

      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
          <Card
      idx= {1}
      image={"/cat.jpg"}

      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
          <Card
      idx= {1}
      image={"/cat.jpg"}

      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
          <Card
      idx= {1}
      image={"/cat.jpg"}

      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
          <Card
      idx= {1}
      image={"/cat.jpg"}

      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
           <Card
      idx= {1}
      image={"/cat.jpg"}
      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
          <Card
      idx= {1}
      image={"/cat.jpg"}

      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
           <Card
      idx= {1}
      image={"/cat.jpg"}
      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
          <Card
      idx= {1}
      image={"/cat.jpg"}

      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5">
           <Card
      idx= {1}
      image={"/cat.jpg"}
      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          
        </CarouselContent>
      </Carousel>
    </div>
    </>
}


const Card: React.FC<EventCardProps> = ({image,idx,link}) => {
  return (
    <div key={idx} className="flex flex-col gap-4 bg-white dark:border-2 dark:bg-black rounded-2xl m-4 h-auto">
      <div className=" rounded-lg">
      <Link href={link}><Image className="w-[100%] h-auto rounded-xl" width={50} height={50} src={image} alt="Event Image" /></Link> 
      </div>
      </div>

  );
}