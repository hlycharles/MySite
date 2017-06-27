import * as React from "react";

import Navigator, { PANEL } from "../screenComponent/navigator";
import Title from "../screenComponent/title";

import "./style.scss";

export default function ResumeScreen() {

    return (
        <div>
            <div className="header-container">
                <Title titles={["Resume"]} />
                <Navigator panel={PANEL.RESUME} />
            </div>
            <div>
                <object type="image/svg+xml" data="../../asset/doc/resume.svg">
                    Bad Browser
                </object>
            </div>
        </div>
    );
}
