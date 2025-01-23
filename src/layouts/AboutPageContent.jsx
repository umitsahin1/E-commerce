import AboutClients from "../components/aboutPage/AboutClients";
import Content from "../components/aboutPage/Content";
import Main from "../components/aboutPage/Main";
import Stats from "../components/aboutPage/Stats";
import Testimonials from "../components/aboutPage/Testimonials";
import VideoCard from "../components/aboutPage/VideoCard";
import TeamCards from "../components/teamPage/TeamCards";

const AboutPageContent = () => {
  return (
    <div>
      <Main />
      <Content />
      <Stats />
      <VideoCard />
      <TeamCards />
      <AboutClients />
      <Testimonials />
    </div>
  );
};

export default AboutPageContent;
