import { textA, textB, textC, textD, textE, textF } from "../constants/Texts";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import MobileTypewriter from "./MobileTypewriter";

export default function MobileVersion() {
  return (
    <div className="relative w-full min-h-screen bg-gray-100 p-4">
      <div className="text-center pt-8">
        {/* Dummy Image for Mobile */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold shadow-lg"
        >
          PHOTO
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-2xl font-bold mb-6 text-gray-800"
        >
          Anurag Acharya
        </motion.h1>

        <div className="space-y-4 text-sm">
          <MobileTypewriter text={textA} delay={2} bgColor="bg-gray-200" />
          <MobileTypewriter text={textB} delay={6} bgColor="bg-blue-500 text-white" isRight={true} />
          <MobileTypewriter text={textC} delay={10} bgColor="bg-gray-200" />
          <MobileTypewriter text={textD} delay={17} bgColor="bg-blue-500 text-white" isRight={true} />
          <MobileTypewriter text={textE} delay={22} bgColor="bg-gray-200" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 30 }}
            className="bg-black text-green-400 p-3 rounded-lg font-mono text-xs shadow-lg"
          >
            {textF.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 30 + index * 0.03 }}
                style={{ whiteSpace: "pre-wrap" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          
          <div className="space-y-3 mt-8">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 36 }}
              className="w-full p-3 border border-red-950 hover:bg-red-50 transition-colors shadow-lg rounded"
            >
              Contact Anurag Acharya
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 36.3 }}
              className="w-full p-3 border border-red-950 hover:bg-red-50 transition-colors shadow-lg rounded"
            >
              Download his Resume
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 36.6 }}
              className="w-full p-3 border border-red-950 hover:bg-red-50 transition-colors shadow-lg rounded"
            >
              View his projects
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

