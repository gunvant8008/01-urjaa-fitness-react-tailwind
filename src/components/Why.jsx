import React from "react"
import { FcReading, FcStatistics, FcCollaboration, FcGraduationCap } from "react-icons/fc"

const Why = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center max-w-[70vw] gap-10 m-auto justify-center pt-10">
        <h1 className=" md:text-5xl text-3xl font-bold text-center">Why should you choose Urjaa Fitness?</h1>
        <div className="grid lg:grid-flow-row lg:grid-cols-4 md:grid-flow-col md:grid-cols-2 md:grid-rows-2 grid-flow-row gap-10 lg:mt-10">
          <div className="flex flex-col  gap-5 shadow-xl shadow-gray-400 rounded-md p-5 items-center text-center">
            <FcReading size={150} />
            <p className="text-sm">If your nature is to know 'why?'. You just don't want to follow something blindly, You want to Learn.</p>
          </div>
          <div className="flex flex-col  gap-5 shadow-xl shadow-gray-400 rounded-md p-5 items-center text-center">
            <FcStatistics size={150} />
            <p className="text-sm">Weekly strict data collection & comparison with statistics. Learn how body practically changes every week.</p>
          </div>
          <div className="flex flex-col  gap-5 shadow-xl shadow-gray-400 rounded-md p-5 items-center text-center">
            <FcCollaboration size={150} />
            <p className="text-sm">Our coaches are with you all the time in the whole learning journey. Ask any doubt & only follow the real stuff which matters. </p>
          </div>
          <div className="flex flex-col  gap-5 shadow-xl shadow-gray-400 rounded-md p-5 items-center text-center">
            <FcGraduationCap size={150} />
            <p className="text-sm">Get independent & become skilled enough to take care of your body, health & fitness by yourself.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why
