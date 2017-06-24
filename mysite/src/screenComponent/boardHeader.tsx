import * as React from "react";

export interface BoardHeaderProps {
    title: string;
    img?: string;
}

export default function BoardHeaderProps(props: BoardHeaderProps) {

    return (
        <div>
            <h5>{props.title}</h5>
        </div>
    );
}
