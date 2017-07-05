import * as React from "react";
import { RouteComponentProps } from "react-router";

import Navigator, { PANEL } from "../screenComponent/navigator";
import Title from "../screenComponent/title";

import "./style.scss";

type Props = RouteComponentProps<any>;

export default function ResumeScreen(props: Props) {

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
