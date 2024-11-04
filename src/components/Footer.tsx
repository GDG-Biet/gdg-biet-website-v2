import Image from "next/image"
import logo from "@/assets/logo_dark.svg"
import linkdin from "@/assets/Linkdin.svg"
import x from "@/assets/twitter.svg"
import instagram from "@/assets/instagram.svg"
import github from "@/assets/github.svg"
import youtube from "@/assets/youtube.svg"
import discord from "@/assets/discord.svg"
import heart from "@/assets/heart.svg"
export function Footer(){

    return<div className="bg-black">
        <div className="flex md:flex-row flex-col  items-center md:items-baseline">
        <div className="flex flex-col md:w-1/3 w-2/3 items-center pt-4"><Image src={logo} alt="gdg-logo"/>
        <h3 className="text-gray-500">on campus, BIET lucknow</h3>
        </div>
        <div className="w-2/3 grid md:grid-cols-4  m-5 text-left gap-5">
        <div className="md:col-start-2 col-start-1 text-gray-500 md:m-0 m-auto">
            <p className="font-bold text-lg text-gray-300">Contribute</p>
            <ul>
                <li>File a bug</li>
                <li>View code</li>
            </ul>
            </div>
        <div className="text-gray-500 m-auto md:m-0">
            <p className="font-bold text-lg text-gray-300">Contents</p>
            <ul>
                <li>Events</li>
                <li>Projects</li>
                <li>Team</li>
                <li>Contact us</li>
            </ul>
            </div>
        <div className="text-gray-500 m-auto md:m-0">
            <p className="font-bold text-lg text-gray-300 md:text-left text-center">Socials</p>
            <div className="md:grid md:grid-cols-2 md:grid-rows-3 w-2/5 flex flex-row">
                <Image src={linkdin} alt="linkdin" className="md:w-12 md:h-12 w-8 h-8"/>
                <Image src={x} alt="linkdin" className="md:w-12 md:h-12 w-8 h-8"/>
                <Image src={instagram} alt="linkdin" className="md:w-12 md:h-12 w-8 h-8"/>
                <Image src={github} alt="linkdin" className="md:w-12 md:h-12 w-8 h-8"/>
                <Image src={youtube} alt="linkdin" className="md:w-12 md:h-12 w-8 h-8"/>
                <Image src={discord} alt="linkdin" className="md:w-12 md:h-12 w-8 h-8"/>
            </div>
            </div>
        </div>
        </div>
        <div className="flex justify-between mx-5 text-gray-500 pb-4 flex-col-reverse md:flex-row">
            <p className="text-center md:text-left"><i>© 2024 Google Developer Groups - BIET,Lucknow.  All rights reserved.</i></p>
            <div className="flex md:flex-row gap-1 justify-center">
            <p><i>Made with</i></p>
            <Image src={heart} alt="Love"></Image>
            <p><i>at GDG.</i></p>
            </div>
            
        </div>
    </div>
}