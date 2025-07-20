// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Lightning({ trigger, duration = 10000 }) {
  const [showLightning, setShowLightning] = useState(false);

  useEffect(() => {
    if (trigger) {
      setShowLightning(true);
      const timer = setTimeout(() => {
        setShowLightning(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [trigger, duration]);

  if (!showLightning) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Initial flash background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0, 0.4, 0, 0.2, 0] }}
        transition={{ duration: 0.8, times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 1] }}
        className="absolute inset-0 bg-white"
      />

      {/* Subsequent random flashes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.2, 0, 0, 0.15, 0, 0, 0.25, 0] }}
        transition={{
          duration: 8,
          delay: 1.5,
          times: [0, 0.1, 0.15, 0.2, 0.4, 0.45, 0.5, 0.7, 0.75, 1],
        }}
        className="absolute inset-0 bg-white"
      />

      {/* Center lightning strikes (first 2 seconds) */}
      <LightningBolt delay={0} startX={30} endX={45} />
      <LightningBolt delay={0.15} startX={60} endX={40} />
      <LightningBolt delay={0.4} startX={25} endX={55} />
      <LightningBolt delay={0.7} startX={70} endX={35} />
      <LightningBolt delay={1.1} startX={15} endX={60} />
      <LightningBolt delay={1.5} startX={80} endX={25} />

      {/* Random lightning across screen (2s - 10s) */}
      <LightningBolt delay={2.2} startX={5} endX={20} />
      <LightningBolt delay={2.8} startX={85} endX={90} />
      <LightningBolt delay={3.5} startX={10} endX={25} />
      <LightningBolt delay={4.1} startX={75} endX={95} />
      <LightningBolt delay={4.7} startX={2} endX={15} />
      <LightningBolt delay={5.3} startX={88} endX={98} />
      <LightningBolt delay={6.0} startX={8} endX={30} />
      <LightningBolt delay={6.6} startX={70} endX={85} />
      <LightningBolt delay={7.2} startX={5} endX={18} />
      <LightningBolt delay={7.8} startX={82} endX={95} />
      <LightningBolt delay={8.4} startX={12} endX={28} />
      <LightningBolt delay={9.0} startX={75} endX={92} />
      <LightningBolt delay={9.5} startX={3} endX={22} />
    </div>
  );
}

// Clamp helper function
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

function LightningBolt({ delay, startX, endX }) {
  // Generate realistic lightning path clamped within 5-95% viewport bounds
  const generateLightningPath = () => {
    let path = `M${clamp(startX, 5, 95)} 0`;
    let currentX = startX;
    let currentY = 0;

    for (let i = 0; i < 8; i++) {
      const rawY = (i + 1) * 12.5;
      const nextY = clamp(rawY, 0, 95);

      const variation = (Math.random() - 0.5) * 15;
      const rawX = startX + ((endX - startX) * (i / 7)) + variation;
      const targetX = clamp(rawX, 5, 95);

      currentX = targetX;
      currentY = nextY;

      path += ` L${currentX} ${currentY}`;
    }

    return path;
  };

  const mainPath = generateLightningPath();

  const bx1 = clamp(startX + (endX - startX) * 0.3, 5, 95);
  const bx2 = clamp(bx1 + 8, 5, 95);
  const bx3 = clamp(bx1 + 15, 5, 95);
  const branchPath1 = `M${bx1} ${clamp(25, 0, 95)} L${bx2} ${clamp(40, 0, 95)} L${bx3} ${clamp(55, 0, 95)}`;

  const bx4 = clamp(startX + (endX - startX) * 0.6, 5, 95);
  const bx5 = clamp(bx4 - 10, 5, 95);
  const bx6 = clamp(bx4 - 5, 5, 95);
  const branchPath2 = `M${bx4} ${clamp(60, 0, 95)} L${bx5} ${clamp(75, 0, 95)} L${bx6} ${clamp(90, 0, 95)}`;

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0, 1, 0, 0.8, 0, 1, 0],
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        times: [0, 0.05, 0.1, 0.15, 0.25, 0.35, 0.45, 0.55, 1],
      }}
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
    >
      {/* Main lightning bolt with glow */}
      <motion.path
        d={mainPath}
        stroke="#ffffff"
        strokeWidth="0.3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.05, delay: delay }}
        style={{
          filter:
            "drop-shadow(0 0 3px #87ceeb) drop-shadow(0 0 6px #ffffff) drop-shadow(0 0 9px #87ceeb)",
        }}
      />

      {/* Thicker inner bolt */}
      <motion.path
        d={mainPath}
        stroke="#87ceeb"
        strokeWidth="0.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.05, delay: delay }}
      />

      {/* Branch 1 */}
      <motion.path
        d={branchPath1}
        stroke="#ffffff"
        strokeWidth="0.2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.03, delay: delay + 0.02 }}
        style={{
          filter: "drop-shadow(0 0 2px #87ceeb) drop-shadow(0 0 4px #ffffff)",
        }}
      />

      {/* Branch 2 */}
      <motion.path
        d={branchPath2}
        stroke="#ffffff"
        strokeWidth="0.15"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.02, delay: delay + 0.04 }}
        style={{
          filter: "drop-shadow(0 0 2px #87ceeb) drop-shadow(0 0 3px #ffffff)",
        }}
      />
    </motion.svg>
  );
}
