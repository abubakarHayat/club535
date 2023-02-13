import Image from "next/image";
import Badges from "./Badges";

const Participant = ({ position }) => {
  return (
    <div className="participant font-fredoka flex items-center">
      <div className="position basis-1/6">
        <h2 className="text-4xl font-semibold">{position}</h2>
      </div>
      <div className="image basis-1/6">
        <Image src="/grey_badge.png" alt="badge" width={72} height={72} />
      </div>
      <div className="name basis-1/6">
        <h5 className="text-xl">Name.353</h5>
        <p className="text-md font-light">10 badges</p>
      </div>
      <div className="badges basis-1/6">
        <Badges value={2} />
      </div>
    </div>
  );
};

export default Participant;
