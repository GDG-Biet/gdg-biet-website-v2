import Image from "next/image"
import logo from "../assets/logo_dark.svg"
import light from "../assets/lightMode.svg"
export function Navbar(){
    return<div className="flex justify-center w-full">
        <div className="lg:bg-rose-200 lg:bg-opacity-10 w-11/12 rounded-full lg:shadow-lg lg:backdrop-blur-md flex lg:justify-between justify-center items-center p-5 mt-2 lg:border-2 border-black">
        <Logo></Logo>
        <Menu></Menu>
        </div>
    </div>
}

function Logo(){

    return<div className="lg:bg-none bg-rose-200 bg-opacity-10 lg:shadow-none shadow-lg lg:rounded-none rounded-full lg:backdrop-blur-none backdrop-blur-md lg:p-0 p-2 lg:border-0 border-2 border-black">
        <Image src={logo} alt="Picture of the author" className="h-9"/>
        <h1 className="ml-16 text-gray-500 text-sm text-center"><i>On Campus BIET, Lucknow.</i></h1>
    </div>
}

function Menu(){

    return<div className="lg:w-1/3 w-2/3 fixed lg:static object-center bottom-0 bg-red-100 lg:bg-opacity-0 rounded-3xl  p-5 ">
        
        <ul className="flex lg:flex-row flex-row justify-around items-left gap-5 ">
            <li className="lg:text-lg text-sm font-semibold text-gray-500"><a href="#about">Events</a></li>
            <li className="lg:text-lg text-sm font-semibold text-gray-500"><a href="#">Projects</a></li>
            <li className="lg:text-lg text-sm font-semibold text-gray-500"><a href="#">Team</a></li>
            <li className="lg:text-lg text-sm font-semibold text-gray-500"><a href="#">Contact us</a></li>
            <li><Image src={light} alt="Picture of the author"className="lg:h-9 h-5"/></li>


        </ul>
    </div>
}