// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const textA = `I'm Anurag Acharya—a passionate developer from Itahari.
At 27, I'm ready to bring fresh energy to your next project.`;

const textB = `My coding journey began in 7th grade with PHP, and that
spark of curiosity ignited a lifelong passion for code.`;

const textC = `I pursued Computer Engineering starting in 2016, gaining hands-on
experience through internships before joining Javra Software in 2021 as a
Junior Software Engineer, where I spent 9 valuable months honing my skills.`;

const textD = `Currently seeking a Frontend Developer role where I can 
apply my growing expertise in React, TailwindCSS, Framer Motion, Redux toolkit and React Query`;

const textE = `I recently did an internship working with Express.js and NestJS,
giving me solid fundamentals in backend JavaScript development, 
including real-time Socket implementation.`;

const textF = `facebook.com/anuragsayshelloworld
github.com/anuragsayshelloworld
WhatsApp: 9812368214
Viber: 9812368214`;

export default function App() {
  const [wheel, setWheel] = useState(false);
  useEffect(()=>{
    setTimeout(() => {
      setWheel(true);
    },28000);
  })
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Main Image */}
      <motion.img
  src="/AnuragAcharya.png"
  initial={{ y: -300, opacity: 0 }}
  animate={{ y: 107, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 5,
    duration: 6,
  }}
  className="mx-auto relative z-10"
  alt="Anurag Acharya"
/>

      {/* Animated Lines + Text */}

      <ReceiverTypewriter text={textA} top="130px" timing={2} left="60%" />


      <SenderTypewriter text={textB} top="210px" timing={6} left="70%" />


      <ReceiverTypewriter text={textC} top="290px" timing={10} left="60%" />


      <SenderTypewriter text={textD} top="390px" timing={17} left="70%" />


      <ReceiverTypewriter text={textE} top="485px" timing={22} left="63%" />

      <Wheel wheel={wheel}/> 

      <LeftTerminalText text={textF} top="50px" timing={30} left="10%"/>

<Buttons/>

    </div>
  );
}

const SenderTypewriter = ({ text, top, timing, left }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: timing }}
      style={{ top, left: `${left}`, position: "absolute" }}
      className="relative max-w-2xl cursor-pointer"
    >
      <div
        className="px-4 py-2.5 rounded-2xl shadow-sm bg-blue-500 text-white ml-auto hover:bg-blue-600 transition-colors duration-300"
        style={{ borderRadius: "18px 18px 4px 18px" }}
      >
        <div className="font-normal text-[15px] leading-[20px] -tracking-[0.01em]">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: timing + index * 0.03 }}
              style={{ whiteSpace: "pre-wrap" }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ReceiverTypewriter = ({ text, top, timing, left }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: timing }}
      style={{ top, left: `${left}`, position: "absolute" }}
      className="relative max-w-2xl cursor-pointer"
    >
      <div
        className="px-4 py-2.5 rounded-2xl shadow-sm bg-gray-200 text-gray-900 mr-auto hover:bg-gray-300 transition-colors duration-300"
        style={{ borderRadius: "18px 18px 18px 4px" }}
      >
        <div className="font-normal text-[15px] leading-[20px] -tracking-[0.01em]">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: timing + index * 0.03 }}
              style={{ whiteSpace: "pre-wrap" }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


function RightArrow({ percentage, delay, width }) {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: width, opacity: 1 }}
      transition={{ delay, duration: 1 }}
      className="absolute left-[50%] translate-y-[-50%] h-[1px] bg-gray-300 shadow-xl"
      style={{ top: `calc(107px + ${parseFloat(percentage)}%)` }}
    >
    </motion.div>
  );
}

function Wheel({wheel}){
  return (
          <>
          {wheel && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>    
          <motion.img src="/wheel.png" className="w-40"
          initial={{y: -50, rotate:0}}
          animate={{y: -50, rotate:360}}
          transition={{duration:5, repeat: Infinity}}/>
          </motion.div>
          )}
          </>
  );
}

const LeftTerminalText = ({ text, top, timing, left }) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: timing }}
      style={{ top, left, position: "absolute" }}
      className="bg-black text-green-400 font-mono rounded-xl shadow-lg max-w-sm border border-gray-700"
    >
      {/* Terminal Header */}
      <div className="flex items-center space-x-2 p-2 rounded-t-xl bg-[#2f2f2f]">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>

      {/* Terminal Body */}
      <div className="px-4 pb-4 pt-2">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: timing + index * 0.03 }}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {char}
          </motion.span>
        ))}
        {/* Blinking Cursor */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            delay: timing + text.length * 0.03,
          }}
          className="ml-1"
        >
          ▊
        </motion.span>
      </div>
    </motion.div>
  );
};

function Buttons() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 36 }}
        className="absolute top-56 left-36 p-4 border hover:bg-red-50 border-red-950 transform transition-all duration-500 cursor-pointer shadow-lg"
      >
        Contact Anurag Acharya
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 36.3 }}
        className="absolute top-[300px] left-36 p-4 border hover:bg-red-50 border-red-950 transform transition-all duration-500 cursor-pointer shadow-lg"
      >
        Download his Resume
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 36.6 }}
        className="absolute top-[380px] left-36 p-4 border hover:bg-red-50 border-red-950 transform transition-all duration-500 cursor-pointer shadow-lg"
      >
        View his projects
      </motion.div>
    </>
  );
}
