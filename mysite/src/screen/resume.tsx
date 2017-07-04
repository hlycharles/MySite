import * as React from "react";

import Navigator, { PANEL } from "../screenComponent/navigator";
import Title from "../screenComponent/title";

import "./style.scss";

export default function ResumeScreen() {

    const docPath = "../../asset/doc/resume.svg";

    return (
        <div>
            <div className="header-container">
                <Title titles={["Resume"]} />
                <Navigator panel={PANEL.RESUME} />
            </div>
            <div>
                <object type="image/svg+xml" data={docPath}>
                    Bad Browser
                </object>
            </div>
        </div>
    );
}