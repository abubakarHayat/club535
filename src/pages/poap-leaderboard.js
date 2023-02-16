import { useState } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import ScoreAddress from "@/components/ScoreAddress";

export default function Leaderboard() {
  const [active, setActive] = useState(0);
  const [search, setSearch] = useState("");
  const scoreTabs = [{ name: "RANK" }, { name: "ADDRESS" }];

  const tabs = [
    { name: "NAME" },
    { name: "STORY" },
    { name: "COMMUNITY" },
    { name: "INVITES" },
    { name: "EXTRA" },
    { name: "TOTAL" },
  ];
  return (
    <>
      <Topbar />
      <Navbar destination={3} />
      <div className="main flex mt-10 2xl:mx-32 overflow-hidden">
        <div className="content">
          <div className="tabs-main grid grid-cols-1 md:grid-cols-2">
            <div className="score-tabs col-span-2 md:col-span-1 font-fredoka flex space-x-16">
              {scoreTabs.map((e, i) => (
                <div className="xl:mx-5" key={i}>
                  <button
                    className={`lg:text-xl ${
                      active === i ? "text-black" : "text-zinc-400"
                    }`}
                    onClick={() => setActive(i)}
                  >
                    {e.name}
                  </button>
                </div>
              ))}
            </div>
            <div className="tabs font-fredoka flex flex-wrap space-x-2 lg:space-x-4">
              {tabs.map((e, i) => (
                <div className="xl:mx-5" key={i}>
                  <button
                    className={`text-sm md:text-md lg:text-xl ${
                      active === i ? "text-zinc-400" : "text-zinc-400"
                    }`}
                    onClick={() => setActive(i)}
                  >
                    {e.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="leaderboard flex flex-col mt-10 space-y-6 font-fredoka font-light text-xl">
            {[...Array(6)].map((_, i) => (
              <ScoreAddress
                key={i}
                position={i + 1}
                address={"0x964fd5383dfdbfbd54224de9f773e5ac7bdb0086"}
              />
            ))}
          </div>
          <div className="search-btns font-fredoka font-light grid grid-cols-2 gap-0 lg:grid-cols-4 py-6">
            <input
              className="w-46 h-8 lg:w-72 lg:h-14 col-span-2 focus:outline-none p-5 bg-red-300 text-xl placeholder-black border-black border mb-5"
              value={search}
              placeholder={"Search..."}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-red-300 border-black border flex justify-center mx-auto md:mx-0 md:h-14 md:w-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-10 md:w-14 md:h-full stroke-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="bg-red-300 border-black border flex justify-center mx-auto md:mx-0 md:h-14 md:w-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-10 md:w-14 md:h-full stroke-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
