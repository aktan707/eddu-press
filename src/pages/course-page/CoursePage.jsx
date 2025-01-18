import {search} from "../../assets/index.js"
import Lessons from "../../components/lessons/Lessons.jsx";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

const CoursePage = () => {
    return (
        <div className={'container'}>
            <div className={'flex justify-between mt-[60px] mb-[40px]'}>
                <h1 className={'text-[36px] leading-[43px] font-semibold'}>All Courses</h1>
                <div>
                    <img className={'absolute mt-[4px] ml-[248px]'} src={search} alt=""/>
                    <input className={'w-[270px] h-[31px] pb-[4px]  outline-none border-b-2 border-[black]'}
                           type="search" placeholder={'Search'}/>
                </div>
            </div>
            <div className={'mb-[30px]'}>
                <Lessons/>
            </div>
            <div className={'ml-[500px]'}>
                <div className={'flex gap-[12px] mb-[90px] '}>
                    <button className={'w-[48px] h-[48px] border rounded-[50%] hover:bg-[black] hover:text-white'}><AiOutlineArrowLeft
                        className={'ml-[15px]'}/></button>
                    <button className={'w-[48px] h-[48px] border rounded-[50%] hover:bg-[black] hover:text-white'}>1</button>
                    <button className={'w-[48px] h-[48px] border rounded-[50%]  hover:bg-[black] hover:text-white'}>2</button>
                    <button className={'w-[48px] h-[48px] border rounded-[50%]  hover:bg-[black] hover:text-white'}>3</button>
                    <button className={'w-[48px] h-[48px] border rounded-[50%]  hover:bg-[black] hover:text-white'}><AiOutlineArrowRight
                        className={'ml-[15px]'}/></button>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;
