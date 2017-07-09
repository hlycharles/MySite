import * as React from "react";
import { RouteComponentProps } from "react-router";

import Navigator, { PANEL } from "../screenComponent/navigator";
import Title from "../screenComponent/title";

import "./style.scss";

type Props = RouteComponentProps<any>;

export function renderResume(path: string, backPath?: string) {

    function openInNewTab() {
        const filePath = (backPath) ? backPath : path;
        window.open(filePath);
    }

    return (
        <div className="resume-container">
            <object type="image/svg+xml" data={path}>
                <button type="button" onClick={openInNewTab}>
                    Click to view resume
                </button>
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
