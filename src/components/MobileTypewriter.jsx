// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function MobileTypewriter({ text, delay, bgColor, isRight = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className={`p-3 rounded-lg shadow-lg ${bgColor} ${isRight ? 'ml-8' : 'mr-8'}`}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + index * 0.02 }}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}