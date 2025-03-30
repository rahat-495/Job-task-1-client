
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { LuMessageSquareDiff } from "react-icons/lu";

type Blog = {
    id: number;
    title: string;
    subTitle: string;
    tags: string[];
    description: string;
    likes: number;
    views: number;
    images: string[];
    author: {
      name: string;
      profilePicture: string;
      publishedDate: string;
    };
}

const BlogComp = ({blog} : {blog : Blog}) => {

    const [descLength , setDescLength] = useState(false) ;

    return (
        <div key={blog.id} className="border shadow shadow-[#003b95] duration-300 p-5 rounded-2xl flex flex-col">

            <h1 className="text-xl font-semibold inter">{blog?.title}</h1>
            <div className="flex items-center gap-3 my-2">
                {
                    blog.tags?.map((tag) => <p key={tag} className="bg-[#003b95] px-5 text-white gro font-medium py-1 rounded-full">{tag}</p>)
                }
            </div>

            <p className="font-semibold inter my-2">{blog?.subTitle}</p>

            <div className="bg-[#c4e0ee] p-3 rounded-2xl">
                <p className="text-gray-600 duration-300">{blog?.description.slice(0, !descLength ? 260 : blog.description?.length)}... <button onClick={() => setDescLength(!descLength)} className="underline text-blue-700 gro font-medium cursor-pointer">Read More</button></p>
            </div>

            <div className="flex items-center justify-between my-3">
                <div className="flex items-center gap-8">
                    
                    <button className="flex items-center gap-2 cursor-pointer">
                        {blog.likes}
                        <CiHeart className="text-2xl"/>
                    </button>

                    <button className="flex items-center gap-2">
                        {blog.views}
                        <GoEye className="text-2xl"/>
                    </button>

                </div>
                <button className="cursor-pointer flex items-center gap-2">
                    <CiBookmark className="text-2xl"/>
                </button>
            </div>

            <div className="my-3 w-full flex items-center justify-center">
                <Carousel className="">
                    <CarouselContent className="-ml-1">
                    {
                        blog.images.map((image) => (
                            <CarouselItem key={image} className="pl-1 md:basis-1/2 lg:basis-xs cursor-grab active:cursor-grabbing">
                            <div className="p-1">
                                <img src={image} alt="blog_image" className="w-[450px] h-[200px] rounded"/>
                            </div>
                            </CarouselItem>
                        ))  
                    }
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="flex justify-between items-center">

                <div className="flex gap-3">
                    <img src={blog.author.profilePicture} alt="author_profile" className="w-10 h-10 rounded-full"/>
                    <div className="flex flex-col">
                        <p className="font-semibold">{blog.author.name}</p>
                        <p className="text-sm">{blog.author.publishedDate}</p>
                    </div>
                </div>

                <div className="">
                   <button className="flex items-center gap-2 bg-[#003b95] active:scale-95 duration-300 cursor-pointer text-white px-4 py-1 rounded-full hover:bg-[#003b95]/80">
                        Follow <LuMessageSquareDiff className="text-xl"/>
                   </button>
                </div>
                
            </div>

        </div>
    );
};

export default BlogComp;
