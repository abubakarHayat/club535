import Image from "next/image";
import Badges from "./Badges";

const Participant = ({ position }) => {
  return (
    <div className="participant font-fredoka flex items-center px-3">
      <div className="position basis-1/6">
        <h2 className="text-xl md:text-3xl xl:text-4xl font-semibold">
          {position}
        </h2>
      </div>
      <div className="image basis-2/6">
        <Image
          src="/grey_badge.png"
          alt="badge"
          width={72}
          height={72}
          className="w-10 h-10 md:w-20 md:h-20"
        />
      </div>
      <div className="name basis-2/6">
        <h5 className="md:text-xl">Name.353</h5>
        <p className="xl:text-md font-light">10 badges</p>
      </div>
      <div className="badges basis-2/6 ml-2">
        <Badges value={2} />
      </div>
    </div>
  );
};

export default Participant;
