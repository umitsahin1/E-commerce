import teamData from "../../data/teamData.js";

const TeamCardDetail = () => {
  console.log(teamData);
  return (
    <div className=" flex flex-col md:flex-row flex-wrap md:w-[1050px] md:h-[1550px] mx-auto ">
      {teamData.map((item, id) => (
        <div className="w-[350px] flex flex-col items-center gap-2" key={id}>
          <img src={item.image} />
          <h5>{item.name}</h5>
          <h6 className="text-[#737373]">{item.title}</h6>
          <img src="public/social media (1).svg" />
        </div>
      ))}
    </div>
  );
};

export default TeamCardDetail;
