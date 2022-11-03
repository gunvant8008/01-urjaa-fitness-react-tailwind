import React from "react"
import { GrCaretDown } from "react-icons/gr"
import { PopupButton } from "@typeform/embed-react"
const Approach = () => {
  return (
    <div id="approach">
      <div className="flex flex-col items-center max-w-[70vw] gap-10 m-auto justify-center pt-10">
        <h1 className=" md:text-5xl text-3xl font-bold">Our Approach</h1>

        <div className="grid lg:gap-20 gap-10 lg:mt-10 lg:grid-cols-3 grid-cols-1">
          <div className="flex gap-5 lg:gap-0 shadow-xl shadow-gray-400 rounded-md p-5 lg:flex-col items-center text-justify">
            <h1 className="md:text-9xl text-4xl font-bold">1</h1>
            <p>Science-backed workout & diet plans made for your body</p>
          </div>
          <div className="flex gap-5 lg:gap-0  shadow-xl shadow-gray-400 rounded-md p-5 lg:flex-col items-center text-justify">
            <h1 className="md:text-9xl text-4xl font-bold">2</h1>
            <p>Personalised guidance from expert coaches</p>
          </div>
          <div className="flex gap-5 lg:gap-0 shadow-xl shadow-gray-400 rounded-md p-5 lg:flex-col items-center text-justify">
            <h1 className="md:text-9xl text-4xl font-bold">3</h1>
            <p>The knowledge & motivation you need to make fitness a lifestyle</p>
          </div>
        </div>
        <GrCaretDown size={50} />
        <p className="shadow-xl shadow-gray-400 p-5 rounded-md">The result: You build your dream body... and a happier life!</p>
        <PopupButton id="lYnpNrDL" style={{ fontSize: 20 }} className=" text-white bg-black px-10 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition-all ease-linear duration-100">
          Start Now
        </PopupButton>
      </div>
    </div>
  )
}

export default Approach
