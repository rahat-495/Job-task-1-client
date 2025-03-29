
import { IoSearchSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Dropdown from "./Dropdown";

const BlogsPageNav = () => {

    return (
        <div className="flex flex-col gap-5">
            
            <div className="flex items-center justify-between">

                <h1 className="text-3xl inter font-medium">Blogs</h1>
                <div className="w-12 h-12 rounded-full bg-gray-500">
                </div>

            </div>

            <div className="flex items-center justify-between gap-5 w-full">

                <div className="w-[90%] flex gap-3 relative items-center bg-[#d2ecf4] shadow rounded-full">
                    
                    <button className="cursor-pointer absolute left-5">
                        <FiMenu className="text-2xl" />
                    </button>

                    <input type="text" className="w-full py-3 outline-none border px-15 rounded-full focus:border-blue-700 duration-300" placeholder="Search blog by Title/Author's Name/Destination/Category"/>

                    <button className="cursor-pointer absolute right-5">
                        <IoSearchSharp className="text-2xl" />
                    </button>

                </div>

                <div className="w-[10%]">
                    <button className="bg-[#003b95] cursor-pointer w-full duration-300 border hover:border-[#003b95] hover:bg-transparent hover:text-black rounded-full py-2 text-white gro text-2xl">Search</button>
                </div>

            </div>

            <div className="flex items-center justify-between">

                <div className="flex gap-3 items-center">

                    <Dropdown label={"Destiantion"} content={["asdfsdaf" , "asdfasdf"]}/>
                    <Dropdown label={"Category"} content={["asdfsdaf" , "asdfasdf"]}/>
                    <Dropdown label={"Sub-Category"} content={["asdfsdaf" , "asdfasdf"]}/>

                </div>

                <div className="flex gap-3 items-center">
                    
                </div>

            </div>

        </div>
    );
};

export default BlogsPageNav;
