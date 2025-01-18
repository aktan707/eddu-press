import React from "react";
import Button from "../../components/UI/Button.jsx";

const HomeTitle = ({ title, subtitle, btnName }) => {
    return (
        <div className="container flex items-center justify-between">
            <div>
                <h2 className="text-[34px] font-bold">{title}</h2>
                <p>{subtitle}</p>
            </div>
            <div>
                <Button btnname={btnName} />
            </div>
        </div>
    );
};

export default HomeTitle;