"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import Autoplay from "embla-carousel-autoplay";
  import Card from "@/components/ui/Card";
  
export default function EventCarousel(){
    return<div className="w-5/6 h-auto backdrop-blur-md dark:bg-opacity-20 bg-opacity-10 lg:mt-16 m-auto rounded-3xl relative">
    <div className="justify-center flex">
      <Carousel className="m-10 md:w-auto w-11/12" 
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card
      idx= {1}
      image={"/BuildWithAI.png"}
      title={"Build with AI"}
      description={"Hi Amar, I am a bot that can help you with your queries. How can I help you today?"}
      tech = {["AI","Web"]}
      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card
      idx= {1}
      image={"/BuildWithAI.png"}
      title={"Build with AI"}
      description={"Hi Amar, I am a bot that can help you with your queries. How can I help you today?"}
      tech = {["AI"]}
      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card
      idx= {1}
      image={"/BuildWithAI.png"}
      title={"Build with AI"}
      description={"Hi Amar, I am a bot that can help you with your queries. How can I help you today?"}
      tech = {["AI"]}
      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card
      idx= {1}
      image={"/BuildWithAI.png"}
      title={"Build with AI"}
      description={"Hi Amar, I am a bot that can help you with your queries. How can I help you today?"}
      tech = {["AI"]}
      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Card
      idx= {1}
      image={"/BuildWithAI.png"}
      title={"Build with AI"}
      description={"Hi Amar, I am a bot that can help you with your queries. How can I help you today?"}
      tech = {["AI"]}
      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
           <Card
      idx= {1}
      image={"/BuildWithAI.png"}
      title={"Build with AI"}
      description={"Hi Amar, I am a bot that can help you with your queries. How can I help you today?"}
      tech = {["AI"]}
      link = {"https://stackoverflow.com/questions/55075740/property-does-not-exist-on-type-intrinsicattributes"}
    />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    </div>
}