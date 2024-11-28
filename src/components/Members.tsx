
import teamsdata from "@/Data/teams.json";
import Image from "next/image";
import Link from "next/link";


type TeamProps = {
    name: string;
    position: string;
    twitter: string;
    image: string;
    linkdin: string;
    
  };
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Members = ({year}:any)=>{
    return<div className="lg:w-5/6 m-auto grid md:grid-cols-3 lg:gap-10">
        {teamsdata.map((team)=>{
            if(year==team.year)
           return<Team key={team.idx} name={team.name} position={team.position} twitter={team.Twitter} linkdin={team.linkdin} image={team.image}></Team>
        })}
        
    </div>
}
export default Members;

const Team: React.FC<TeamProps> = ({name,position,twitter,image,linkdin})=>{
    return<div className="w-full flex md:flex-col items-center gap-6 p-4 bg-slate-400 bg-opacity-15 rounded-2xl">
        <div className="lg:w-full w-1/2 drop-shadow-md"><Image className="w-full object-contain rounded-xl" src={image} alt="" width={500} height={750}></Image></div>
        <div className="text-center">
            <h2 className="lg:text-3xl text-xl font-bold text-slate-500">{name}</h2>
            <p className="lg:text-xl">{position}</p>
            <div className="grid grid-flow-col place-content-center col-span-2 mt-2 gap-2 drop-shadow-lg">
                {/* Twitter */}
                <Link href={twitter}><div className="w-8 h-8 fill-stone-950 dark:fill-white flex justify-center items-center drop-shadow-lg">
                    <svg viewBox="0 0 50 50" width="50px" height="50px">
                        <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"/>
                    </svg>
                </div></Link>
                {/* Linkdin */}
               <Link href={linkdin}> <div className="w-8 h-8 fill-stone-950 dark:fill-white flex justify-center items-center drop-shadow-lg">
                    <svg width="50px" height="50px" viewBox="-1.5 0 19 19">
                    <path d="M15.917 17.5H.083V1.666h15.834zM5.77 6.427a.96.96 0 0 0-1.032-.96.962.962 0 1 0-.025 1.92h.013a.963.963 0 0 0 1.044-.96zm-.123 1.719H3.803v5.552h1.845zm6.658 2.368c0-1.705-.91-2.5-2.125-2.5a1.832 1.832 0 0 0-1.663.917v-.786H6.67c.025.52 0 5.554 0 5.554h1.848v-3.102a1.264 1.264 0 0 1 .06-.45 1.011 1.011 0 0 1 .946-.676c.67 0 .936.51.936 1.256V13.7h1.846zm-3.8-1.564.013-.019v.019z"/>
                    </svg>
                </div></Link>
            </div>
            </div>
    </div>
}
