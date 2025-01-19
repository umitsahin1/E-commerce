import FooterEnd from "../components/FooterEnd";
import ContactContent from "../layouts/ContactContent";
import Header from "../layouts/Header";

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-20 md:p-0">
      <Header />
      <ContactContent />
      <FooterEnd />
    </div>
  );
};

export default ContactPage;
