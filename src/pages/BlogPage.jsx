import FooterEnd from "../components/FooterEnd";
import BlogPageContent from "../layouts/BlogPageContent";
import Header from "../layouts/Header";

const BlogPage = () => {
  return (
    <div className="flex flex-col gap-20 w-fit md:w-full">
      <Header />
      <BlogPageContent />
      <FooterEnd />
    </div>
  );
};

export default BlogPage;
