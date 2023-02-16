import Image from "next/image";
const Stats = () => {
  return (
    <div className="stats mx-6 mt-6 lg:my-12 lg:mx-72 lg:w-3/6 xl:w-2/6 lg:h-64 bg-amber-50 rounded-md shadow-lg flex flex-col items-center">
      <div className="group-1 flex w-5/6 m-2 border-b-2">
        <div>
          <Image
            src="/grey_badge.png"
            alt="grey badge"
            height={81}
            width={81}
          />
        </div>
        <div className="font-fredoka m-1">
          <p>TAKO.CLUB</p>
          <p>
            Rank:<span className="font-light"> 8th</span>
          </p>
          <p>
            Role:<span className="font-light"> Provocateur</span>
          </p>
          <p className="text-sm font-light">
            <span>Joined:</span> 15th Feb 2022
          </p>
        </div>
      </div>
      <div className="group-2 h-28">
        <div className="canvas-1 h-5/6 p-1 mx-2 bg-white lg:w-96 lg:h-28 border flex font-fredoka text-sm justify-around">
          <div className="skill-sm-1 flex flex-col">
            <p>Community</p>
            <div className="badges flex space-x-1 flex-wrap">
              <Image
                src="/green_badge.png"
                alt="badge"
                width={27}
                height={27}
              />
              <Image
                src="/green_badge.png"
                alt="badge"
                width={27}
                height={27}
              />

              <Image
                src="/green_badge.png"
                alt="badge"
                width={27}
                height={27}
              />
            </div>
          </div>
          <div className="skill-sm-2 flex flex-col mx-6">
            <p>Craft</p>
            <div className="badges flex space-x-1 flex-wrap">
              <Image
                src="/green_badge.png"
                alt="badge"
                width={27}
                height={27}
              />
              <Image
                src="/green_badge.png"
                alt="badge"
                width={27}
                height={27}
              />

              <Image
                src="/green_badge.png"
                alt="badge"
                width={27}
                height={27}
              />
            </div>
          </div>
          <div className="skill-sm-3 flex flex-col">
            <p>Partnerships</p>
            <div className="badges flex space-x-1 flex-wrap">
              <Image
                src="/yellow_badge.png"
                alt="badge"
                width={27}
                height={27}
              />
              <Image
                src="/yellow_badge.png"
                alt="badge"
                width={27}
                height={27}
              />

              <Image
                src="/yellow_badge.png"
                alt="badge"
                width={27}
                height={27}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
