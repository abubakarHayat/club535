import { useState, useEffect } from "react";
import Image from "next/image";
const Badges = ({ value }) => {
  const TOTAL_SKILL_VALUE = 3;

  return (
    <>
      <ol className="flex items-center mb-4 sm:mb-5">
        {[...Array(TOTAL_SKILL_VALUE + 1)].map((_, i) => {
          if (value - 1 < TOTAL_SKILL_VALUE && i === TOTAL_SKILL_VALUE) {
            return (
              <li className="flex items-center w-20" key={i}>
                <Image
                  src="/grey_badge.png"
                  alt="badge"
                  width={40}
                  height={40}
                />
              </li>
            );
          } else if (i === TOTAL_SKILL_VALUE) {
            return (
              <li className="flex items-center w-20" key={i}>
                <Image
                  src="/green_badge.png"
                  alt="badge"
                  width={40}
                  height={40}
                />
              </li>
            );
          } else if (i >= value) {
            return (
              <li
                key={i}
                className="flex w-20 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:inline-block after:border-black"
              >
                <Image
                  src="/grey_badge.png"
                  alt="badge"
                  width={40}
                  height={40}
                />
              </li>
            );
          } else {
            return (
              <li
                key={i}
                className="flex w-20 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:inline-block after:border-black"
              >
                <Image
                  src="/green_badge.png"
                  alt="badge"
                  width={40}
                  height={40}
                />
              </li>
            );
          }
        })}
      </ol>
    </>
  );
};
export default Badges;
