// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function Buttons() {
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