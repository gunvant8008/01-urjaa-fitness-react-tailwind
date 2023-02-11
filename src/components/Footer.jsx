import React from "react"
import logo from "../assets/logos/Logo-FontWhite.png"
import { BsInstagram, BsYoutube, BsFacebook, BsLinkedin } from "react-icons/bs"

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-gray-700 text-gray-200">
      <div className="flex md:flex-row flex-col p-2 lg:max-w-[70vw] m-auto justify-between items-center ">
        <div className="flex items-center justify-center">
          <a href="/#home">
            <img className=" w-[120px]" src={logo} alt="" />
          </a>
          <div>
            <h1 className="text-xl">Contact Us</h1>
            <p>training@urjaafitness.com</p>
          </div>
        </div>
        <div>
          <div className="flex gap-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/gunvant_urjaa/"
            >
              <BsInstagram size={30} />{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UC4jTNpan6O5F_CeO_xP5_jw"
            >
              <BsYoutube size={35} />{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/GunvantSharmaFitness"
            >
              <BsFacebook size={30} />{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/gunvant-sharma-006057b2/"
            >
              <BsLinkedin size={28} />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-900 p-2 text-white">
        <p className="text-sm">Copyright &copy; 2023 All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
