const Description = () => {
  return (
    <div className=" md:w-[1050px] mx-auto ">
      <h3>Description :</h3>
      <p className="text-[#737373] my-2">
        Placeholder content for the tab panel. This one relates to the home tab.
        Takes you miles high, so high, 'cause she’s got that one international
        smile. There's a stranger in my bed, there's a pounding in my head. Oh,
        no. In another life I would make you stay. ‘Cause I, I’m capable of
        anything. Suiting up for my crowning battle. Used to steal your parents'
        liquor and climb to the roof. Tone, tan fit and ready, turn it up cause
        its gettin' heavy. Her love is like a drug. I guess that I forgot I had
        a choice.
      </p>
      <div className="flex flex-col md:flex-row md:h-[500px] md:gap-0 gap-2">
        <img src="public/description görsel.svg" />
        <div className="flex flex-col gap-2 ">
          <img
            className="md:w-[300px] md:h-[245px] "
            src="public/details-görsel-1.svg"
          />
          <img
            className="md:w-[300px] md:h-[245px]"
            src="public/details-görsel-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
