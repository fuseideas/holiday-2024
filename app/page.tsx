// app/page.tsx
"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_HOLIDAYS } from "@/app/queries/holiday";
import HolidayModal from "@/app/components/HolidayModal";
import { AnimatePresence } from "framer-motion";

import DayOne from "@/app/components/DayOne";
import DayTwo from "@/app/components/DayTwo";
import DayThree from "@/app/components/DayThree";


type Holiday = {
  id: string;
  name: string;
  date: string;
};


export default function HomePage() {
  const [selectedHoliday, setSelectedHoliday] = useState<string | null>(null);
  const [clickedElementRect, setClickedElementRect] = useState<DOMRect | null>(null);
  const { loading, error, data } = useQuery(GET_ALL_HOLIDAYS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading holidays.</p>;

  const holidays = data.holidays.nodes;

  const renderHolidayAnimation = (index: number) => {
    switch (index) {
      case 0:
        return <DayOne />;
      case 1:
        return <DayTwo />;
      case 2:
        return <DayThree />;
      default:
        return null;
    }
  };

  const handleClick = (holidayId: string, event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setClickedElementRect(rect);
    setSelectedHoliday(holidayId);
  };
  

  return (
    <div className="flex flex-col min-h-screen justify-end">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 p-4"></div>
        <div className="w-full md:w-2/3 pl-4 pr-4">
          {/* Snow Cap Section */}
          <div className="w-full h-[100px] mx-auto bg-[url('/snow-cap.svg')] bg-[length:100%_100%] bg-no-repeat bg-bottom"></div>

          {/* Roof Section */}
          <div
            className="w-full mx-auto bg-no-repeat"
            style={{
              backgroundImage: "url('/red-roof.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="min-h-[250px] flex justify-center items-center">
              {holidays.slice(0, 2).map((holiday: Holiday, index: number) => (
                <div key={holiday.id}>
                  <button
                    onClick={(event) => handleClick(holiday.id, event)}
                    aria-label={`Holiday ${index + 1}`}
                  >
                    {renderHolidayAnimation(index)}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Building Section */}
          <div className="grid w-full gap-4 bg-[url('/brick-wall.svg')] bg-cover bg-center grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
            {holidays.slice(2).map((holiday: Holiday, index: number) => (
              <div key={holiday.id} className="w-full p-4 rounded-lg">
                <button
                  onClick={(event) => handleClick(holiday.id, event)}
                  aria-label={`Holiday ${index + 1}`}
                >
                  {renderHolidayAnimation(index + 2)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Section */}
      <AnimatePresence>
        {selectedHoliday && clickedElementRect && (
          <HolidayModal
            holidayId={selectedHoliday}
            onClose={() => setSelectedHoliday(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
