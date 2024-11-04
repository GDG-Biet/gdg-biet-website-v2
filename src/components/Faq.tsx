"use client"
/* eslint-disable prefer-const */

import { useState } from "react";


export default function Faqs(){

    const [open,setOpen]=useState(false);

    function handler(){
        setOpen(!open);
    }

    let questions: {
        key: number;
        question: string;
        answer: string;
    }[]
    questions = [
        {key:1,question:"What is gdsc?",answer:"GDSC is a community"},
        {key:2,question:"What is gdsc?",answer:"GDSC is a community"},
        {key:3,question:"What is gdsc?",answer:"GDSC is a community"},
        {key:4,question:"What is gdsc?",answer:"GDSC is a community"},
        {key:5,question:"What is gdsc?",answer:"GDSC is a community"},
        {key:6,question:"What is gdsc?",answer:"GDSC is a community"},
        {key:7,question:"What is gdsc?",answer:"GDSC is a community"},
        {key:8,question:"What is gdsc?",answer:"GDSC is a community"},
    ];
    return<div>
        <div className="w-11/12 grid grid-rows-8 bg-slate-300 m-auto p-2">
            {questions.map((que)=>{
             return<div key={que.key} className="p-4 border-l-2 border-white">
                <p className=" text-xl border-b-2 font-semibold cursor-pointer" onClick={handler}>{que.question}</p>
                <p className="text-lg px-2 py-">{open?que.answer:""}</p>
                </div>
            })}
        </div>
    </div>
}