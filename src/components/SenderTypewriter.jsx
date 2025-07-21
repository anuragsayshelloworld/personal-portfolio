// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function SenderTypewriter({ text, top, timing, left }){
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