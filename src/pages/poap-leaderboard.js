import { useState } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import ScoreAddress from "@/components/ScoreAddress";

export default function Leaderboard() {
  const [active, setActive] = useState(0);
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
      <div className="main flex mt-10">
        <div className="content">
          <div className="tabs-main flex">
            <div className="score-tabs font-fredoka flex mr-40">
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
            <div className="tabs font-fredoka flex ml-28">
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
            {[...Array(8)].map((_, i) => (
              <ScoreAddress
                key={i}
                position={i}
                address={"0x964fd5383dfdbfbd54224de9f773e5ac7bdb0086"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
