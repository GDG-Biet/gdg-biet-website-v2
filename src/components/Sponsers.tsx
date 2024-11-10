import "@/style/sponsers.css"
import CodingNinja from "@/assets/codingNinja.svg"
import Image from "next/image"
export default function Sponsers2(){
    return  <div className="wrapper">
    <div className="item item1 "><Image src={CodingNinja} alt="" className="w-3/5"></Image></div>
    <div className="item item2 "><Image src={CodingNinja} alt="" className="w-3/5"></Image></div>
    <div className="item item3 "><Image src={CodingNinja} alt="" className="w-3/5"></Image></div>
    <div className="item item4 "><Image src={CodingNinja} alt="" className="w-3/5"></Image></div>
    <div className="item item5 "><Image src={CodingNinja} alt="" className="w-3/5"></Image></div>
    <div className="item item6 "><Image src={CodingNinja} alt="" className="w-3/5"></Image></div>
    <div className="item item7 "><Image src={CodingNinja} alt="" className="w-3/5"></Image></div>
    <div className="item item8 "><Image src={CodingNinja} alt="" className="w-3/5"></Image></div>
</div>
}