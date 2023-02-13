import { useState } from "react";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";

export default function Collected() {
  const [active, setActive] = useState(0);
  const tabs = [
    { name: "All" },
    { name: "Tops" },
    { name: "Bottoms" },
    { name: "Onesies" },
    { name: "Acessories" },
  ];
  return (
    <>
      <Topbar />
      <Navbar destination={2} />
      <div className="main flex justify-center mt-10">
        <div className="content">
          <div className="tabs font-fredoka flex">
            {tabs.map((e, i) => (
              <div className="mx-10" key={i}>
                <button
                  className={`text-xl ${
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
          <div className="cards flex space-x-10 mt-10">
            <div className="card border-black border h-96 w-64"></div>
            <div className="card border-black border h-96 w-64"></div>
            <div className="card border-black border h-96 w-64"></div>
            <div className="card border-black border h-96 w-64"></div>
            <div className="card border-black border h-96 w-64"></div>
          </div>
        </div>
      </div>
    </>
  );
}
