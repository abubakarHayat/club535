import { useState, useEffect } from "react";
import Image from "next/image";
const Skill = ({ name, value }) => {
  const [currSkills, setCurrSkills] = useState([]);
  const TOTAL_SKILL_VALUE = 4;
  useEffect(() => {
    const skills = [
      { name: "COMMUNITY", img: "/green_badge.png" },
      { name: "CRAFT", img: "/green_badge.png" },
      { name: "PARTNERSHIPS", img: "/yellow_badge.png" },
    ];
    const arr = [];
    let val_check = 0;
    for (let i = 0; i < TOTAL_SKILL_VALUE; i++) {
      if (val_check < value) {
        arr.push(skills.find((el) => el.name == name));
      } else {
        arr.push({ name: "NONE", img: "/grey_badge.png" });
      }
      val_check++;
    }
    setCurrSkills(arr);
  }, [name, value]);

  function capitalize(string) {
    return string.charAt() + string.slice(1).toLowerCase();
  }
  return (
    <div>
      <p className="md:text-xl lg:text-2xl mb-4 font-fredoka">
        {capitalize(name)}
      </p>
      <ol className="flex items-center mb-4 sm:mb-5">
        {currSkills.map((el, i) => {
          if (i === TOTAL_SKILL_VALUE - 1) {
            return (
              <li className="flex items-center lg:w-28" key={i}>
                <Image src={el.img} alt="badge" width={50} height={50} />
              </li>
            );
          } else {
            return (
              <li
                key={i}
                className="flex lg:w-28 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:inline-block after:border-black"
              >
                <Image src={el.img} alt="badge" width={74} height={73} />
              </li>
            );
          }
        })}
      </ol>
    </div>
  );
};
export default Skill;
