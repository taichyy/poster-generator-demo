import { ArrowBigRight } from "lucide-react";

import { Input } from "./input";

const ObjAdjusterInput = ({
    text, append = "", onChange, placeholder, defaultValue, children
}) => {
    return (
        <div className=" flex space-x-3">
            <span className=" whitespace-nowrap flex items-center justify-center">
                <ArrowBigRight />
                {text}
            </span>
            {children ? children : (
                <Input
                    type="text"
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    className="bg-transparent"
                />
            )}
            <div className="flex items-center justify-center">
                {append}
            </div>
        </div>
    );
}

export default ObjAdjusterInput;