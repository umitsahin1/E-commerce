import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { blue } from "@mui/material/colors";
import YouTubeIcon from "@mui/icons-material/YouTube";

const ContactContent = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto justify-center gap-16 items-center w-full bg-[#FAFAFA] md:h-[800px] md:-mt-20 p-6 md:p-0 ">
      <div className="md:w-[450px]  flex flex-col items-start gap-6 ">
        <h5>WORK WITH US</h5>
        <h2>Now Let’s grow Yours</h2>
        <p className="md:w-96 text-[#737373]">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th{" "}
        </p>
        <button className="w-[230px] h-[52px] border rounded-lg bg-[#23A6F0] text-white">
          Contact Our Company
        </button>
        <div className="flex gap-4 items-center">
          <XIcon />
          <FacebookIcon sx={{ color: blue[500], fontSize: 30 }} />
          <InstagramIcon sx={{ color: "#c4302b", fontSize: 30 }} />
          <YouTubeIcon sx={{ color: "#FF0000", fontSize: 30 }} />
        </div>
      </div>
      <img
        className="rounded-lg md:w-[750px] md:h-[500px]"
        src="public/contact.jpg"
        alt="contact"
      />
    </div>
  );
};

export default ContactContent;
