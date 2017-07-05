import * as React from "react";

import { BulletinProps } from "../screenComponent/bulletin";
import BulletinBoard from "../screenComponent/bulletinBoard";
import Navigator, { PANEL } from "../screenComponent/navigator";
import Title from "../screenComponent/title";

import "./style.scss";

export default class MeScreen extends
                     React.Component<{}, never> {

    render() {
        return (
            <div>
                <div className="header-container">
                    <Title titles={["Me"]} />
                    <Navigator panel={PANEL.ME} />
                </div>
                <div className="content-container">
                    {this._renderEducation()}
                </div>
                <div className="content-container">
                    {this._renderOffwork()}
                </div>
                <div className="content-container">
                    {this._renderExperience()}
                </div>
            </div>
        );
    }

    private _renderEducation(): React.ReactNode {
        return (
            <BulletinBoard
                title="Education"
                bulletinProps={[
                    this._renderCMU(),
                    this._renderMajor(),
                ]}
            />
        );
    }

    private _renderOffwork(): React.ReactNode {
        return (
            <BulletinBoard
                title="Off-work"
                bulletinProps = {[
                    this._renderMusic(),
                    this._renderReading(),
                    this._renderArsenal(),
                ]}
            />
        );
    }

    private _renderExperience(): React.ReactNode {
        return (
            <BulletinBoard
                title="Experiences"
                bulletinProps = {[
                    this._renderNavlab(),
                    this._renderRemitly(),
                ]}
            />
        );
    }

    // bulletin renderers

    private _renderCMU(): BulletinProps {
        const cmuProps: BulletinProps = {
            class: "cmu",
            cover: false,
            headerText: "CMU",
            img: "../../asset/img/cmu_icon.png",
        };
        return cmuProps;
    }

    private _renderMajor(): BulletinProps {
        const majorProps: BulletinProps = {
            class: "major",
            cover: false,
            headerText: "ECE CS",
            img: "../../asset/img/cs_icon.png",
        };
        return majorProps;
    }

    private _renderMusic(): BulletinProps {
        const musicProps: BulletinProps = {
            class: "music",
            cover: false,
            headerText: "Music",
            img: "../../asset/img/music_icon.png",
        };
        return musicProps;
    }

    private _renderReading(): BulletinProps {
        const readingProps: BulletinProps = {
            class: "reading",
            cover: false,
            headerText: "Reading",
            img: "../../asset/img/reading_icon.png",
        };
        return readingProps;
    }

    private _renderArsenal(): BulletinProps {
        const arsenalProps: BulletinProps = {
            class: "arsenal",
            cover: false,
            headerText: "Arsenal",
            img: "../../asset/img/arsenal_icon.png",
        };
        return arsenalProps;
    }

    private _renderNavlab(): BulletinProps {
        const remitlyProps: BulletinProps = {
            class: "navlab",
            cover: false,
            headerText: "Navlab CMU",
            img: "../../asset/img/navlab_icon.png",
        };
        return remitlyProps;
    }

    private _renderRemitly(): BulletinProps {
        const remitlyProps: BulletinProps = {
            class: "remitly",
            cover: false,
            headerText: "Remitly",
            img: "../../asset/img/remitly_icon.png",
        };
        return remitlyProps;
    }
}
