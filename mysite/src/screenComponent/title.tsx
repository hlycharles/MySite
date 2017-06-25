import * as React from "react";

interface TitleProps {
    titles: Array<string>;
}

export default function Title(props: TitleProps) {

    return (
        <div className="title-container">
            {props.titles.map((value: string, index: number) => {
                return <h2 key={index}>{value}</h2>;
            })}
        </div>
    );
}
