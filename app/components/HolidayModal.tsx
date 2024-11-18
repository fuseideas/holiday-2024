// components/HolidayModal.tsx
"use client";

import { useQuery } from "@apollo/client";
import { GET_HOLIDAY_BY_ID } from "@/app/queries/holiday";
import { motion, AnimatePresence } from "framer-motion";

interface HolidayModalProps {
  holidayId: string;
  rect: DOMRect | null;
  onClose: () => void;
}

export default function HolidayModal({ holidayId, rect, onClose }: HolidayModalProps) {
  const { loading, error, data } = useQuery(GET_HOLIDAY_BY_ID, {
    variables: { id: holidayId },
  });

  if (loading) return null;
  if (error) return <p>Error loading holiday details.</p>;

  const { title, content, holidayAcf } = data.holiday;

  // Animation variants for the modal
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
          className="relative p-4 bg-white shadow-lg rounded-lg w-[600px] max-w-[90vw] max-h-[80vh] overflow-y-auto"
          variants={modalVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-2 right-2 text-gray-700" onClick={onClose}>
            ✖
          </button>

          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div className="mb-4" dangerouslySetInnerHTML={{ __html: content }} />
          {holidayAcf.video && (
            <div className="mb-4">
              <video controls className="w-full rounded-lg">
                <source src={holidayAcf.video} type="video/mp4" />
              </video>
            </div>
          )}
          {holidayAcf.windowOpenCopy && <p className="text-lg mb-4">{holidayAcf.windowOpenCopy}</p>}
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
