import React from "react";
import SearchIcon from "../../assets/search-icon.svg";
import logoIcon from "../../assets/logo.svg";
import {Link, NavLink} from "react-router-dom";
import { headerMenu } from "../../routes/routes.jsx";
import Footer from "../footer/Footer.jsx";

const Header = () => {
    return (
        <div className="container flex justify-between items-center">
            <div className="flex items-center gap-[4px]">
                <img src={logoIcon} alt="site logo" />
                <h4 className="text-[28px] font-bold"> <Link to="/home">EduPress</Link></h4>
            </div>

            <nav className="flex">
                {headerMenu.map((item) => {
                    const isPageWithSubmenu = item.name === "Page";
                    const hover = isPageWithSubmenu ? "hover:text-[#ff782d] relative group" : "";

                    return (
                        <NavLink to={item.path} key={item.name} className="px-[20px] py-[26px]">
                            <span className={`flex items-center ${hover}`}>
                                {item.name}
                                {item.icon && <span className="pl-[2px] pt-1">{item.icon}</span>}
                                {item.name === "Page" && <PagesMenu />}
                            </span>
                        </NavLink>
                    );
                })}
            </nav>

            <div className="flex items-center gap-[10px]">
                <Header/>
                <NavLink to="/login" className="font-[500] text-[18px]">Login /</NavLink>
                <NavLink to="/register" className="font-[500] text-[18px]">Register</NavLink>
                <button
                    className="h-[48px] w-[48px] rounded-full text-[#FF782D] border-[#FF782D] border flex items-center justify-center">
                    <img src={SearchIcon} alt="Search"/>
                </button>
                <Footer/>
            </div>
        </div>
    );
};

export default Header;

function PagesMenu() {
    return (
        <ul className="absolute -left-[25px] top-[30px] w-48 bg-gray-700 rounded shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
            <li>
                <NavLink to="/contact" className="block px-4 py-2 hover:bg-gray-600">
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to="/faqs" className="block px-4 py-2 hover:bg-gray-600">
                    FAQs
                </NavLink>
            </li>
        </ul>
    );
}