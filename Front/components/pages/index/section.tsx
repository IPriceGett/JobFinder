import { ReactNode } from "react";

type Props = {
    color : string
    children?: ReactNode
}

const Section = ({color, children} : Props): JSX.Element => {

    const background = `bg-[${color}]`

    return (
        <div className={"flex h-[620px] items-center justify-center p-[80px] " + background}>
            { children? children : <></>}
        </div>
    );
};

export default Section;