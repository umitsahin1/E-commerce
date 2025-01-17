// eslint-disable-next-line react/prop-types
const FooterBandage = ({ backgroundClass = "#FAFAFA" }) => {
  return (
    <div style={{ backgroundColor: backgroundClass }}>
      <div className="flex flex-col md:flex-row md:h-[195px] h-[173px] md:w-[1050px] mx-auto md:justify-between items-center justify-center gap-4 md:gap-0">
        <h3>Bandage</h3>
        <img className="h-[24px] w-[236px]" src="/social media.svg" />
      </div>
    </div>
  );
};

export default FooterBandage;
