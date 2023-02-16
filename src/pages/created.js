import { useState } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";

export default function Created() {
  const [active, setActive] = useState(0);
  const tabs = [{ name: "Crafted" }, { name: "Blanks" }];
  return (
    <>
      <Topbar />
      <Navbar destination={1} />
      <div className="main flex justify-center mt-10">
        <div className="content">
          <div className="tabs font-fredoka flex">
            {tabs.map((e, i) => (
              <div className="mx-16" key={i}>
                <button
                  className={`text-2xl lg:text-3xl ${
                    active === i ? "text-black" : "text-zinc-400"
                  }`}
                  onClick={() => setActive(i)}
                >
                  {e.name}
                </button>
                {active === i ? (
                  <svg
                    className="w-6 h-6 lg:w-10 md:h-10 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                ) : null}
              </div>
            ))}
          </div>
          <div className="cards flex mt-10 justify-evenly flex-wrap w-screen">
            <div className="card border-black border h-96 w-64 my-4 mx-2"></div>
            <div className="card border-black border h-96 w-64 my-4 mx-2"></div>
            <div className="card border-black border h-96 w-64 my-4 mx-2"></div>
            <div className="card border-black border h-96 w-64 my-4 mx-2"></div>
            <div className="card border-black border h-96 w-64 my-4 mx-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
