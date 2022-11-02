import React from "react"
import { FcChargeBattery, FcInspection, FcTodoList, FcMindMap } from "react-icons/fc"
const Calculate = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center max-w-[70vw] gap-5 m-auto justify-center pt-10">
        <h1 className=" md:text-5xl text-3xl font-bold text-center">Track your progress</h1>
        <p className="md:text-2xl text-xl font-thin text-center text-gray-700">Use these free fitness tools & trackers to take your journey to the next level!</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-flow-row place-content-center gap-10 ">
          <div className="flex flex-col  gap-5 shadow-xl shadow-gray-400 rounded-md p-5 items-center text-center">
            <FcChargeBattery size={100} />
            <h1 className=" font-bold">BMR CALCULATOR</h1>
            <p className="text-sm">BMR(Basal Metabolic Rate) is the amount of energy your body burns in the whole day in all the biological processes.</p>
            <a className="underline text-blue-600" rel="noopener noreferrer" target="_blank" href="https://www.calculator.net/bmr-calculator.html">
              Calculate Now
            </a>
          </div>
          <div className="flex flex-col  gap-5 shadow-xl shadow-gray-400 rounded-md p-5 items-center text-center">
            <FcInspection size={100} />
            <h1 className=" font-bold">TDEE CALCULATOR</h1>
            <p className="text-sm">TDEE(Total Daily Energy Expenditure) is the total amount of energy your body is spending in a day. It depends on your activity level.</p>
            <a className="underline text-blue-600" rel="noopener noreferrer" target="_blank" href="https://www.calculator.net/tdee-calculator.html">
              Calculate Now
            </a>
          </div>
          <div className="flex flex-col  gap-5 shadow-xl shadow-gray-400 rounded-md p-5 items-center text-center">
            <FcTodoList size={100} />
            <h1 className=" font-bold">BODY FAT % CALCULATOR</h1>
            <p className="text-sm">Body fat % is a better measurement of health as comapare to BMI(Body Mass Index), So we prefer this over BMI. </p>
            <a className="underline text-blue-600" rel="noopener noreferrer" target="_blank" href="https://www.calculator.net/body-fat-calculator.html">
              Calculate Now
            </a>
          </div>
          <div className="flex flex-col  gap-5 shadow-xl shadow-gray-400 rounded-md p-5 items-center text-center">
            <FcMindMap size={100} />
            <h1 className=" font-bold">MACRO CALCULATOR</h1>
            <p className="text-sm">Our daily energy intake is fulfilled by foods & Energy in each and every food is provided by these 3 major macro nutrients- Protein, Carbs & Fats. </p>
            <a className="underline text-blue-600" rel="noopener noreferrer" target="_blank" href="https://www.calculator.net/macro-calculator.html">
              Calculate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculate
