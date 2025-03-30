
import BlogsComp from "@/components/components/BlogsComp";
import BlogsFooterComp from "@/components/components/BlogsFooterComp";
import BlogsPageNav from "@/components/components/BlogsPageNav";

const BlogsPage = () => {

    return (
        <div className="flex flex-col gap-5">

            <BlogsPageNav />
            <BlogsComp />
            <BlogsFooterComp />

        </div>
    );
};

export default BlogsPage;
