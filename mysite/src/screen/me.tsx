import * as React from "react";

import { BulletinProps } from "../screenComponent/bulletin";
import BulletinBoard from "../screenComponent/bulletinBoard";
import Navigator, { PANEL } from "../screenComponent/navigator";
import Title from "../screenComponent/title";

import "./style.scss";

export default class MeScreen extends
                     React.Component<never, never> {

    render() {
        return (
            <div>
                <div className="header-container">
                    <Title titles={["Me"]} />
                    <Navigator panel={PANEL.ME} />
                </div>
                <div className="content-container">
                    {this._renderRowOne()}
                </div>
            </div>
        );
    }

    private _renderRowOne(): React.ReactNode {
        const resumeProp: BulletinProps = {
            class: "resume",
            cover: false,
            detailedView: <p>Hi</p>,
        };
        return (
            <BulletinBoard
                bulletinProps={[resumeProp]}
            />
        );
    }
}
