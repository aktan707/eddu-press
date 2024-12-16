import React from 'react';
import logoIcon from "../../assets/logo.svg";
import {fec, ins, pin, x, you} from "../../assets/index.js"

const Footer = () => {
    return (
        <footer className={"container mx-auto bg-[#F5F5F5]"}>
            <div className={' flex gap-[100px] py-[90px] px-[0px]'}>
                <div className={"mb-[32px]"}>
                    <div className={'flex gap-[6px]'}>
                        <img src={logoIcon} alt="site logo"/>
                        <h4 className={"text-[28px] font-bold"}>EduPress</h4>
                    </div>
                    <p className={'text-[18px] w-[355px] text-[#555555]'}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div>
                    <h2 className={'font-bold text-[20px] mb-[32px]'}>GET HELP</h2>
                    <p className={'text-[18px] text-[#555555] mb-[20px]'}>Contact Us</p>
                    <p className={'text-[18px] text-[#555555] mb-[20px]'}>Latest Articles</p>
                    <p className={'text-[18px] text-[#555555] mb-[20px]'}>FAQ</p>
                </div>
                <div>
                    <h2 className={'font-bold text-[20px] mb-[32px]'}>PROGRAMS</h2>
                    <p className={'text-[18px] text-[#555555] h-[225px] leading-[45px]'}>
                        Art & Design <br/>
                        <span className={'text-[#FF782D]'}>Business</span> <br/>
                        IT & Software <br/>
                        Languages <br/>
                        Programming
                    </p>
                </div>
                <div>
                    <h2  className={'font-bold text-[20px] mb-[32px]'}>CONTACT US</h2>
                    <p className={'text-[18px] w-[410px] leading-[27px] mb-[16px]'}>Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA</p>
                    <p className={'text-[18px] w-[250px] leading-[27px] mb-[16px]'}>Tel: + (123) 2500-567-8988
                        Mail: supportlms@gmail.com</p>
                    <div className={'flex gap-[12px]'}>
                        <img src={fec} alt=""/>
                        <img src={pin} alt=""/>
                        <img src={x} alt=""/>
                        <img src={ins} alt=""/>
                        <img src={you} alt=""/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
