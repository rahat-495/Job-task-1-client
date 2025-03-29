
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";

type TDropDownProps = {
    label : string ;
    content : string[] ;
}

const Dropdown = ({ label , content } : TDropDownProps) => {

    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild className="w-fit">
                <Button variant="outline">{label}</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="flex flex-col gap-2">

                {
                    content.map((item) => <p key={item}>{item}</p>)
                }

            </DropdownMenuContent>

        </DropdownMenu>
    );
};

export default Dropdown;

