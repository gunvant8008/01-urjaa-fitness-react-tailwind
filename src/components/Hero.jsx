import React from "react"
import mainImg from "../assets/images/2.png"

const Hero = () => {
  return (
    <section className="pt-20">
      <div id="home" className="flex flex-col-reverse lg:flex md:gap-20 gap-8 m-auto py-20 lg:flex-row max-w-[70vw] justify-between items-center">
        <div className="flex-1 flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
          <h1 className=" md:text-5xl text-3xl font-bold">On a mission to make people independent for their health.</h1>
          <p>URJAA FITNESS is an organisation which is working on health and fitness education since last 7 years for common people. If you want to educate yourself to take care of your precious body and health then you are at the right place.</p>
          <p>We will surely help you to become indepandent, Let's start our new journey!</p>
          <button className="btn-primary py-4">Start Now</button>
        </div>
        <div className="flex-1 shadow-xl shadow-gray-300">
          <img src={mainImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
