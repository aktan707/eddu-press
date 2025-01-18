import logoIcon from "../../assets/logo.svg";
import { fec, ins, pin, x, you } from "../../assets/index.js";

const Footer = () => {
    return (
        <footer className="bg-[#F5F5F5]">
            <div className="container flex gap-[100px] py-[90px] px-[0px]">
                <div className="mb-[32px]">
                    <div className="flex gap-[6px]">
                        <img src={logoIcon} alt="site logo" />
                        <h4 className="text-[28px] font-bold">EduPress</h4>
                    </div>
                    <p className="text-[18px] w-[355px] text-[#555555]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-[20px] mb-[32px]">GET HELP</h2>
                    <p className="text-[18px] text-[#555555] mb-[20px]">Contact Us</p>
                    <p className="text-[18px] text-[#555555] mb-[20px]">Latest Articles</p>
                    <p className="text-[18px] text-[#555555] mb-[20px]">FAQ</p>
                </div>
                <div>
                    <h2 className="font-bold text-[20px] mb-[32px]">PROGRAMS</h2>
                    <p className="text-[18px] text-[#555555] h-[225px] leading-[45px]">
                        Art & Design <br />
                        <span className="text-[#FF782D]">Business</span> <br />
                        IT & Software <br />
                        Languages <br />
                        Programming
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-[20px] mb-[32px]">CONTACT US</h2>
                    <p className="text-[18px] w-[410px] leading-[27px] mb-[16px]">
                        Address: 2321 New Design Str, Lorem Ipsum 10 Hudson Yards, USA
                    </p>
                    <p className="text-[18px] w-[250px] leading-[27px] mb-[16px]">
                        Tel: + (123) 2500-567-8988
                        <br />
                        Mail: supportlms@gmail.com
                    </p>
                    <div className="flex gap-[12px]">
                        <img src={fec} alt="Facebook" />
                        <img src={pin} alt="Pinterest" />
                        <img src={x} alt="Twitter" />
                        <img src={ins} alt="Instagram" />
                        <img src={you} alt="YouTube" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;