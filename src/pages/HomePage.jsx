import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import HomePageContent from "../layouts/HomePageContent";

const HomePage = () => {
  return (
    <div className="w-fit md:w-full">
      <Header />
      <HomePageContent />
      <Footer />
    </div>
  );
};

export default HomePage;
