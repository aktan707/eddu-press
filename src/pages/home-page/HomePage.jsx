import {banner, banner2, banner3, course, family, feed, mark, student} from "../../assets/index.js";
import TopCategories from "./top-categories/TopCategories.jsx";
import HomeTitle from "./HomeTitle.jsx";
import Lessons from "../../components/lessons/Lessons.jsx";
import Courses from "../../components/courses/Courses.jsx";

const HomePage = () => {
    return (
        <div className="">
            <div style={{
                height: "700px",
                backgroundImage: `url(${course})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            }} className="py-[219px] mb-[90px]">
                <div className={'container'}>
                    <h1
                        style={{fontFamily: "Exo"}}
                        className="text-[48px] leading-[57px] w-full max-w-[500px] font-semibold mb-[24px]"
                    >
                        Build Skills With Online Courses
                    </h1>
                    <p className="text-[18px] leading-[27px] text-[#555555] w-full max-w-[522px] font-normal mb-[20px]">
                        We denounce with righteous indignation and dislike men who are so beguiled and demoralized
                        that
                        they cannot trouble.
                    </p>
                    <button className="rounded-[24px] py-[10px] px-[24px] bg-[#FF782D] text-white">
                        Post Comment
                    </button>
                </div>
            </div>
            <div className={'container'}>
                <HomeTitle
                    title="Top Categories"
                    subtitle="Explore our Popular Categories"
                    btnName="All Categories"
                />
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <TopCategories/>
                </div>
                <div>
                    <Lessons />
                </div>
                <div style={{
                    backgroundImage: `url(${banner})`,
                    height: "324px",
                    width: "100%",
                    padding: "54px 50px",
                    marginTop: "90px",
                    marginBottom: "90px",
                }}>
                    <h2 className={'text-[16px] leading-[19px] font-semibold text-[#555555] mb-[12px]'}>GET MORE POWER
                        FROM</h2>
                    <h1 className={'text-[32px] leading-[38px] font-semibold mb-[24px]'}>LearnPress Add-Ons</h1>
                    <p className={' w-[493px] text-[16px] leading-[27px] font-normal text-[#555555] mb-[20px]'}>The next
                        level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside.</p>
                    <button className={'w-[177px] h-[48px] rounded-[24px] bg-[#FF782D] text-[white] '}>Explorer course
                    </button>
                </div>
                <div className={'flex gap-[30px] mb-[90px]'}>
                    <div className={'w-[300px] h-[181px] rounded-[20px] text-center py-[50px] bg-[#F5F5F5]'}>
                        <h1 className={'text-[32px] leading-[38px] font-semibold text-[#FF782D] mb-[16px]'}>899+</h1>
                        <h5 className={'text-[18px] leading-[27px] font-medium'}>Total Courses</h5>
                    </div>
                    <div className={'w-[300px] h-[181px] rounded-[20px] text-center py-[50px] bg-[#F5F5F5]'}>
                        <h1 className={'text-[32px] leading-[38px] font-semibold text-[#FF782D] mb-[16px]'}>899</h1>
                        <h5 className={'text-[18px] leading-[27px] font-medium'}>Total Courses</h5>
                    </div>
                    <div className={'w-[300px] h-[181px] rounded-[20px] text-center py-[50px] bg-[#F5F5F5]'}>
                        <h1 className={'text-[32px] leading-[38px] font-semibold text-[#FF782D] mb-[16px]'}>158</h1>
                        <h5 className={'text-[18px] leading-[27px] font-medium'}>Instructor</h5>
                    </div>
                    <div className={'w-[300px] h-[181px] rounded-[20px] text-center py-[50px] bg-[#F5F5F5]'}>
                        <h1 className={'text-[32px] leading-[38px] font-semibold text-[#FF782D] mb-[16px]'}>100%</h1>
                        <h5 className={'text-[18px] leading-[27px] font-medium'}>Satisfaction rate</h5>
                    </div>
                </div>
                <div className={'flex mb-[90px]'}>
                    <div>
                        <img src={family} alt=""/>
                    </div>
                    <div className={' py-[42.5px] pl-[125px]'}>
                        <h1 className={'text-[32px] leading-[38px] font-semibold mb-[24px]'}>Grow us your skill
                            with LearnPress LMS</h1>
                        <p className={' w-[540px] text-[18px] leading-[27px] font-normal text-[#555555] mb-[16px]'}>We
                            denounce with righteous indignation and dislike men who are so beguiled and demoralized that
                            cannot trouble.</p>
                        <div className={'mb-[12px]'}>
                            <div className={''}>
                                <div className={'flex'}>
                                    <img className={'mr-[8px]'} src={mark} alt=""/>
                                    <h1 className={'text-[18px] font-normal'}>Certification</h1>
                                </div>
                            </div>
                        </div>
                        <div className={'mb-[12px]'}>
                            <div className={''}>
                                <div className={'flex'}>
                                    <img className={'mr-[8px]'} src={mark} alt=""/>
                                    <h1 className={'text-[18px] font-normal'}>Certification</h1>
                                </div>
                            </div>
                        </div>
                        <div className={'mb-[12px]'}>
                            <div className={''}>
                                <div className={'flex'}>
                                    <img className={'mr-[8px]'} src={mark} alt=""/>
                                    <h1 className={'text-[18px] font-normal'}>Certification</h1>
                                </div>
                            </div>
                        </div>
                        <div className={'mb-[20px]'}>
                            <div className={''}>
                                <div className={'flex'}>
                                    <img className={'mr-[8px]'} src={mark} alt=""/>
                                    <h1 className={'text-[18px] font-normal'}>Certification</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="rounded-[24px] py-[10px] px-[24px] bg-[#FF782D] text-white">
                                Explorer course
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${banner2})`,
                    height: "300px",
                    width: "100%",
                    borderRadius: "20px",
                }}>
                    <div className={'text-center pt-[52px] '}>
                        <h2 className={'text-[16px] leading-[19px] font-semibold  mb-[12px]'}>PROVIDING AMAZING</h2>
                        <h1 className={'text-[32px] leading-[38px] font-semibold mb-[24px]'}>Education Wordpress
                            Theme</h1>
                        <p className={' text-[16px] leading-[27px] font-normal text-[#555555] mb-[20px]'}>The next level
                            of LMS WordPress Theme. Learn anytime and anywhere.</p>
                        <button className={'w-[177px] h-[48px] rounded-[24px] bg-[#FF782D] text-[white] '}>Explorer
                            course
                        </button>
                    </div>
                </div>
                <div className={'h-[540px] my-[90px]'}>
                    <div className={'text-center mb-[50px]'}>
                        <h1 className={'text-[32px] leading-[38px] font-semibold'}>Student feedbacks</h1>
                        <p className={'text-[18px] leading-[27px] font-normal text-[#555555] mt-[12px]'}>What Students Say About Academy LMS</p>
                    </div>
                    <div className={'flex gap-[30px]'}>
                        <div className={'py-[40px] px-[30px] border rounded-[20px]'}>
                            <div className={'w-[240px] h-[239px] mb-[30px]'}>
                                <img className={'mb-[20px]'} src={feed} alt=""/>
                                <p className={'text-[18px] leading-[27px] font-normal'}>I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound</p>
                            </div>
                            <div>
                                <h1 className={'text-[20px] leading-[24px] font-semibold mb-[8px]'}>Roe Smith</h1>
                                <p className={'text-[18px] leading-[27px] font-normal text-[#555555]'}>Designer</p>
                            </div>
                        </div>
                        <div className={'py-[40px] px-[30px] border rounded-[20px]'}>
                            <div className={'w-[240px] h-[239px] mb-[30px]'}>
                                <img className={'mb-[20px]'} src={feed} alt=""/>
                                <p className={'text-[18px] leading-[27px] font-normal'}>I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound</p>
                            </div>
                            <div>
                                <h1 className={'text-[20px] leading-[24px] font-semibold mb-[8px]'}>Roe Smith</h1>
                                <p className={'text-[18px] leading-[27px] font-normal text-[#555555]'}>Designer</p>
                            </div>
                        </div>
                        <div className={'py-[40px] px-[30px] border rounded-[20px]'}>
                            <div className={'w-[240px] h-[239px] mb-[30px]'}>
                                <img className={'mb-[20px]'} src={feed} alt=""/>
                                <p className={'text-[18px] leading-[27px] font-normal'}>I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound</p>
                            </div>
                            <div>
                                <h1 className={'text-[20px] leading-[24px] font-semibold mb-[8px]'}>Roe Smith</h1>
                                <p className={'text-[18px] leading-[27px] font-normal text-[#555555]'}>Designer</p>
                            </div>
                        </div>
                        <div className={'py-[40px] px-[30px] border rounded-[20px]'}>
                            <div className={'w-[240px] h-[239px] mb-[30px]'}>
                                <img className={'mb-[20px]'} src={feed} alt=""/>
                                <p className={'text-[18px] leading-[27px] font-normal'}>I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound</p>
                            </div>
                            <div>
                                <h1 className={'text-[20px] leading-[24px] font-semibold mb-[8px]'}>Roe Smith</h1>
                                <p className={'text-[18px] leading-[27px] font-normal text-[#555555]'}>Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${banner3})`,
                    backgroundColor: '#DCDAFC',
                }} className={'h-[250px] rounded-[20px] p-[55px] mb-[90px]'}>
                    <div className={'flex justify-between items-center '}>
                        <div className={'flex gap-[32px] items-center'}>
                            <div className={'w-[120px] h-[120px] rounded-[50%] bg-white py-[24px] px-[30px]'}>
                                <img src={student} alt=""/>
                            </div>
                            <div>
                                <h1 className={'text-[20px] leading-[24px] font-semibold'}>Let’s Start With Academy
                                    LMS</h1>
                            </div>
                        </div>
                        <div>
                            <button className={'w-[156px] h-[48px] rounded-[24px] border-2 border-[#FF782D] text-[#FF782D] text-[18px] font-medium'}>I’m a student</button>
                            <button className={'w-[219px] h-[48px] rounded-[24px] ml-[20px] bg-[#FF782D] text-[white] text-[18px] font-normal'}>Become an Instructor</button>
                        </div>
                    </div>
                </div>
                <div className={'mb-[34px]'}>
                    <HomeTitle title={'Latest articles'} subtitle={'Explore our Free Acticles'} btnName={'All articles'}/>
                </div>
                <div className={'mb-[90px]'}>
                    <Courses/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;