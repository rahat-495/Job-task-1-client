
import { GrPowerReset } from "react-icons/gr";
import { Button } from "../ui/button";
import Dropdown from "./Dropdown";

const FilterCompnents = () => {
    return (
        <div className="flex items-center justify-between">

            <div className="flex gap-3 items-center">

                <Dropdown align="start" label={"Destiantion"} content={["asdfsdaf" , "asdfasdf"]}/>
                <Dropdown align="start" label={"Category"} content={["asdfsdaf" , "asdfasdf"]}/>
                <Dropdown align="start" label={"Sub-Category"} content={["asdfsdaf" , "asdfasdf"]}/>

            </div>

            <div className="flex gap-3 items-center">
                
                <Dropdown align="center" label={`Sort By`} content={["Ascending" , "Descending" , "None"]}/>
                <Button className="bg-white active:scale-90 duration-300 text-black gro hover:bg-[#f5f5f5] cursor-pointer">
                    Reset <GrPowerReset/>
                </Button>
                
            </div>

        </div>
    );
};

export default FilterCompnents;
