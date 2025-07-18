import { Mail, Github, Phone, MapPin, GraduationCap, Building } from "lucide-react";

export default function MyInfo() {
  return (
    <div className="relative w-80">

      <img
        src="/myImage.jpg"
        alt="Profile"
        className="absolute left-1/2 -top-10 transform -translate-x-1/2 h-20 w-20 rounded-full border-4 border-white shadow-md"
      />


      <div className="flex flex-col items-center pt-16 px-6 py-4 bg-white border border-gray-100 border-r shadow-[ -6px_0_6px_-1px_rgba(0,0,0,0.1)] gap-3">
        <h1 className="text-xl font-semibold">Anurag Acharya</h1>
        <p className="text-sm text-gray-600">Frontend Developer</p>
        <p className="px-3 py-1 text-sm text-green-800 bg-green-100 hover:bg-green-200">
         Available for hire
        </p>

        <div className="w-full text-sm text-gray-700 space-y-2 mt-2">
          <InfoRow icon={<Mail size={16} />} text="anuragsayshelloworld@gmail.com" />
          <InfoRow icon={<Phone size={16} />} text="+977-9812368214" />
          <InfoRow icon={<Github size={16} />} text="anuragsayshelloworld" link="https://github.com/anurag" />
          <InfoRow icon={<MapPin size={16} />} text="Bhaktapur, Nepal" />
          <InfoRow icon={<GraduationCap size={16} />} text="B.E. Computer Engineering" />
          <InfoRow icon={<Building size={16} />} text="Nepal Engineering College" />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, text, link }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      {link ? (
        <a href={link} className="hover:underline" target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}
