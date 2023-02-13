import Image from "next/image";

const Topbar = () => {
  return (
    <div className="navbar p-5 flex justify-between">
      <div>
        <Image src="/small_logo.png" alt="small logo" width={81} height={57} />
      </div>
      <div className="flex">
        <div className="flex items-center pr-3">
          <p className="font-fredoka font-light">jason.eth.544 </p>
        </div>
        <div>
          <Image
            src="/grey_badge.png"
            className="rounded-full"
            alt="badge"
            width={57}
            height={57}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
