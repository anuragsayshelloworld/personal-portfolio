import { motion } from "framer-motion";

const textA = `Hi, I am Anurag Acharya.
27 year old and from Itahari.
Thank you for visiting my portfolio`;

const textB = `I started to learn PHP when I was in 7th grade
and ever since I have loved coding and building.
Years later, It still feels like magic.`;

const textC = `I joined computer engineering in 2016. 
Did internship and later got into Javra Software in 2021.
Worked for 9 months as Junior Software Engineer.`;

const textD = `Curently, I am reseeking entry into world of tech.
I want to start as an Junior Devloper or 
It could start from internship as well`;

export default function App() {
  return (
    <div className="relative w-full h-screen">
      {/* The image */}
      <motion.img
        src="/AnuragAcharya.png"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 107, opacity: 1 }}
        transition={{ duration: 2 }}
        className="mx-auto relative z-10"
      />
      {/*First Line*/}

     <RightArrow percentage="10%" delay="2"/> 
     <TypewriterText text={textA} top="100px" timing={3}/>
     <RightArrow percentage="26%" delay="7"/>
     <TypewriterText text={textB} top="203px" timing={8}/>
     <RightArrow percentage="45%" delay="14"/>
     <TypewriterText text={textC} top="310px" timing={15}/>
     <RightArrow percentage="65%" delay="22"/>
     <TypewriterText text={textD} top="430px" timing={23}/>  
     </div>
  );
}


const TypewriterText = ({text, top, timing}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{delay:timing}}
      className="absolute p-8 left-[64%]"
      style={{top:top}}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: timing + index * 0.05 }}
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
function RightArrow({percentage, delay}){
  return <motion.div
         initial={{ width: 0 }}
         animate={{ width: "200px" }}
         transition={{ delay: delay, duration: 1 }}
         className="absolute left-[50%] translate-y-[-50%] h-[2px] bg-gray-500 shadow-xl"
         style={{ top: `calc(107px + ${percentage})` }} // Move to inline style
         >
      
       <svg className="absolute right-[-8px] top-[-3px]" width="8" height="8" viewBox="0 0 8 8">
        <polygon points="0,0 0,8 8,4" fill="rgb(107 114 128)"/>
       </svg>
      </motion.div>
}