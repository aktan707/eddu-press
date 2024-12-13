import "./Header.css";
import SearchIcon from "../../assets/search-icon.svg";
import logoIcon from "../../assets/logo.svg";
import {NavLink} from "react-router-dom";
import {headerMenu} from "../../routes/routes.jsx";


const Header = () => {
    return (
        <div className={"container flex justify-between items-center"}>
            <div className={"flex justify-between gap-[4px]"}>
                <img src={logoIcon} alt="site logo"/>
                <h4 className={"text-[28px] font-bold"}>EduPress</h4>
            </div>
            <div className={"flex"}>
                {headerMenu.map((item) => {
                    return <NavLink to={item.path} key={item.name}
                                    className={"px-[20px] py-[26px]"}>{item.name}</NavLink>
                })}
            </div>
            <div className={"flex justify-between items-center gap-[20px]"}>
                <h4 className={"font-[500] text-[18px]"}>
                    <NavLink to={"/login"}>Login / Register</NavLink>
                </h4>
                <button
                    className={"h-[48px] w-[48px] rounded-full text-[#FF782D] border-[#FF782D] border flex items-center justify-center"}>
                    <img src={SearchIcon} alt=""/></button>
            </div>
        </div>
    );
};

export default Header;
