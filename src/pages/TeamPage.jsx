import FooterBandage from "../components/FooterBandage";
import FooterEnd from "../components/FooterEnd";
import HeaderBecome from "../components/HeaderBecome";
import TeamPageContent from "../layouts/TeamPageContent";

const TeamPage = () => {
  return (
    <div className="flex flex-col gap-20 w-fit md:w-full">
      <HeaderBecome />
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
