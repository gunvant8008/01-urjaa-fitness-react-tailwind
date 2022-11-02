import React from "react"

const Connect = () => {
  return (
    <div>
      <div className="flex flex-col  md:gap-20 gap-8 m-auto py-10 max-w-[70vw] justify-center items-center">
        <h1 className=" md:text-5xl text-3xl font-bold text-center">Connect On Instagram</h1>
        <div></div>
      </div>
      <div className="flex flex-col  md:gap-20 gap-8 m-auto py-10 max-w-[70vw] justify-center items-center">
        <h1 className=" md:text-5xl text-3xl font-bold text-center">Connect On Youtube</h1>
        <div className="grid lg:gap-8 gap-4 md:grid-cols-2 grid-cols-1 place-items-center">
          <div className=" hover:scale-105 transition-all duration-300">
            <iframe className="lg:w-[400px] lg:h-[250px]" src="https://www.youtube.com/embed/nOOhao6CpTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="hover:scale-105 transition-all duration-300">
            <iframe className="lg:w-[400px] lg:h-[250px]" src="https://www.youtube.com/embed/c7ipbzXAENI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="hover:scale-105 transition-all duration-300">
            <iframe className="lg:w-[400px] lg:h-[250px]" src="https://www.youtube.com/embed/Z6i4K1BmRyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="hover:scale-105 transition-all duration-300">
            <iframe className="lg:w-[400px] lg:h-[250px]" src="https://www.youtube.com/embed/tj5Q65VM258" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="hover:scale-105 transition-all duration-300">
            <iframe className="lg:w-[400px] lg:h-[250px]" src="https://www.youtube.com/embed/I-JxYDkLSbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="hover:scale-105 transition-all duration-300">
            <iframe className="lg:w-[400px] lg:h-[250px]" src="https://www.youtube.com/embed/5R2gIIMzp5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
