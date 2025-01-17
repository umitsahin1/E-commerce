import FooterBandage from "../components/FooterBandage";
import FooterEnd from "../components/FooterEnd";

const Footer = () => {
  return (
    <div className="flex flex-col gap-20">
      <FooterBandage />
      <FooterEnd />
    </div>
  );
};

export default Footer;
