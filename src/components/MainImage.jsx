export default function MainImage(){
  return <motion.img
          src="/AnuragAcharya.png"
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 107, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 5,
            duration: 2,
          }}
          className="mx-auto relative z-10"
          alt="Anurag Acharya"
        />
}
