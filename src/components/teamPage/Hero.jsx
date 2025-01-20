const Hero = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-4 ">
      <div>
        <img
          className=" hidden md:block w-[896px]"
          src="public/team-hero-picture-1.svg"
          alt="hero-görsel1"
        />
        <img
          className="md:hidden block "
          src="public/team-hero-picture-1(uzun).svg"
        />
      </div>

      <div className="flex flex-col gap-2 w-[66vmax] md:w-fit">
        <div className="flex gap-2">
          <img
            className="md:w-[465px] hidden md:block"
            src="public/team-hero-picture-2.svg"
            alt="hero-görsel2"
          />
          <img
            className="md:hidden block  "
            src="public/team-hero-picture-2(uzun).svg"
          />

          <img
            className="md:w-[465px] hidden md:block"
            src="public/team-hero-picture-3.svg"
            alt="hero-görsel3"
          />
          <img
            className="md:hidden block  "
            src="public/team-hero-picture-3(uzun).svg"
          />
        </div>
        <div className="flex gap-2">
          <img
            className="md:w-[465px] hidden md:block"
            src="public/team-hero-picture-4.svg"
            alt="hero-görsel4"
          />
          <img
            className="md:hidden block  "
            src="public/team-hero-picture-4(uzun).svg"
          />
          <img
            className="md:w-[465px] hidden md:block"
            src="public/team-hero-picture-5.svg"
            alt="hero-görsel5"
          />
          <img
            className="md:hidden block  "
            src="public/team-hero-picture-5(uzun).svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
