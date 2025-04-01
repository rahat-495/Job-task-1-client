
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from "@/redux/features/auth/authSlice";
import { Link } from "react-router-dom";

const BlogsProfileComp = () => {

    const user = useAppSelector(state => state.auth.user) ;
    const dispatch = useAppDispatch() ;

    return (
        <div className="flex items-center justify-between">

            <h1 className="text-3xl inter font-medium">Blogs</h1>
            {
                user ?
                <DropdownMenu>

                    <DropdownMenuTrigger asChild className="cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-gray-500">
                            {
                                user?.profileImg === "" ?
                                <img src="/images/profile.png" alt="profile" className="w-full h-full rounded-full object-cover" /> :
                                null
                            }
                        </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="center" className="flex flex-col gap-2 items-center justify-center text-center h-32">

                        <p className="text-center text-gray-700">{user?.name}</p>
                        <p className="text-center text-gray-700">{user?.email}</p>
                        <button onClick={() => dispatch(logout())} className="flex items-center gap-2 bg-[#003b95] justify-center active:scale-95 w-full duration-300 cursor-pointer text-white px-4 py-1 rounded-full hover:bg-[#003b95]/80">Logout</button>

                    </DropdownMenuContent>

                </DropdownMenu> : 
                <div className="flex gap-3">
                    <Link to={'/login'} className="flex items-center gap-2 hover:bg-[#003b95] border border-[#003b95] text-[#003b95] justify-center active:scale-95 w-full duration-300 cursor-pointer hover:text-white px-4 py-1 rounded-full">Login</Link>
                </div>
            }

        </div>
    );
};

export default BlogsProfileComp;
