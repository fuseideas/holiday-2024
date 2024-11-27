"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_HOLIDAYS } from "@/app/queries/holiday";
import HolidayModal from "@/app/components/HolidayModal";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import Snowfall from "react-snowfall";

import DayOne from "@/app/components/DayOne";
import DayTwo from "@/app/components/DayTwo";
import DayThree from "@/app/components/DayThree";
import DayFour from "@/app/components/DayFour";
import DayFive from "@/app/components/DayFive";
import DaySix from "@/app/components/DaySix";
import DaySeven from "@/app/components/DaySeven";
import DayEight from "@/app/components/DayEight";
import DayNine from "@/app/components/DayNine";
import DayTen from "@/app/components/DayTen";
import DayEleven from "@/app/components/DayEleven";
import DayTwelve from "@/app/components/DayTwelve";
import DayThirteen from "./components/DayThirteen";
import DayFourteen from "./components/DayFourteen";
import DayFifteen from "./components/DayFifteen";
import DaySixteen from "./components/DaySixteen";
import DaySeventeen from "./components/DaySeventeen";
import DayEighteen from "./components/DayEighteen";
import DayNineteen from "./components/DayNineteen";
import DayTwenty from "./components/DayTwenty";
import DayTwentyOne from "./components/DayTwentyOne";
import DayTentyTwo from "./components/DayTwentyTwo";
import DayTwentyThree from "./components/DayTwentyThree";
import DayTwentyFour from "./components/DayTwentyFour";
import DayTwentyfive from "./components/DayTwentyfive";
import DayTwentysix from "./components/DayTwentysix";

import Chimney from "./components/Chimney";

type Holiday = {
  id: string;
  name: string;
  date: string;
  holidayAcf?: {
    enabled?: boolean;
  };
};

export default function HomePage() {
  const [selectedHoliday, setSelectedHoliday] = useState<string | null>(null);
  const [clickedElementRect, setClickedElementRect] = useState<DOMRect | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Loader state
  const { loading: queryLoading, error, data } = useQuery(GET_ALL_HOLIDAYS);

  if (queryLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading holidays.</p>;

  const holidays = data.holidays.nodes;

  const renderHolidayAnimation = (index: number, enabled: boolean) => {
    switch (index) {
      case 0:
        return <DayOne enabled={enabled} />;
      case 1:
        return <DayTwo enabled={enabled} />;
      case 2:
        return <DayThree enabled={enabled} />;
      case 3:
        return <DayFour enabled={enabled} />;
      case 4:
        return <DayFive enabled={enabled} />;
      case 5:
        return <DaySix enabled={enabled} />;
      case 6:
        return <DaySeven enabled={enabled} />;
      case 7:
        return <DayEight enabled={enabled} />;
      case 8:
        return <DayNine enabled={enabled} />;
      case 9:
        return <DayTen enabled={enabled} />;
      case 10:
        return <DayEleven enabled={enabled} />;
      case 11:
        return <DayTwelve enabled={enabled} />;
      case 12:
        return <DayThirteen enabled={enabled} />;
      case 13:
        return <DayFourteen enabled={enabled} />;
      case 14:
        return <DayFifteen enabled={enabled} />;
      case 15:
        return <DaySixteen enabled={enabled} />;
      case 16:
        return <DaySeventeen enabled={enabled} />;
      case 17:
        return <DayEighteen enabled={enabled} />;
      case 18:
        return <DayNineteen enabled={enabled} />;
      case 19:
        return <DayTwenty enabled={enabled} />;
      case 20:
        return <DayTwentyOne enabled={enabled} />;
      case 21:
        return <DayTentyTwo enabled={enabled} />;
      case 22:
        return <DayTwentyThree enabled={enabled} />;
      case 23:
        return <DayTwentyFour enabled={enabled} />;
      case 24:
        return <DayTwentyfive enabled={enabled} />;
      case 25:
        return <DayTwentysix enabled={enabled} />;
      default:
        return null;
    }
  };

  const handleClick = (
    holidayId: string,
    event: React.MouseEvent<HTMLButtonElement>,
    enabled: boolean
  ) => {
    if (!enabled) return; // Prevent opening modal if not enabled
    setLoading(true); // Show loader
    const rect = event.currentTarget.getBoundingClientRect();
    setClickedElementRect(rect);
    setSelectedHoliday(holidayId);

    // Simulate loading delay for modal
    setTimeout(() => {
      setLoading(false); // Hide loader after delay
    }, 1000); // Adjust delay as needed
  };

  return (
    <div className="relative flex flex-col min-h-screen justify-start">
      {/* Snowfall Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Snowfall
          color="white"
          snowflakeCount={400}
          style={{ zIndex: 1, position: "absolute", width: "100%", height: "100%" }}
        />
      </div>

      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-16 h-16 border-4 border-t-4 border-t-gray-400 border-gray-200 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-1/3 p-4 relative">
          <div className="flex justify-center items-center sm:relative sm:static md:fixed top-1/2 transform md:-translate-y-1/2 sm:translate-y-0 md:w-1/3 w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 5,
              }}
              className="p-2"
            >
              <Image
                src="/happyholidays.svg"
                alt="Happy Holidays"
                width={100}
                height={50}
                style={{ width: "100%", height: "auto" }}
                className="p-2"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 pl-4 pr-4">
          {/* Snow Cap Section */}
          <Chimney />
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
                    onClick={(event) =>
                      handleClick(
                        holiday.id,
                        event,
                        holiday.holidayAcf?.enabled || false
                      )
                    }
                    aria-label={`Holiday ${index + 1}`}
                    className={`${
                      holiday.holidayAcf?.enabled
                        ? "cursor-pointer"
                        : "cursor-default"
                    }`}
                    disabled={!holiday.holidayAcf?.enabled}
                  >
                    {renderHolidayAnimation(index, holiday.holidayAcf?.enabled || false)}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Building Section */}
          <div className="grid w-full gap-4 bg-[url('/brick-wall.svg')] bg-cover bg-center grid-cols-2 md:grid-cols-4 pt-12 xl:pt-32 relative">
            <div className="absolute top-0 w-full h-[100px] mx-auto bg-[url('/lightstring.svg')] bg-no-repeat bg-top bg-[length:100%_auto]"></div>

            {holidays.slice(2).map((holiday: Holiday, index: number) => (
              <div
                key={holiday.id}
                className={`w-full p-4 rounded-lg ${
                  index === holidays.slice(2).length - 1
                    ? "flex justify-end items-end pb-0 mb-0"
                    : ""
                }`}
              >
                <button
                  onClick={(event) =>
                    handleClick(
                      holiday.id,
                      event,
                      holiday.holidayAcf?.enabled || false
                    )
                  }
                  aria-label={`Holiday ${index + 1}`}
                  className={`${
                    holiday.holidayAcf?.enabled ? "cursor-pointer" : "cursor-default"
                  }`}
                  disabled={!holiday.holidayAcf?.enabled}
                >
                  {renderHolidayAnimation(index + 2, holiday.holidayAcf?.enabled || false)}
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
