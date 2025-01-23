import Clients from "../homePage/Clients";

const AboutClients = () => {
  return (
    <div className=" bg-[#FAFAFA] md:h-[500px] h-[1500px] flex items-center ">
      <div className="md:w-[1050px] mx-auto flex flex-col items-center gap-[25px]">
        <h2>Big Companies Are Here</h2>
        <div className="w-[547px] text-center text-[#737373]">
          <p>Problems trying to resolve the conflict between</p>
          <p>the two major realms of Classical physics: Newtonian mechanics</p>
        </div>

        <Clients />
      </div>
    </div>
  );
};

export default AboutClients;
