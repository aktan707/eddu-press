import {email, phone,} from "../../assets/index.js";

const ContactPage = () => {
    return (
        <div className={"container mx-auto"}>
            <div className={"flex justify-between mb-[60px]"}>
                <div>
                    <h2 className={"text-[36px] font-bold mb-[24px]"}>Need a direct line?</h2>
                    <p className={"text-[18px] w-[410px] mb-[16px]"}>Cras massa et odio donec faucibus in. Vitae pretium
                        massa dolor ullamcorper lectus elit quam.</p>
                    <div className={"flex items-center gap-[10px] mb-[16px]"}>
                        <button className={"w-[56px] h-[56px] rounded-[8px] bg-[#F5F5F5] pl-[12px]"}>
                            <img src={phone} alt=""/>
                        </button>
                        <div>
                            <p className={"text-[#555555]"}>Phone</p>
                            <p className={"font-bold"}>(123) 456 7890</p>
                        </div>
                    </div>
                    <div className={"flex items-center gap-[10px]"}>
                        <button className={"w-[56px] h-[56px] rounded-[8px] bg-[#F5F5F5] pl-[12px]"}>
                            <img src={email} alt=""/>
                        </button>
                        <div>
                            <p className={"text-[#555555]"}>Email</p>
                            <p className={"font-bold"}>contact@thimpress.com</p>
                        </div>
                    </div>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5847.3064924918635!2d74.57712647770998!3d42.8801625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8196b576869%3A0x9d2d0a8f99659b89!2z0KTQuNGC0L3QtdGBINC60LvRg9CxIE1heGltdW0gRml0bmVzcw!5e0!3m2!1sru!2skg!4v1734161333545!5m2!1sru!2skg"
                        width="600" height="450" style={{
                        border: "0"
                    }}
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">< /iframe>
                </div>
            </div>
            <div>
                <h2 className={'text-[32px] mb-[20px] font-bold'}>Contact us</h2>
                <p className={'text-[18px] text-[#555555] mb-[30px]'}>Your email address will not be published. Required fields are marked *</p>
                <div className={"flex items-center gap-[20px]"}>
                    <input className={'w-[635px] h-[48px] border rounded-[8px] pl-[16px]'} type="" placeholder={'name*'}/>
                    <input className={'w-[635px] h-[48px] border rounded-[8px] pl-[16px]'} type="" placeholder={'email*'}/>
                </div>
                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <textarea id="message" rows="4"
                              className="mt-[20px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Comment"></textarea>
                </div>
                <div className={'mt-[20px]'}>
                    <input type="checkbox"/> <span>Save my name, email in this brower for the next time I comment</span>
                </div>
                <div>
                    <button className={'bg-[#FF782D] text-[white] w-[170px] h-[48px] rounded-[24px] px-[24px] mt-[20px] py-[10px] mb-[90px]'}>Posts
                        comment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
