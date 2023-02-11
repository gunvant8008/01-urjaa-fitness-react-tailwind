import React, { useState } from "react"
import { PopupButton } from "@typeform/embed-react"
import mainImg from "../assets/images/myimg1.png"
import Modal from "./Modal"

const Hero = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <section className="pt-20">
        <div
          id="home"
          className="flex flex-col-reverse lg:flex md:gap-20 gap-8 m-auto py-20 lg:flex-row max-w-[70vw] justify-between items-center"
        >
          <div className="flex-1 flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
            <h1 className=" md:text-5xl text-3xl font-bold">
              On a mission to make people independent for their health.
            </h1>
            <p>
              URJAA FITNESS is an organisation which is working on health and
              fitness education since last 7 years for common people. If you
              want to educate yourself to take care of your precious body and
              health then you are at the right place.
            </p>
            <p>
              We will surely help you to become indepandent, Let's start our new
              journey!
            </p>

            <PopupButton
              id="lYnpNrDL"
              style={{ fontSize: 20 }}
              className=" text-white bg-black px-8 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition-all ease-linear duration-100"
            >
              Start Now
            </PopupButton>
          </div>
          <div className="relative overflow-hidden flex-1 shadow-xl shadow-gray-300 items-center justify-center">
            <img src={mainImg} alt="" />
            <button
              onClick={() => setOpenModal(true)}
              className="absolute hover:scale-105 transition-all ease-linear duration-200 -bottom-3 w-[80%] text-[10px] md:text-[15px] p-1 font-bold rounded-md bg-yellow-400 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer h-[1.5rem] md:h-[3rem] mx-auto text-center"
            >
              Read Story Behind Urjaa Fitness
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
