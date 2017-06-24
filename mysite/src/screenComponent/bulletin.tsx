import * as React from "react";

interface BulletinProps {
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
