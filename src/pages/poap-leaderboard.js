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
      <div className="main flex mt-10 mx-40">
        <div className="content">
          <div className="tabs-main flex">
            <div className="score-tabs font-fredoka flex">
              {scoreTabs.map((e, i) => (
                <div className="mx-40" key={i}>
                  <button
                    className={`text-xl ${
                      active === i ? "text-black" : "text-zinc-400"
                    }`}
                    onClick={() => setActive(i)}
                  >
                    {e.name}
                  </button>
                </div>
              ))}
            </div>
            <div className="tabs font-fredoka flex">
              {tabs.map((e, i) => (
                <div className="mx-5" key={i}>
                  <button
                    className={`text-xl ${
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
          <div className="search-btns font-fredoka font-light flex space-x-10 py-6">
            <input
              className="w-72 h-14 focus:outline-none p-5 bg-red-300 text-xl placeholder-black border-black border"
              value={search}
              placeholder={"Search..."}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-red-300 border-black border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 stroke-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button className="bg-red-300 border-black border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 stroke-1"
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
