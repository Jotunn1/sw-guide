import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeToDark, changeToWhite } from "../features/theme/ThemeSlice";

const ThemeToggle = () => {
    const [isToggled, setIsToggled] = useState(false);
    const dispatch = useDispatch();

    const toggleClickHandler = () => {
        setIsToggled(!isToggled);
        isToggled ? dispatch(changeToDark()) : dispatch(changeToWhite());
    };

    return (
        <div className="wrapper">
            <div
                className={`switch ${isToggled ? "left" : "right"}`}
                onClick={toggleClickHandler}
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
