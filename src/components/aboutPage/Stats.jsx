const Stats = () => {
  const data = [
    { number: "15K", title: "Happy Customers" },
    { number: "150K", title: "Monthly Visitors" },
    { number: "15", title: "Countries  Worldwide" },
    { number: "100+", title: "Top Partners" },
  ];
  return (
    <div className="flex flex-col gap-40  md:flex-row md:w-[1050px] mx-auto justify-between px-10 mb-36">
      {data.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <div className="flex flex-col items-center">
          <h1>{item.number}</h1>
          <h5 className="text-[#737373]">{item.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default Stats;
