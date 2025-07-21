// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function Wheel({ wheel }) {
  return (
    <>
      {wheel && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <motion.img
            src="/wheel.png"
            className="w-40"
            initial={{ y: -50, rotate: 0 }}
            animate={{ y: -50, rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity }}
            alt="Wheel"
          />
        </motion.div>
      )}
    </>
  );
}
