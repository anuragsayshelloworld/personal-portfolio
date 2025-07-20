import { motion } from "framer-motion";

export default function App() {
  const lines = [
    { width: "280px", text: "Hi, I'm Anurag", delay: 2 },
    { width: "220px", text: "Full-Stack Developer", delay: 2.8 },
    { width: "190px", text: "React & Node.js", delay: 3.6 },
    { width: "250px", text: "Building scalable solutions", delay: 4.4 },
    { width: "160px", text: "3+ years experience", delay: 5.2 },
    { width: "200px", text: "Let's create together", delay: 6.0 },
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* The image */}
      <motion.img
        src="/AnuragAcharya.png"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 107, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="mx-auto relative z-10 drop-shadow-lg"
      />
      
      {/* Dynamic lines with text */}
      {lines.map((line, index) => (
        <div key={index} className="absolute left-[50%]" style={{ top: `calc(107px + ${15 + index * 8}%)` }}>
          {/* Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: line.width }}
            transition={{ delay: line.delay, duration: 1, ease: "easeInOut" }}
            className={`h-[2px] ${
              index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-400' :
              index === 1 ? 'bg-gradient-to-r from-emerald-500 to-emerald-300' :
              index === 2 ? 'bg-gradient-to-r from-purple-500 to-purple-300' :
              index === 3 ? 'bg-gradient-to-r from-orange-500 to-orange-300' :
              index === 4 ? 'bg-gradient-to-r from-teal-500 to-teal-300' :
              'bg-gradient-to-r from-rose-500 to-rose-300'
            } shadow-sm`}
            style={{ transformOrigin: "left center" }}
          />
          
          {/* Text appearing after line */}
          <motion.p
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: line.delay + 1, duration: 0.6, ease: "easeOut" }}
            className={`absolute top-[-12px] text-gray-700 font-medium whitespace-nowrap ${
              index === 0 ? 'text-lg font-semibold' : 'text-sm'
            }`}
            style={{ left: line.width, marginLeft: '12px' }}
          >
            {line.text}
          </motion.p>
          
          {/* Small dot at end of line */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: line.delay + 0.8, duration: 0.3, ease: "backOut" }}
            className={`absolute top-[-4px] w-2 h-2 rounded-full ${
              index === 0 ? 'bg-blue-500' :
              index === 1 ? 'bg-emerald-500' :
              index === 2 ? 'bg-purple-500' :
              index === 3 ? 'bg-orange-500' :
              index === 4 ? 'bg-teal-500' :
              'bg-rose-500'
            }`}
            style={{ left: line.width, transform: 'translateX(-50%)' }}
          />
        </div>
      ))}
    </div>
  );
}