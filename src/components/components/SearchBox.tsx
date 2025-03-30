
import { FiMenu } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";

const SearchBox = () => {
    return (
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
                <button className="bg-[#003b95] active:scale-95 cursor-pointer w-full duration-300 border hover:border-[#003b95] hover:bg-transparent hover:text-black rounded-full py-2 text-white gro text-2xl">Search</button>
            </div>

        </div>
    );
};

export default SearchBox;
