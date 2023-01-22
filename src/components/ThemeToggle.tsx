import { useState } from "react";
import "../styles/theme-toggle-button.scss";

const ThemeToggle = () => {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <div className="wrapper">
            <input type="checkbox" id="bb8-checkbox" />
            <label
                htmlFor="bb8-checkbox"
                className={`switch ${isToggled ? "left" : "right"}`}
                onClick={() => setIsToggled(!isToggled)}
            >
                <div className="bb8-head"></div>
                <div className="bb8-body">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                </div>
            </label>
        </div>
    );
};

export default ThemeToggle;
