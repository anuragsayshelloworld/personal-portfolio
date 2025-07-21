import ReactDOM from "react-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

export default function Messageportal({ onClose }) {
  const [msg, setMsg] = useState("");

  const sendMessage = () => {
    if (msg.trim() === "") return;
    alert("Message sent: " + msg);
    setMsg("");
    onClose();
  };

  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0, y: 20, x:0 }}
      animate={{ opacity: 1, y: -140, x:-330 }}
      transition={{ duration: 0.3 }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-2xl w-72 z-50 border border-gray-300"
    >
      <h2 className="text-sm font-semibold mb-2 text-center">Send a message to Anurag 💬</h2>
      <textarea
        className="w-full text-sm p-2 border rounded mb-3 resize-none focus:outline-none focus:ring"
        rows="3"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type your message here..."
      />
      <div className="flex justify-between">
        <button
          onClick={()=>onClose(false)}
          className="text-xs bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
        >
          Close
        </button>
        <button
          onClick={sendMessage}
          className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </motion.div>,
    document.getElementById("portal-root")
  );
}
