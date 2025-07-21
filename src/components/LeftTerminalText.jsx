// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function LeftTerminalText ({ text, top, timing, left }){
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
