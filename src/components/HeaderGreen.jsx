import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const HeaderGreen = () => {
  return (
    <div className=" hidden md:flex md:items-center md:justify-between md:bg-[#23856D] md:text-[#FFFFFF] md:px-10 md:w-full h-[46px]">
      <div className="flex gap-10">
        <div className=" flex gap-2 items-end">
          <Phone className="w-5 h-5" />
          <h6 className="p-0 m-0">(225) 555-0118</h6>
        </div>
        <div className="flex gap-2 items-end">
          <Mail className="w-5 h-5" />
          <h6 className="p-0 m-0">michelle.rivera@example.com</h6>
        </div>
      </div>
      <h6 className="p-0 m-0">Follow Us and get a chance to win 80% off</h6>
      <div className="flex items-center gap-6">
        <h6 className="p-0 m-0">Follow Us :</h6>
        <Instagram className="w-5 h-5" />
        <Youtube className="w-5 h-5" />
        <Twitter className="w-5 h-5" />
        <Facebook className="w-5 h-5" />
      </div>
    </div>
  );
};

export default HeaderGreen;
