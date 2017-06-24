import * as React from "react";

import Navigator from "../screenComponent/navigator";
import Title from "../screenComponent/title";

import "./main.scss";

export default function MainScreen() {
    return (
        <div>
            <div>
                <Title titles={["Luyao", "Hou"]} />
                <Navigator panel={null} />
            </div>
        </div>
    );
}
