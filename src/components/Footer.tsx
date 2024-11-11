import Image from "next/image"
import logo from "@/assets/logo_dark.svg"
import heart from "@/assets/heart.svg"

export function Footer(){

    return<div className="bg-black rounded-3xl m-5 p-3">
        <div className="flex md:flex-row flex-col  items-center md:items-baseline">
        <div className="flex flex-col md:w-1/3 w-2/3 items-center pt-4"><Image src={logo} alt="gdg-logo"/>
        <h3 className="text-gray-500">on campus, BIET lucknow</h3>
        </div>
        <div className=" grid md:grid-cols-4 grid-cols-3  m-5 w-5/6 text-left gap-4">
        <div className="md:col-start-2 col-start-1 text-gray-500 md:m-0">
            <p className="font-bold text-lg text-gray-300">Contribute</p>
            <ul>
                <li>File a bug</li>
                <li>View code</li>
            </ul>
            </div>
        <div className="text-gray-500">
            <p className="font-bold text-lg text-gray-300">Contents</p>
            <ul>
                <li>Events</li>
                <li>Projects</li>
                <li>Team</li>
                <li>Contact us</li>
            </ul>
            </div>
        <div className="text-gray-500 md:w-1/3">
            <p className="font-bold text-lg text-gray-300 md:text-left text-center">Socials</p>
            <div className="grid grid-cols-2 grid-rows-3 gap-2">
                {/* Twitter */}
                <div className="w-10 h-10 fill-stone-500 dark:fill-white flex justify-center items-center">
                    <svg viewBox="0 0 50 50" width="50px" height="50px">
                        <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"/>
                    </svg>
                </div>
                {/* Linkdin */}
                <div className="w-10 h-10 fill-stone-500 dark:fill-white flex justify-center items-center">
                    <svg width="50px" height="50px" viewBox="-1.5 0 19 19">
                    <path d="M15.917 17.5H.083V1.666h15.834zM5.77 6.427a.96.96 0 0 0-1.032-.96.962.962 0 1 0-.025 1.92h.013a.963.963 0 0 0 1.044-.96zm-.123 1.719H3.803v5.552h1.845zm6.658 2.368c0-1.705-.91-2.5-2.125-2.5a1.832 1.832 0 0 0-1.663.917v-.786H6.67c.025.52 0 5.554 0 5.554h1.848v-3.102a1.264 1.264 0 0 1 .06-.45 1.011 1.011 0 0 1 .946-.676c.67 0 .936.51.936 1.256V13.7h1.846zm-3.8-1.564.013-.019v.019z"/>
                    </svg>
                </div>
                {/* Instagram */}
                <div className="w-10 h-10 fill-stone-500 dark:fill-white flex justify-center items-center">
                    <svg viewBox="0 0 24 24" width="48px" height="48px">    
                    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/>
                    </svg>
                </div>
                {/* Github */}
                <div className="w-10 h-10 fill-stone-500 dark:fill-white flex justify-center items-center">
                    <svg viewBox="0 0 32 32" width="64px" height="64px" fillRule="evenodd">
                    <path fillRule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"/>
                    </svg>
                </div>
                {/* Youtube */}
                <div className="w-10 h-10 fill-stone-500 dark:fill-white flex justify-center items-center">
                    <svg viewBox="0 0 24 24" width="48px" height="48px">    
                    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/>
                    </svg>
                </div>
                {/* Linkdin */}
                <div className="w-10 h-10 fill-stone-500 dark:fill-white flex justify-center items-center">
                <svg viewBox="0 0 127.14 96.36"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
                </div>
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