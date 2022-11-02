import React, { useState } from "react"
import logo from "../assets/logos/Logo-Black.png"
import logo2 from "../assets/logos/Logo-FontWhite.png"
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <nav className="fixed w-full bg-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-gray-200  ">
      <div className="relative flex m-auto max-w-[70vw] justify-between items-center py-0 p-3">
        {/* Left\ */}
        <div className=" w-[90px]">
          <img src={logo} alt="" />
        </div>

        {/* Right */}
        <div className="">
          <ul className="hidden md:flex font-medium  gap-7   ">
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#results">Results</a>
            </li>
            <li>
              <a href="/#approach">Approach</a>
            </li>
            <li>
              <a href="/#programs">Programs</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className="flex md:hidden cursor-pointer">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
        </div>
      </div>
      {/* Mobile Menu  */}
      <div className="">
        <div className={nav ? "absolute shadow-inner shadow-gray-50  w-1/2 h-[100vh] transition-all ease-linear duration-00 top-0 left-0  flex flex-col md:hidden items-center py-20 bg-gray-500 p-5" : "absolute w-1/2 h-[100vh]  transition-all ease-linear duration-400 top-0 -left-1/2  flex flex-col md:hidden items-center bg-gray-500 p-5"}>
          {/* Top\ */}
          <div className=" w-[90px]">
            <img src={logo2} alt="" />
          </div>

          {/* Bottom */}
          <div className="">
            <ul className=" font-medium text-lg flex flex-col gap-5 items-center py-20 text-white  ">
              <li onClick={() => setNav(!nav)}>
                <a href="/#home">Home</a>
              </li>
              <li onClick={() => setNav(!nav)}>
                <a href="/#results">Results</a>
              </li>
              <li onClick={() => setNav(!nav)}>
                <a href="/#approach">Approach</a>
              </li>
              <li onClick={() => setNav(!nav)}>
                <a href="/#programs">Programs</a>
              </li>
              <li onClick={() => setNav(!nav)}>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
