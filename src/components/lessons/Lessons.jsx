import {course1, course2, course3, course4, course5, course6, hourse, students} from "../../assets/index.js";

const courses = [
    {
        id: 1,
        category: "Photography",
        author: "Determined-Poitras",
        title: "Create An LMS Website With LearnPress",
        duration: "2 Weeks",
        students: 156,
        price: "Free",
        image: course1,
    },
    {
        id: 2,
        category: "Photography",
        author: "Determined-Poitras",
        title: "Design a website with ThimPress",
        duration: "2 Weeks",
        students: 156,
        price: "$49.0",
        image: course2,
    },
    {
        id: 3,
        category: "Photography",
        author: "Determined-Poitras",
        title: "Create an LMS Website with LearnPress",
        duration: "2 Weeks",
        students: 156,
        price: "Free",
        image: course3,
    },
    {
        id: 4,
        category: "Photography",
        author: "Determined-Poitras",
        title: "Create an LMS Website with LearnPress",
        duration: "2 Weeks",
        students: 156,
        price: "Free",
        image: course4,
    },
    {
        id: 5,
        category: "Photography",
        author: "Determined-Poitras",
        title: "Create An LMS Website With LearnPress",
        duration: "2 Weeks",
        students: 156,
        price: "Free",
        image: course5,
    },
    {
        id: 6,
        category: "Photography",
        author: "Determined-Poitras",
        title: "Create an LMS Website with LearnPress",
        duration: "2 Weeks",
        students: 156,
        price: "Free",
        image: course6,
    },
];

const CourseCard = ({ course }) => {
    return (
        <div className="w-[410px] h-[475px] border rounded-[20px] shadow-lg flex flex-col transition-all hover:-translate-y-4 hover:shadow-xl ">
            <div className="relative">
                <span className=" absolute bg-black text-white w-[114px] h-[40px] rounded-[8px] text-[16px] py-[7px] px-[11px] ml-[20px] mt-[20px]">
                    {course.category}
                </span>
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-[240px] object-cover rounded-t-[20px]"
                />
            </div>
            <div className="p-[20px] flex flex-col justify-between flex-grow">
                <p className="text-sm text-[black] mt-1">
                    <span className="text-gray-500">by</span> {course.author}
                </p>
                <h3 className="text-[20px] leading-[20px] font-semibold w-[365px] transition-all hover:text-orange-500">
                    {course.title}
                </h3>
                <hr className="my-4" />
                <div className="flex justify-between">
                    <p className="flex items-center text-[16px] text-[#555555]">
                        <img className="w-[16px] h-[16px] mr-2" src={hourse} alt="Duration" />
                        {course.duration}
                    </p>
                    <p className="flex items-center text-[16px] text-[#555555]">
                        <img className="w-[16px] h-[16px] mr-2" src={students} alt="Students" />
                        {course.students} Students
                    </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold">{course.price}</h2>
                    <button className="text-black px-4 py-2 rounded-lg hover:text-orange-500 transition-colors">
                        View more
                    </button>
                </div>
            </div>
        </div>
    );
};

const Lessons = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default Lessons;