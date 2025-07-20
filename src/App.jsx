// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const textA = `Hi, I am Anurag Acharya.
27 year old and from Itahari.
Thank you for visiting my portfolio`;

const textB = `I started to learn PHP when I was in 7th grade
and ever since I have loved coding and building.
Years later, It still feels like magic.`;

const textC = `I joined computer engineering in 2016. 
Did internship and later got into Javra Software in 2021.
Worked for 9 months as Junior Software Engineer.`;

const textD = `Currently, I am re-seeking entry into world of tech.
I want to start as an Junior Developer or 
It could start from internship as well.`;


export default function App() {
  const [wheel, setWheel] = useState(false);
  useEffect(()=>{
    setTimeout(() => {
      setWheel(true);
    },22000);
  })
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Main Image */}
      <motion.img
        src="/AnuragAcharya.png"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 107, opacity: 1 }}
        transition={{ duration: 2 }}
        className="mx-auto relative z-10"
        alt="Anurag Acharya"
      />

      {/* Animated Lines + Text */}
      <RightArrow percentage="10%" delay={2} />
      <TypewriterText text={textA} top="100px" timing={3} left="64%" />

      <RightArrow percentage="26%" delay={6} />
      <TypewriterText text={textB} top="203px" timing={7} left="64%" />

      <RightArrow percentage="45%" delay={11} />
      <TypewriterText text={textC} top="310px" timing={12} left="64%" />

      <RightArrow percentage="65%" delay={16} />
      <TypewriterText text={textD} top="430px" timing={17} left="64%" />

      <Wheel wheel={wheel}/> 

    </div>
  );
}

const TypewriterText = ({ text, top, timing, left }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: timing }}
      style={{ top, left: `${left}`, position: "absolute" }}
      className="p-4 border bottom-4 h-24 shadow-sm cursor-pointer bg-slate-200
    hover:bg-slate-100 hover:scale-95 transition-transform duration-300"
    >
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
    </motion.div>
  );
};


function RightArrow({ percentage, delay }) {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "180px", opacity: 1 }}
      transition={{ delay, duration: 1 }}
      className="absolute left-[50%] translate-y-[-50%] h-[2px] bg-gray-500 shadow-xl"
      style={{ top: `calc(107px + ${parseFloat(percentage)}%)` }}
    >
      <svg className="absolute right-[-8px] top-[-3px]" width="8" height="8" viewBox="0 0 8 8">
        <polygon points="0,0 0,8 8,4" fill="rgb(107 114 128)" />
      </svg>
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