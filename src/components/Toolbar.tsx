"use client";

import GridIcon from "./icons/GridIcon";
import BirdIcon from "./icons/BirdIcon";
import IconBox from "./UI/IconBox";
import ZigzagIcon from "./UI/Icons/ZigzagIcon";
import Spinner from "./UI/Spinner";

export default function Toolbar() {
    return (
        <div className="flex flex-col gap-2">
            <IconBox
                icon={"/svg/dotted-square.svg"}
                size="sm"
            />
            <IconBox
                icon={<BirdIcon className="w-7 h-7" />}
                size="sm"
            />
            <IconBox
                icon={<ZigzagIcon className="w-5 h-5" />}
                size="sm"
            />
            <IconBox icon={<Spinner />} size="sm" />
        </div>
    );
}
