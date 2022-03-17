import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/cyber-bg.png";


const HeroDataServices = ({ Icon, title }) => {
  return (
    <div className="flex">
      <div>
        <Icon className="h-6 pt-1 text-indigo-600" />
      </div>
      <div>
        <p className="flex px-2 text-slate-500"> {title}</p>
      </div>
    </div>
  );
};


const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-3 py-8 md:pl-12 ">
          <p className="text-2xl">Unique sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-6xl">Cloud Management</h1>
          <p className="text-xl">This is our Tech Brand</p>
          <button className="py-3 px-6 sm:w-[60%] my-4 text-lg">Get Started</button>
        </div>

        <div>
          <img className="w-full" src={bgImg} alt="" />
        </div>

        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300
            rounded-xl text-center shadow-xl"
        >
          <p className="text-xl mb-2">Data Services</p>

          <div className="flex justify-evenly md:justify-between flex-wrap px-4 text-lg">

            <HeroDataServices Icon={CloudUploadIcon} title="App Security"/>
            <HeroDataServices Icon={DatabaseIcon} title="Dashboard Design"/>
            <HeroDataServices Icon={ServerIcon} title="Cloud Data"/>
            <HeroDataServices Icon={PaperAirplaneIcon} title="API"/>

            {/*                 
            <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600'/>App Security </p>
                <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600'/> Dashboard Design</p>
                <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600'/> Cloud Data</p>
                <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600'/>API </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
