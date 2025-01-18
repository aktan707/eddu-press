import {course7, course8, course9, hours, hourse, students} from "../../assets/index.js";
const jans = [
    {
        id: 7,
        author: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
        title: "Best LearnPress WordPress Theme Collection for 2023 ",
        data: "Jan 24, 2025",
        image: course7,
    },
    {
        id: 8,
        author: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
        title: "Best LearnPress WordPress Theme Collection for 2023",
        data: "Jan 24, 2025",
        image: course8,
    },
    {
        id: 9,
        author: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
        title: "Best LearnPress WordPress Theme Collection for 2023",
        data: "Jan 24, 2025",
        image: course9,
    },
];

const Courses = () => {
    return (
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[90px]">
            {jans.map((jans) => {
                return (
                    <div
                        className="w-[410px] h-[475px] border rounded-[20px] shadow-lg flex flex-col transition-all hover:-translate-y-4 hover:shadow-xl ">
                        <div className="relative">
                            <img
                                src={jans.image}
                                alt={jans.title}
                                className="w-full h-[240px] object-cover rounded-t-[20px]"
                            />
                        </div>
                        <div className="p-[20px] flex flex-col justify-between flex-grow">
                            <h3 className="text-[20px] leading-[20px] font-semibold w-[365px] transition-all hover:text-orange-500">
                                {jans.title}
                            </h3>
                            <p className={'flex gap-[8px] text-[#555555]'}>
                                <img className={'pb-[4px]'} src={hours} alt=""/>
                                {jans.data}
                            </p>
                            <p className="text-[18px] leading-[27px] font-normal text-[#555555] mt-1">
                                {jans.author}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Courses;
