import React from "react"
import program12weeks from "../assets/programs/program12weeks.png"
import program24weeks from "../assets/programs/program24weeks.png"
import program12weekscouple from "../assets/programs/program12weekscouple.png"
import program4weeks from "../assets/programs/program4weeks.png"
import program1time from "../assets/programs/program1time.png"
import { PopupButton } from "@typeform/embed-react"

const Programs = () => {
  return (
    <div id="programs" className="container max-w-[70vw] m-auto md:mt-10 flex flex-col items-center justify-center text-center">
      <h1 className=" md:text-5xl pt-10 text-3xl font-bold">OUR ONLINE TRANSFORMATION PROGRAMS</h1>
      <p className="md:text-2xl text-xl font-thin text-center text-gray-700">Start your fitness journey, Let us help you achieve your goals.</p>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-2  max-w-[70vw] py-10">
        <PopupButton id="lYnpNrDL" style={{ fontSize: 20 }}>
          <img className="hover:opacity-80 hover:scale-105 cursor-pointer transition-all ease-linear duration-200" src={program12weeks} alt="" />
        </PopupButton>
        <PopupButton id="lYnpNrDL" style={{ fontSize: 20 }}>
          <img className="hover:opacity-80 hover:scale-105 cursor-pointer transition-all ease-linear duration-200" src={program24weeks} alt="" />
        </PopupButton>
        <PopupButton id="lYnpNrDL" style={{ fontSize: 20 }}>
          <img className="hover:opacity-80 hover:scale-105 cursor-pointer transition-all ease-linear duration-200" src={program12weekscouple} alt="" />
        </PopupButton>
        <PopupButton id="lYnpNrDL" style={{ fontSize: 20 }}>
          <img className="hover:opacity-80 hover:scale-105 cursor-pointer transition-all ease-linear duration-200" src={program4weeks} alt="" />
        </PopupButton>
        <PopupButton id="lYnpNrDL" style={{ fontSize: 20 }}>
          <img className="hover:opacity-80 hover:scale-105 cursor-pointer transition-all ease-linear duration-200" src={program1time} alt="" />
        </PopupButton>
      </div>
    </div>
  )
}

export default Programs
