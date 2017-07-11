import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Screen } from "../appUi";
import Navigator from "../screenComponent/navigator";
import Title from "../screenComponent/title";
import { ASSET_PATH } from "./data";

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

    const docPath = ASSET_PATH.concat("doc/resume.svg");

    return (
        <div>
            <div className="header-container">
                <Title titles={["Resume"]} />
                <Navigator screen={Screen.RESUME} />
            </div>
            {renderResume(docPath)}
        </div>
    );
}
