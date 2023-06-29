type Props = {
    title?: string
    desc?: string
    photo?: string

}

const card = ({title, desc, photo}: Props): JSX.Element => {
    return (
        <div className="flex items-center justify-center flex-col w-[350px] h-[520px] mx-[20px] rounded-[10px] bg-[#a6a6a6]">
            <span className="text-left text-2xl">{title}</span>
            <p>{desc}</p>
            <img src={photo} className="w-[270px] h-[270px] rounded-[50%] bg-white"></img>
        </div>
    );
};

export default card;