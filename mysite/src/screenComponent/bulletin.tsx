import * as React from "react";

import "./bulletin.scss";

export interface BulletinProps {
    class: string;
    img?: string;
}

export default function Bulletin(props: BulletinProps) {

    const className = "bulletin ".concat(props.class);

    return (
        <div className={className} />
    );
}
