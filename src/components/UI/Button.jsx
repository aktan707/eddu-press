
const Button = ({btnname = "button" , bgColor , border }) => {
    return (
        <button className={`rounded-[24px] py-[10px] bg-[ ${bgColor} ] px-[24px] ${ border} border-[grey]`}> {btnname} </button>
    );
};

export default Button;
