
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const BlogsFooterComp = () => {
    return (
        <div className="my-10 grid grid-cols-4">
            
            <div className="col-span-1">
                <button className="flex items-center gap-2 bg-[#003b95] active:scale-95 duration-300 cursor-pointer text-white px-4 py-1 rounded hover:bg-[#003b95]/80">
                    Post Your Blog
                </button>
            </div>
            
            <div className="col-span-2 mx-auto">
                <Pagination>
                    <PaginationContent>

                        <PaginationItem>
                            <PaginationPrevious />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink>1</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext />
                        </PaginationItem>

                    </PaginationContent>
                </Pagination>
            </div>

        </div>
    );
};

export default BlogsFooterComp;
