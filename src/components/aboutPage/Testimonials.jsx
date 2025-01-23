const Testimonials = () => {
  return (
    <div className="flex">
      <div className="bg-[#2A7CC7] w-full text-white flex items-center  justify-center  md:mt-0">
        <div className="md:w-[420px] h-[520px] flex flex-col items-center md:items-start justify-center gap-[24px]">
          <h5>WORK WITH US</h5>
          <h2>Now Let’s grow Yours</h2>
          <p>
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <button className="w-[130px] h-[52px] border rounded-lg text-white">
            Button
          </button>
        </div>
      </div>
      <img className="hidden md:block" src="public/testimonials-görsel.svg" />
    </div>
  );
};

export default Testimonials;
