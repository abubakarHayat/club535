import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = ({ destination }) => {
  const [active, setActive] = useState(0);

  const navItems = [
    { name: "ID", to: "/id" },
    { name: "CREATED", to: "/created" },
    { name: "COLLECTED", to: "/collected" },
    { name: "SCORES", to: "/leaderboard" },
  ];

  useEffect(() => {
    if (!(destination == null)) {
      setActive(destination);
    }
  }, [destination]);

  return (
    <>
      <ul
        className="flex justify-center space-x-6 lg:space-x-24"
        style={{ color: "#7E7575" }}
      >
        {navItems.map((e, i) => (
          <li key={i} className="flex space-x-1">
            {active === i ? (
              <Image
                src="/flash_sign.png"
                alt="flash sign"
                width={24}
                height={50}
                className="w-2 h-5 lg:w-5 lg:h-8"
              />
            ) : null}
            <Link
              href={e.to}
              className={`text-sm lg:text-2xl ${
                active === i ? "text-black text-3xl" : "text-inherit"
              }`}
              onClick={() => setActive(i)}
            >
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
