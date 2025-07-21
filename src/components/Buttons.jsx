// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Messageportal from "./MessagePortal";
import { useState } from "react";


export default function Buttons() {

  const [messagebox, setMessageBox] = useState(false);

  function Download() {
  const link = document.createElement("a");
  link.href = "/Anurag Acharya.pdf";
  link.download = "Anurag_Acharya_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 36 }}
        className="absolute top-56 left-36 p-4 border hover:bg-red-50 border-red-950 transform transition-all duration-500 cursor-pointer shadow-lg"
        onClick={()=>setMessageBox(true)}>
        Contact Anurag Acharya
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 36.3 }}
        className="absolute top-[300px] left-36 p-4 border hover:bg-red-50 border-red-950 transform transition-all duration-500 cursor-pointer shadow-lg"
        onClick={Download}
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
      {
        messagebox && (
          <Messageportal onClose={setMessageBox}/>
        )
      }
    </>
  );
}