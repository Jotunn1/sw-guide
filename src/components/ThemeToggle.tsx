import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../features/theme/ThemeSlice";

const ThemeToggle = () => {
    const [isToggled, setIsToggled] = useState(false);

    // const selectedTheme = useSelector(selectTheme);

    // console.log(selectedTheme);

    return (
        <div className="wrapper">
            <div
                className={`switch ${isToggled ? "left" : "right"}`}
                onClick={() => setIsToggled(!isToggled)}
            >
                <div className="bb8-head"></div>
                <div className="bb8-body">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                </div>
            </div>
        </div>
    );
};

export default ThemeToggle;
