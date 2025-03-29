
import BlogsProfileComp from "./BlogsProfileComp";
import FilterCompnents from "./FilterCompnents";
import SearchBox from "./SearchBox";

const BlogsPageNav = () => {

    return (
        <div className="flex flex-col gap-5">

            <BlogsProfileComp />
            <SearchBox />
            <FilterCompnents />

        </div>
    );
};

export default BlogsPageNav;
