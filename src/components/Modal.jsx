import React from "react"

const Modal = ({ open, onClose }) => {
  if (!open) return null
  return (
    <div>
      <div onClick={onClose} className="overlay w-full h-full fixed bg-gray-500 bg-opacity-90 z-30">
        <div onClick={e => e.stopPropagation()} className="modalContainer fixed w-5/6 md:w-4/6 lg:w-1/2 h-1/2 top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex text-center items-center justify-center bg-white rounded-md shadow-xl shadow-gray-800 overflow-y-auto ">
          <div className=" m-auto pt-10">
            <p className="cursor-pointer bg-black text-white px-2 py-1 rounded-full fixed top-8 right-8" onClick={onClose}>
              X
            </p>
            <div className="flex items-center flex-col gap-4">
              <p className="font-bold text-red-800">MY STORY</p>
              <h1 className=" md:text-2xl text-l font-bold">Gunvant Sharma- Founder Urjaa Fitness</h1>
              <p className="text-sm px-5 text-justify">
                Dear Audience, I am Gunvant Sharma. Before I tell you exactly how I can help you, let me share how I started. A decade ago, I was a dancer (Many used to call me a great dancer!). However, people don’t believe it anymore. During a rehearsal of a spectacular dance performance, <span className="font-bold underline">I faced an injury in my back(L4 & L5 vertebras were damaged!).</span> It was too painful. Not only unbearably physical pain, but also I could see my dream of pursuing my career as a dancer shattered in hundreds of pieces. Doctors told me that I will have to rest for 6-8 months with medication & treatment, I did that but there were no improvements. I was discouraged. I felt helpless. I wanted to get back on track and live a meaningful life.<span className="underline">Doctors suggested me to go through surgery and series of operations, It was scary to think of it & financially I was not strong at that time (during college days).</span>
              </p>
              <p className="text-sm px-5 text-justify">
                And one day everything changed, stopped all the medications! I decided to take matters into my hand. Deep down inside, I knew I could help myself. When the world said, “Gunvant, you can’t live a normal fit and healthy life again. You have to take tons of medicines, you have to go for surgeries and countless meetings with medical authorities.” I wanted to prove them wrong. I was tired of feeling helpless. I hated myself looking in the mirror. I never wanted to pay any money for the useless reports and over-priced medical treatments. <span className="underline"> So what did I do?</span>{" "}
              </p>
              <p className="text-sm px-5 text-justify">
                {" "}
                Started learning the body and how it functions, <span className="underline font-bold">started to understand body science, exercise science. One of the biggest advantages I had was that I was teaching bio chemistry at that time (to IIT- NEET students ), so learning new things was pretty much exciting for me.</span> The more I learned, the more I got obsessed with body science. I was quite amazed to know that simply by managing hormones, food and exercise; we can see tremendous results. You probably think, “Duh! I heard that before.” I thought the same and I thought to give it a try. I started reading great books on health and body science. Many of them were telling the same story, but few of them blew my mind. I decided to hire health experts from all over the world. I learned from the BEST OF THE BEST in the world. I started applying the sacred and pure knowledge of what nature has offered us. I made a few mistakes, but the results were astounding. Take a Look….
              </p>
              <div>
                <iframe className="lg:w-[400px] lg:h-[250px]" src="https://www.youtube.com/embed/ylOG7Ai9Ka0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <h1 className=" md:text-xl text-md font-bold">SURPRISED? IT’S UNBELIEVABLE!</h1>
              <p className="text-sm px-5 text-justify">
                Even I can’t believe I have done it, But I did it. On one day, I visited my old friends at a party after a long time. They could not believe the change I brought in my body. I just shared casually what I learned. I was in a light mood, but they became quite serious about knowing more. They got interested. <span className="underline">They asked me a series of questions. They started sharing their problems.</span>{" "}
              </p>
              <p className="text-sm px-5 text-justify underline">“Hey, I am overweight. How can I lose weight?” “No matter how much I eat, I don’t gain weight.” “Don’t tell anyone but I have been going on a walk for the last 5 years, but I do not see any change. Those who have been walking with me for the last 5 years they are even worse than before.” “I don’t want to go to the gym. Can I still be fit?” “Dieting is the last thing I want to do. It never works.” “I can’t stop eating tasty food. But I want to quit somehow.”</p>
              <p className="text-sm px-5 text-justify">“I am still not married; I want to look good, and you know I want to impress the girls.” “I am only 37 years old, but I feel like I am 60 years old.” “My elder brother is 45 but he wants to look 30. Can you tell him how to look 30 in the 40s and 50s?” “ My sexual power is very low, how can i improve that?” I was bombarded with many such questions, and I answered each of them elegantly. I shared some tips to change their lifestyle. Surprisingly, after 2 months, they contacted me again with amazement in their body. They got surprising results. They all told me, “Gunvant, there are hundreds of people who don’t know how to live a healthy life. You should really help people to take care of the place they are living in – Their Body.” At this moment, I realised this is why I am living in this world.</p>
              <p className="text-sm px-5 text-justify">
                That’s my destiny. I want to be known as a game-changer who shapes people and shaping the entire world. I started teaching people how to live a healthy life by just learning the science of body, food and exercise. I started getting obsessed with the results of people. Things started moving fast. I started becoming happier because I started hearing from people, <span className="underline font-bold pb-8"> “Gunvant, you are the reason for my healthy lifestyle. You save my money I could have wasted on medicines. You saved my relationship. You made me look a lot younger.” I started booking more and more clients. I started creating results people call it effortless and magical.</span> Now we provide online consultancy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
