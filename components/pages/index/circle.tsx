type Props = {
    photo?: string

}

const circle = ({ photo}: Props): JSX.Element => {
    return (
        <img src={photo} className= "w-[170px] h-[170px] md:w-[270px] md:h-[270px] rounded-[50%] bg-white"/>
    );
};

export default circle;