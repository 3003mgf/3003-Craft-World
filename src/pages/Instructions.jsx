/* eslint-disable react-refresh/only-export-components */
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import transition from "../config/transition";
import { motion } from "framer-motion";
import { slideAnimation } from "../config/motion";
import { Link } from "react-router-dom";

const Instructions = () => {
  

  return ( 
    <div className="bg-slate-400 h-screen max-h-screen w-full flex items-center justify-center relative bg-[url('https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/wallpaper_dungeons_flames_nether_2560x1440.png')] bg-cover bg-center bg-no-repeat">
      <Link to="/" className="absolute top-5 left-5 bg-black rounded-full p-1 flex items-center justify-center cursor-pointer">
        <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6 text-white" />
      </Link>

      <motion.div className="bg-black/80 mx-auto w-[32rem] border-[6px] flex items-center justify-center flex-col border-black/20 rounded-sm backdrop-blur-sm px-3 py-6" {...slideAnimation("left")}>
        {/* <img src="/images/LavaInstructions.png" alt="Instructions" className="w-[20rem]"/> */}
        <div className="text-white flex items-start justify-center flex-col w-full fonty">
          <p className="font-semibold text-xl font-sans text-center mx-auto mb-5"><strong>Master Your World with These Controls:</strong></p>
          
          <div className="px-5 space-y-5 text-sm py-2">
            <p>• To move right, use the mighty <strong className="bg-black px-3 py-1 mr-1 text-xs tracking-wide font-mono border-2 border-gray-500">D</strong> key.</p>
            <p>• To move left, unleash the power of <strong className="bg-black px-3 py-1 mr-1 text-xs tracking-wide font-mono border-2 border-gray-500">A</strong>.</p>
            <p>• To move backwards, command the force of <strong className="bg-black px-3 py-1 mr-1 text-xs tracking-wide font-mono border-2 border-gray-500">S</strong>.</p>
            <p>• To move forward, embark on the journey with <strong className="bg-black px-3 py-1 mr-1 text-xs tracking-wide font-mono border-2 border-gray-500">W</strong>.</p>
            <p>• To ascend, launch into the sky with the <strong className="bg-black px-3 py-1 mr-1 text-xs tracking-wide font-mono border-2 border-gray-500">Spacebar</strong>.</p>
            <p>• To obliterate a cube, left-click, hold, and invoke <strong className="bg-black px-3 py-1 mr-1 text-xs tracking-wide font-mono border-2 border-gray-500">Shift</strong>.</p>
            <p>• To select textures, wield the magic of keyboard numbers.</p>
            <p>• To unveil or conceal textures, deploy the spell of letter <strong className="bg-black px-3 py-1 mr-1 text-xs tracking-wide font-mono border-2 border-gray-500">H</strong>.</p>
            <p>• To preserve your realm, safeguard it with the <strong className="bg-black px-3 py-1 mr-1 text-xs tracking-wide font-mono border-2 border-gray-500">SAVE</strong> button.</p>
            <p>• To restart your universe, reset it with the <strong className="bg-black px-3 py-1 mr-1 text-xs tracking-wide font-mono border-2 border-gray-500">RESET</strong> button.</p>
            <p>• To hide the menu, use the legendary <strong className="bg-black px-3 py-1 mr-1 text-xs tracking-wide font-mono border-2 border-gray-500">M</strong>.</p>
          </div>
        </div>
      </motion.div>
    </div>
   );
}
 
export default transition(Instructions);