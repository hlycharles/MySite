import * as React from "react";

import "./boardHeader.scss";

export interface BoardHeaderProps {
    title: string;
    img?: string;
}

export default function BoardHeader(props: BoardHeaderProps) {

    return (
        <div className="bulletin-title-container">
            <h5>{props.title}</h5>
        </div>
    );
}
