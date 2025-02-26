const FooterEnd = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:w-[1041px] md:h-[170px] md:p-0 p-24 md:mx-auto md:justify-between gap-10 ">
        <div className="text-[#737373] flex flex-col gap-4">
          <h5 className="text-black">Company Info</h5>
          <p className="link">About Us</p>
          <p className="link">Carrier</p>
          <p className="link">We are hirings</p>
          <p className="link">ABlog</p>
        </div>
        <div className="text-[#737373] flex flex-col gap-4">
          <h5 className="text-black">Legal</h5>
          <p className="link">About Us</p>
          <p className="link">Carrier</p>
          <p className="link">We are hirings</p>
          <p className="link">Blog</p>
        </div>
        <div className="text-[#737373] flex flex-col gap-4">
          <h5 className="text-black">Features</h5>
          <p className="link">About Us</p>
          <p className="link">Carrier</p>
          <p className="link">We are hirings</p>
          <p className="link">Blog</p>
        </div>
        <div className="text-[#737373] flex flex-col gap-4">
          <h5 className="text-black">Resources</h5>
          <p className="link">About Us</p>
          <p className="link">Carrier</p>
          <p className="link">We are hirings</p>
          <p className="link">ABlog</p>
        </div>
        <div className="flex flex-col gap-4">
          <h5>Get In Touch</h5>
          <div className="w-[321px]">
            <input
              className="h-[56px] w-[204px] rounded-l-lg bg-[#E6E6E6] border-[1px] border-[#E6E6E6] px-4"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <button className="bg-[#23A6F0] w-[117px] h-[58px] rounded-r-[5px] border-[1px] border-[#E6E6E6] text-white">
              Subscribe
            </button>
          </div>
          <p className="text-[12px] mt-[-10px]">Lore imp sum dolor Amit</p>
        </div>
      </div>
      <div className="bg-[#FAFAFA] flex ">
        <div className="md:h-[74px]  md:w-[1050px] mx-auto text-[#737373] flex items-center text-center md:text-start">
          <h6 className=" w-[193px] md:w-[600px]">
            Made With Love By Finland All Right Reserved{" "}
          </h6>
        </div>
      </div>
    </>
  );
};

export default FooterEnd;
