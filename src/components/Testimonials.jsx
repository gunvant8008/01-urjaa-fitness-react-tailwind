import React from "react"

const Testimonials = () => {
  return (
    <div className="container max-w-[70vw] m-auto md:mt-10 flex flex-col items-center justify-center">
      <h1 className=" md:text-5xl pt-10 text-3xl font-bold">TESTIMONIALS</h1>
      <p className="md:text-2xl text-xl font-thin text-center text-gray-700">Listen to some of our clients & experience their inspirational journey</p>
      <div className="grid lg:gap-8 gap-4 md:grid-cols-2 grid-cols-1 py-10 place-items-center">
        <div className=" hover:scale-105 transition-all duration-300">
          <iframe className="lg:w-[400px] lg:h-[250px]" src="https://www.youtube.com/embed/LXQQBl5tRK0?start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="hover:scale-105 transition-all duration-300">
          <iframe className="lg:w-[400px] lg:h-[250px]" src="https://www.youtube.com/embed/QiaDsx1O3Z0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="hover:scale-105 transition-all duration-300">
          <iframe className="lg:w-[400px] lg:h-[250px]" src="https://www.youtube.com/embed/XI_H5NKKm_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="hover:scale-105 transition-all duration-300">
          <iframe className="lg:w-[400px] lg:h-[250px]" src="https://www.youtube.com/embed/b5ZmrreOheg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
