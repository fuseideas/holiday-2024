"use client";

import { useQuery } from "@apollo/client";
import { GET_HOLIDAY_BY_ID } from "@/app/queries/holiday";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import Player from "@vimeo/player";
import { XMarkIcon } from "@heroicons/react/24/solid"; // Import the close icon


interface HolidayModalProps {
  holidayId: string;
  onClose: () => void;
}

export default function HolidayModal({ holidayId, onClose }: HolidayModalProps) {
  const { loading, error, data } = useQuery(GET_HOLIDAY_BY_ID, {
    variables: { id: holidayId },
  });

  const vimeoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data?.holiday?.holidayAcf?.video && vimeoRef.current) {
      const vimeoPlayer = new Player(vimeoRef.current, {
        url: data.holiday.holidayAcf.video,
        responsive: true, // Ensures responsiveness
      });

      return () => {
        vimeoPlayer.destroy(); // Cleanup player on unmount
      };
    }
  }, [data]);

  if (loading) return null;
  if (error) return <p>Error loading holiday details.</p>;

  const { title, holidayAcf } = data.holiday;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="relative p-4 bg-[#ecd6a7] shadow-xl rounded-lg w-[600px] max-w-[90vw] max-h-[80vh] overflow-y-auto bg-[url('/paper.jpg')] bg-cover"
          variants={modalVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
       
       <button
  className="absolute top-2 right-2 p-2 rounded-full text-gray-200 bg-gray-900 focus:outline-none"
  onClick={onClose}
>
  <motion.div
    whileHover={{ rotate: 90, scale: 1.2 }} // Rotate 90 degrees and scale up
    whileTap={{ scale: 0.9 }} // Slight shrink on click
  >
    <XMarkIcon className="h-12 w-12" />
  </motion.div>
</button>

          <h2 className="mb-4 modal">{title}</h2>


          {/* Vimeo Player */}
          {holidayAcf.video && (
            <div className="relative overflow-hidden pb-[56.25%] h-0">
              <div
                ref={vimeoRef}
                className="absolute top-0 left-0 w-full h-full"
              ></div>
            </div>
          )}

          {holidayAcf.windowOpenCopy && (
            <div
              className="text-lg my-4 copy"
              dangerouslySetInnerHTML={{ __html: holidayAcf.windowOpenCopy }}
            />
          )}

          {holidayAcf.image?.node?.sourceUrl && (
            <img
              src={holidayAcf.image.node.sourceUrl}
              alt={title}
              className="w-full rounded-lg"
            />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
