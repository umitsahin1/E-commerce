import FooterBandage from "../components/FooterBandage";
import FooterEnd from "../components/FooterEnd";
import HeaderTeam from "../components/HeaderTeam";
import TeamPageContent from "../layouts/TeamPageContent";

const TeamPage = () => {
  return (
    <div className="flex flex-col gap-20 w-fit md:w-full">
      <HeaderTeam />
      <TeamPageContent />
      <div className="flex flex-col items-start md:items-center gap-8">
        <FooterBandage backgroundClass="bg-white" />
        <hr className="md:w-[1050px] mx-auto -mt-10" />
      </div>
      <FooterEnd />
    </div>
  );
};

export default TeamPage;
