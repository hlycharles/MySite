import * as React from "react";

export interface BulletinProps {
    color: string;
    img: string;
}

export default function Bulletin(props: BulletinProps) {

    const style = {
        backgroundColor: props.color,
    };

    return (
        <div
            className="bulletin"
            style={style}
        >
        </div>
    );
}
