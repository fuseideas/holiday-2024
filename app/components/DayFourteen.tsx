
// components/DayOne.tsx
import { motion } from "framer-motion";

export default function DayFourteen({ enabled }: {enabled: boolean}) {
    return (
        <>
      <div id="fourteen" className={`day-animation w-full h-full block ${enabled ? 'opacity-100' : 'opacity-50'}`}>

      <motion.svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 500 500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={"w-[90%] h-[90%]"}
    >


            <g id="color">
                <rect className="st2" x="83.9" y="13.2" width="333.9" height="465.1"/>
            </g>


    <motion.g id="stringfour"
    animate={enabled ? {y: [10, -10, 10] } : {}}
    transition={{duration: 4, repeatType: 'mirror', repeat: Infinity}}>
    <rect className="st1" x="346.1" y="18.6" width="3" height="200.8" transform="translate(-.5 1.5) rotate(-.3)"/>
    <g>
      <circle className="st8" cx="347.3" cy="107.6" r="19" transform="translate(-1.1 3.7) rotate(-.6)"/>
      <circle className="st10" cx="348.1" cy="104.6" r="15.1" transform="translate(31.8 283.7) rotate(-46.2)"/>
      <path className="st6" d="M347.2,96.8c.2,2.2,2.2,3.7,4.4,3.5,2.2-.2,3.7-2.2,3.5-4.4-.2-2.2-2.2-3.7-4.4-3.5-2.2.2-3.7,2.2-3.5,4.4Z"/>
    </g>
    <g>
      <path className="st9" d="M328.4,57.6c1.2,10.4,10.6,17.9,21,16.8,10.4-1.2,17.9-10.6,16.8-21-1.2-10.4-10.6-17.9-21-16.8-10.4,1.2-17.9,10.6-16.8,21Z"/>
      <circle className="st3" cx="348.1" cy="52.5" r="15.1" transform="translate(270.9 395.9) rotate(-85.9)"/>
      <path className="st6" d="M347.2,44.7c.2,2.2,2.2,3.7,4.4,3.5,2.2-.2,3.7-2.2,3.5-4.4-.2-2.2-2.2-3.7-4.4-3.5s-3.7,2.2-3.5,4.4Z"/>
    </g>
    <g>
      <circle className="st0" cx="347.3" cy="162.9" r="19.1" transform="translate(53.8 409.8) rotate(-65.2)"/>
      <path className="st7" d="M333,161.5c.9,8.3,8.4,14.3,16.7,13.4,8.3-.9,14.3-8.4,13.4-16.7-.9-8.3-8.4-14.3-16.7-13.4s-14.3,8.4-13.4,16.7Z"/>
      <path className="st6" d="M347.2,152c.2,2.2,2.2,3.7,4.4,3.5,2.2-.2,3.7-2.2,3.5-4.4-.2-2.2-2.2-3.7-4.4-3.5-2.2.2-3.7,2.2-3.5,4.4Z"/>
    </g>
    <g>
      <circle className="st4" cx="347.3" cy="222.5" r="19.1" transform="translate(74 531.4) rotate(-81.2)"/>
      <path className="st5" d="M333,221.1c.9,8.3,8.4,14.3,16.7,13.4,8.3-.9,14.3-8.4,13.4-16.7-.9-8.3-8.4-14.3-16.7-13.4-8.3.9-14.3,8.4-13.4,16.7Z"/>
      <path className="st6" d="M347.2,211.6c.2,2.2,2.2,3.7,4.4,3.5,2.2-.2,3.7-2.2,3.5-4.4-.2-2.2-2.2-3.7-4.4-3.5-2.2.2-3.7,2.2-3.5,4.4Z"/>
    </g>
  </motion.g>
  <motion.g id="stringthree"
  animate={enabled ? {y: [-10, 10, -10] } : {}}
  transition={{duration: 4, repeatType: 'mirror', repeat: Infinity}}>
    <polygon className="st1" points="277.2 156.4 276.3 26.1 279.3 26.1 280.2 156.3 277.2 156.4"/>
    <g>
      <circle className="st0" cx="278.2" cy="137.8" r="19" transform="translate(-1.5 3) rotate(-.6)"/>
      <circle className="st7" cx="279" cy="134.7" r="15.1" transform="translate(-11.2 243.1) rotate(-46.2)"/>
      <path className="st6" d="M278.2,126.9c.2,2.2,2.2,3.7,4.4,3.5,2.2-.2,3.7-2.2,3.5-4.4-.2-2.2-2.2-3.7-4.4-3.5-2.2.2-3.7,2.2-3.5,4.4Z"/>
    </g>
    <g>
      <circle className="st8" cx="278.2" cy="66.8" r="19" transform="translate(-3.7 18.2) rotate(-3.7)"/>
      <circle className="st10" cx="279" cy="63.8" r="15.1" transform="translate(33.7 211.1) rotate(-43.9)"/>
      <path className="st6" d="M278.2,56c.2,2.2,2.2,3.7,4.4,3.5,2.2-.2,3.7-2.2,3.5-4.4-.2-2.2-2.2-3.7-4.4-3.5-2.2.2-3.7,2.2-3.5,4.4Z"/>
    </g>
  </motion.g>
  <motion.g id="stringtwo"
  animate={enabled ? {y: [10, -10, 10] } : {}}
  transition={{duration: 4, repeatType: 'mirror', repeat: Infinity}}>
    <polygon className="st1" points="217.8 265.5 216.9 22.7 219.9 22.6 220.8 265.5 217.8 265.5"/>
    <g>
      <circle className="st9" cx="218.9" cy="166.9" r="19" transform="translate(28.4 365.7) rotate(-83.6)"/>
      <path className="st3" d="M204.7,165.6c.9,8.3,8.4,14.2,16.7,13.3,8.3-.9,14.2-8.4,13.3-16.7-.9-8.3-8.4-14.2-16.7-13.3-8.3.9-14.2,8.4-13.3,16.7Z"/>
      <path className="st6" d="M218.8,156.1c.2,2.2,2.2,3.7,4.4,3.5,2.2-.2,3.7-2.2,3.5-4.4-.2-2.2-2.2-3.7-4.4-3.5-2.2.2-3.7,2.2-3.5,4.4Z"/>
    </g>
    <g>
      <circle className="st0" cx="218.9" cy="80.9" r="19" transform="translate(-4 11.8) rotate(-3.1)"/>
      <path className="st7" d="M204.7,79.5c.9,8.3,8.4,14.2,16.7,13.3,8.3-.9,14.2-8.4,13.3-16.7-.9-8.3-8.4-14.2-16.7-13.3-8.3.9-14.2,8.4-13.3,16.7Z"/>
      <path className="st6" d="M218.8,70.1c.2,2.2,2.2,3.7,4.4,3.5,2.2-.2,3.7-2.2,3.5-4.4-.2-2.2-2.2-3.7-4.4-3.5-2.2.2-3.7,2.2-3.5,4.4Z"/>
    </g>
    <g>
      <circle className="st4" cx="218.9" cy="246.2" r="19" transform="translate(-50.3 436.1) rotate(-83.6)"/>
      <path className="st5" d="M204.7,244.8c.9,8.3,8.4,14.2,16.7,13.3,8.3-.9,14.2-8.4,13.3-16.7-.9-8.3-8.4-14.2-16.7-13.3-8.3.9-14.2,8.4-13.3,16.7Z"/>
      <path className="st6" d="M218.8,235.4c.2,2.2,2.2,3.7,4.4,3.5,2.2-.2,3.7-2.2,3.5-4.4-.2-2.2-2.2-3.7-4.4-3.5-2.2.2-3.7,2.2-3.5,4.4Z"/>
    </g>
  </motion.g>
  <motion.g id="stringone"
  animate={enabled ? {y: [-10, 10, -10] } : {}}
  transition={{duration: 4, repeatType: 'mirror', repeat: Infinity}}
  >
    <polygon className="st1" points="148.3 269 147.4 26.1 150.5 26.1 151.4 269 148.3 269"/>
    <g>
      <circle className="st8" cx="149.4" cy="109.8" r="19" transform="translate(-7.8 208.2) rotate(-68.4)"/>
      <circle className="st10" cx="150.2" cy="106.8" r="15.1" transform="translate(21.8 238.9) rotate(-81.2)"/>
      <path className="st6" d="M149.3,99c.2,2.2,2.2,3.7,4.4,3.5,2.2-.2,3.7-2.2,3.5-4.4-.2-2.2-2.2-3.7-4.4-3.5s-3.7,2.2-3.5,4.4Z"/>
    </g>
    <g>
      <circle className="st4" cx="149.4" cy="61.5" r="19" transform="translate(-6.5 19.2) rotate(-7.2)"/>
      <circle className="st5" cx="150.2" cy="58.5" r="15.1" transform="translate(1.4 120.4) rotate(-43.9)"/>
      <path className="st6" d="M149.3,50.7c.2,2.2,2.2,3.7,4.4,3.5s3.7-2.2,3.5-4.4c-.2-2.2-2.2-3.7-4.4-3.5-2.2.2-3.7,2.2-3.5,4.4Z"/>
    </g>
    <g>
      <circle className="st0" cx="149.4" cy="224.5" r="19" transform="translate(-2.4 1.6) rotate(-.6)"/>
      <circle className="st7" cx="150.2" cy="221.5" r="15.1" transform="translate(-111.6 165.8) rotate(-43.9)"/>
      <path className="st6" d="M149.3,213.7c.2,2.2,2.2,3.7,4.4,3.5,2.2-.2,3.7-2.2,3.5-4.4-.2-2.2-2.2-3.7-4.4-3.5-2.2.2-3.7,2.2-3.5,4.4Z"/>
    </g>
    <g>
      <circle className="st9" cx="149.4" cy="278.9" r="19" transform="translate(-164.9 315) rotate(-68.4)"/>
      <circle className="st3" cx="150.2" cy="275.8" r="15.1" transform="translate(-145.3 382.2) rotate(-81.2)"/>
      <path className="st6" d="M149.3,268.1c.2,2.2,2.2,3.7,4.4,3.5,2.2-.2,3.7-2.2,3.5-4.4-.2-2.2-2.2-3.7-4.4-3.5s-3.7,2.2-3.5,4.4Z"/>
    </g>
  </motion.g>
  
  <path id="frame" className="st6" d="M430.1,455.9V0H69.9v455.9h-10.6v44.2h381.5v-44.2h-10.6ZM96.3,26.4h307.4v429.5H96.3V26.4Z"/>
  
  
  <motion.g id="number"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2, delay: 1 }}>
    <path className="st6" d="M271.9,382.4c-6.8,14.2-14.7,38.6-17.8,38.6s-8.6-6.1-8.6-9.2,13.9-30.7,15.3-33.7l-.5-.2c-2.5,3.4-7.3,7.6-9.3,7.6s-2-.3-2-.7,6.8-6.6,13.4-17c6.3-9.9,11.3-21,14.5-21s9.6,2.6,9.6,4.5c0,4.2-7.7,16.9-14.6,30.9Z"/>
    <path className="st6" d="M320,386.7c-.8,1.5-1.6,2.9-2.4,4.4,2.2.5,4,.8,5.4.8,5.2,0,6.7-2.6,7-2.6s.4.2.4.4c0,2.3-6.7,12.7-15.6,12.7s-2.2,0-3.3-.3c-5.9,10.6-10.4,18.8-11.8,18.8-2.3,0-6.6-2.8-6.6-7.7s2.8-8.5,6-14.7c-5.2-2.3-11.6-4.3-15.5-4.3s-4.8,1.1-5.6,1.1-1.6-3.8-1.6-5,9.8-8.6,23.3-20.8c13.5-12.1,21.8-22.2,26.1-22.2s13.7,3.8,13.7,5.3-9.9,17.3-19.6,34.1ZM320.4,359.6c-4.9,3.3-19.6,21.4-25.3,25.5v.5c1.6,0,5.8,1.2,9.5,2.3.9-1.6,1.7-3,2.3-4,3.6-6.5,13.3-22.7,14.3-23.9l-.7-.3Z"/>
  </motion.g>



       

            

    </motion.svg>



      </div>
      </>
    );
  }
  