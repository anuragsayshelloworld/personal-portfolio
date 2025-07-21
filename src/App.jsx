import Wheel from "./components/Wheel";
import Buttons from "./components/Buttons";
import { useEffect, useState } from "react";
import MainImage from "./components/MainImage";
import Lightning from "./components/Lightening";
import MobileVersion from "./components/MobileVersion";
import LeftTerminalText from "./components/LeftTerminalText";
import SenderTypewriter from "./components/SenderTypewriter";
import ReceiverTypewriter from "./components/ReceiverTypewriter";
import { textA, textB, textC, textD, textF, textE } from "./constants/Texts";

export default function App() {
  
  const [wheel, setWheel] = useState(false);
  const [trig, setTrig] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setWheel(true);
    }, 28000);
    }, []);

  useEffect(() => {
    setTimeout(() => {
      setTrig(true);
    }, 1000);
    }, []);

  return (
    <div className="relative w-full min-h-screen overflow-auto bg-gray-100">
      <div className="hidden sm:block">
        
        <MainImage/>

        <Lightning trigger={trig} duration={2700} />  

        <ReceiverTypewriter text={textA} top="130px" timing={4} left="60%" />

        <SenderTypewriter text={textB} top="210px" timing={8} left="70%" />

        <ReceiverTypewriter text={textC} top="290px" timing={12} left="60%" />

        <SenderTypewriter text={textD} top="390px" timing={19} left="70%" />

        <ReceiverTypewriter text={textE} top="485px" timing={24} left="63%" />

        <Wheel wheel={wheel} />

        <LeftTerminalText text={textF} top="50px" timing={31} left="10%" />

        <Buttons />

      </div>

      <div className="block sm:hidden">
        <MobileVersion />
      </div>

    </div>
  );
}




