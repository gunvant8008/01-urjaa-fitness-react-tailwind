import React from "react"
import mainImg from "../assets/images/2.png"
import { FaCheckDouble } from "react-icons/fa"

const Features = () => {
  return (
    <section className="container max-w-[70vw] justify-center m-auto items-center ">
      <div className="flex flex-col gap-3 items-center justify-center text-center">
        <h1 className=" md:text-5xl text-3xl font-bold">Only program you will ever need to get independent</h1>
        <p className="md:text-3xl text-2xl font-thin text-gray-700">Get independent on Exercise Floor & Learn to build your own meal plan</p>
      </div>
      <div className="flex flex-col-reverse items-center lg:flex md:gap-20 gap-8 py-20 lg:flex-row-reverse max-w-[70vw] ">
        <div className="flex-1  flex flex-col items-center justify-center  gap-5 text-center">
          <ul className="flex flex-col text-base md:text-xl gap-5 ">
            <li className="flex border-2 p-4 gap-4  shadow-xl shadow-gray-400">
              <FaCheckDouble /> Customised diet & workout plan
            </li>
            <li className="flex border-2 p-4 gap-4 shadow-xl shadow-gray-400">
              <FaCheckDouble /> Daily food tracking
            </li>
            <li className="flex border-2 p-4 gap-4 shadow-xl shadow-gray-400">
              <FaCheckDouble /> 24x7 Support
            </li>
            <li className="flex border-2 p-4 gap-4 shadow-xl shadow-gray-400">
              <FaCheckDouble /> Healty recipe books
            </li>
            <li className="flex border-2 p-4 gap-4 shadow-xl shadow-gray-400">
              <FaCheckDouble /> Exclusive Educational Content
            </li>
            <li className="flex border-2 p-4 gap-4 shadow-xl shadow-gray-400">
              <FaCheckDouble /> Discipline & Consistency Check
            </li>
          </ul>
        </div>
        <div className="flex-1 ">
          <img src={mainImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Features
