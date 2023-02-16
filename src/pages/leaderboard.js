import { useState } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Participant from "@/components/Participant";

export default function Leaderboard() {
  const [active, setActive] = useState(0);
  const tabs = [
    { name: "All" },
    { name: "Craft" },
    { name: "Collect" },
    { name: "Partnerships" },
    { name: "Community" },
    { name: "Wisdom" },
    { name: "Mindfullness" },
    { name: "Endorsements" },
  ];
  return (
    <>
      <Topbar />
      <Navbar destination={3} />
      <div className="main flex justify-center mt-10">
        <div className="content">
          <div className="tabs font-fredoka mx-2 flex justify-center flex-wrap">
            {tabs.map((e, i) => (
              <div className="mx-3 lg:mx-10" key={i}>
                <button
                  className={`text-md md:text-xl ${
                    active === i ? "text-black" : "text-zinc-400"
                  }`}
                  onClick={() => setActive(i)}
                >
                  {e.name}
                </button>
                {active === i ? (
                  <svg
                    className="w-6 h-6 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                ) : null}
              </div>
            ))}
          </div>
          <div className="leaderboard flex flex-col mt-10 space-y-5 items-center lg:items-start">
            <Participant position={1} />
            <Participant position={2} />
            <Participant position={3} />
            <Participant position={4} />
            <Participant position={5} />
          </div>
        </div>
      </div>
    </>
  );
}
