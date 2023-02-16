const ScoreAddress = ({ position, address }) => {
  return (
    <div className="flex lg:mr-40 space-x-5 lg:space-x-16 border-b-2 p-4">
      <div>
        <h2 className="text-sm font-semibold md:text-md">{position}</h2>
      </div>
      <div>
        <span className="text-sm md:text-xl">{address}</span>
      </div>
    </div>
  );
};

export default ScoreAddress;
