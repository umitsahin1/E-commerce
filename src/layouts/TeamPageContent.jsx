import Container from "../components/teamPage/Container";
import Cta from "../components/teamPage/Cta";
import Hero from "../components/teamPage/Hero";
import TeamCards from "../components/teamPage/TeamCards";

const TeamPageContent = () => {
  return (
    <div className="px-6 md:px-0  ">
      <Container />
      <Hero />
      <TeamCards />
      <Cta />
    </div>
  );
};

export default TeamPageContent;
