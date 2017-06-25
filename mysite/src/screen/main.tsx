import * as React from "react";

import { BulletinProps } from "../screenComponent/bulletin";
import BulletinBoard from "../screenComponent/bulletinBoard";
import Navigator from "../screenComponent/navigator";
import Title from "../screenComponent/title";

import "./main.scss";

export default class MainScreen extends
                     React.Component<never, never> {

    render() {
        return (
            <div>
                <div className="header-container">
                    <Title titles={["Luyao Hou"]} />
                    <Navigator panel={null} />
                </div>
                <div className="content-container">
                    {this._renderPinBoard()}
                    {this._renderInstaBoard()}
                </div>
            </div>
        );
    }

    private _renderPinBoard(): React.ReactNode {
        const resumeProp: BulletinProps = {
            class: "resume",
            detailedView: <p>Hi</p>,
        };
        return (
            <BulletinBoard
                title="PINNED"
                bulletinProps={[resumeProp]}
            />
        );
    }

    private _renderInstaBoard(): React.ReactNode {
        const instaProp: BulletinProps = {
            class: "insta",
        };
        return (
            <BulletinBoard
                title="INSTAGRAM"
                bulletinProps={[instaProp]}
            />
        );
    }
}
