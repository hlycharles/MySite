import * as React from "react";
import { RouteComponentProps } from "react-router";

import Navigator, { PANEL } from "../screenComponent/navigator";
import Title from "../screenComponent/title";

import "./style.scss";

type Props = RouteComponentProps<any>;

export function renderResume(path: string) {
    return (
        <div className="resume-container">
            <object type="image/svg+xml" data={path}>
                Bad Browser
            </object>
        </div>
    );
}

export default function ResumeScreen(props: Props) {

    const docPath = "../../asset/doc/resume.svg";

    return (
        <div>
            <div className="header-container">
                <Title titles={["Resume"]} />
                <Navigator panel={PANEL.RESUME} />
            </div>
            {renderResume(docPath)}
        </div>
    );
}
