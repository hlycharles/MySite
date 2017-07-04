import * as React from "react";

import "./header.scss";

export interface HeaderProps {
    title: string;
    img?: string;
    theme: "gray" | "light";
}

export default function Header(props: HeaderProps) {

    return (
        <div className="header-stripe-container">
            <h5 className={props.theme}>{props.title}</h5>
        </div>
    );
}
