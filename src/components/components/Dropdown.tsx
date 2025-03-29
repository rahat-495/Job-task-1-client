
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { ReactNode } from "react";

type TDropDownProps = {
    label : string | ReactNode ;
    content : string[] ;
    align : "start" | "center" | "end" ;
}

const Dropdown = ({ label , content , align } : TDropDownProps) => {

    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild className="w-fit">
                <Button variant="outline" className="active:scale-90 duration-300 cursor-pointer">{label}</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align={align} className="flex flex-col gap-2 text-center">

                {
                    content.map((item) => <p key={item}>{item}</p>)
                }

            </DropdownMenuContent>

        </DropdownMenu>
    );
};

export default Dropdown;

