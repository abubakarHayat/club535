const ScoreAddress = ({ position, address }) => {
  return (
    <div className="flex mr-40 space-x-16 border-b-2 p-4">
      <div>
        <h2 className="font-semibold">{position}</h2>
      </div>
      <div>
        <span>{address}</span>
      </div>
    </div>
  );
};

export default ScoreAddress;
