import {
    commin,
    design,
    develop,
    video,
    market,
    content,
    finance,
    scien,
    photo,
    network,
} from "../../../assets/index.js";

const mockCategories = [
    { icon: design, name: "Art & Design", count: 38 },
    { icon: develop, name: "Development", count: 38 },
    { icon: commin, name: "Communication", count: 38 },
    { icon: photo, name: "Photography", count: 38 },
    { icon: video, name: "Videography", count: 38 },
    { icon: market, name: "Marketing", count: 38 },
    { icon: content, name: "Content Writing", count: 38 },
    { icon: finance, name: "Finance", count: 38 },
    { icon: scien, name: "Science", count: 38 },
    { icon: network, name: "Network", count: 38 },
];

const TopCategories = () => {
    return (
        <div className="container">
            <div className="items-center h-[515px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-[50px] mb-[90px]">
                {mockCategories.map((c) => (
                    <div
                        key={c.name}
                        className="w-[234px] h-[234px] rounded-[20px] flex items-center justify-center flex-col gap-[15px] border-[1px]"
                    >
                        <img src={c.icon} alt={c.name} />
                        <h3>{c.name}</h3>
                        <p>{c.count} Courses</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCategories;
