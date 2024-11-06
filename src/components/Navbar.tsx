"use client"
import Image from "next/image"
import logo from "../assets/logo_dark.svg"
import light from "../assets/lightMode.svg"
import dark from "@/assets/dark.svg"
import Link from "next/link"
export function Navbar(){
    return<div className="flex justify-center w-full">
        <div className="dark:text-gray-400 lg:bg-rose-100 lg:bg-opacity-10 w-11/12 rounded-full lg:shadow-lg lg:backdrop-blur-md flex lg:justify-between justify-center items-center p-5 mt-2 lg:border-2 border-black">
        <Link href="/"><Logo></Logo></Link>
        <Menu></Menu>
        </div>
    </div>
}

function Logo(){

    return<div className="lg:bg-none lg:shadow-none shadow-lg lg:rounded-none rounded-full lg:backdrop-blur-none backdrop-blur-md lg:p-0 p-2 lg:border-0 border-2 border-black">
        <Image src={logo} alt="Picture of the author" className="h-9"/>
        <h1 className="ml-16 text-gray-500 text-sm text-center"><i>On Campus BIET, Lucknow.</i></h1>
    </div>
}

function Menu(){
    const toggleTheam =()=>{
         document.documentElement.classList.toggle("dark");
         
        }

    return<div className="lg:w-1/3 w-3/4 fixed lg:static object-center bottom-0 bg-red-10 dark:bg-black dark:bg-opacity-5 bg-opacity-50 backdrop-blur-lg bg-gray-200 lg:bg-transparent lg:bg-opacity-0 lg:backdrop-blur-none rounded-3xl  p-3 ">
        
        <ul className="flex lg:flex-row flex-row justify-around items-left gap-3">
            <li className="lg:text-lg sm:text-sm text-xs font-semibold text-gray-900 dark:text-gray-400"><Link href="/events">Events</Link></li>
            <li className="lg:text-lg sm:text-sm text-xs font-semibold text-gray-900 dark:text-gray-400"><Link href="/hackathon">Hackathon</Link></li>
            <li className="lg:text-lg sm:text-sm text-xs font-semibold text-gray-900 dark:text-gray-400"><Link href="/projects">Projects</Link></li>
            <li className="lg:text-lg sm:text-sm text-xs font-semibold text-gray-900 dark:text-gray-400"><Link href="/team">Team</Link></li>
            <li className="lg:text-lg sm:text-sm text-xs font-semibold text-gray-900 dark:text-gray-400"><Link href="/contact">Contact us</Link></li>
            <button><Image onClick={toggleTheam} src={light} alt="Picture of the author "className=" dark:hidden lg:h-9 h-5"/><Image onClick={toggleTheam} src={dark} alt="Picture of the author"className="dark:block hidden lg:h-9 h-5"/></button>
        </ul>
    </div>
}