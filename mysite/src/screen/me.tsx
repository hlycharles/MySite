import * as React from "react";

import TextDetail from "../detailComponent/textDetail";
import { BulletinProps } from "../screenComponent/bulletin";
import BulletinBoard from "../screenComponent/bulletinBoard";
import { ASSET_PATH } from "./data";

export default class MeScreen extends
                     React.Component<{}, never> {

    render() {
        return (
            <div className="content-container">
                {this._renderEducation()}
                {this._renderOffwork()}
                {this._renderExperience()}
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
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/me_cmu.txt")}
                    type="file"
                />
            ),
            headerText: "CMU",
            img: ASSET_PATH.concat("img/cmu_icon.png"),
        };
        return cmuProps;
    }

    private _renderMajor(): BulletinProps {
        const majorProps: BulletinProps = {
            class: "major",
            cover: false,
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/me_major.txt")}
                    type="file"
                />
            ),
            headerText: "ECE CS",
            img: ASSET_PATH.concat("img/cs_icon.png"),
        };
        return majorProps;
    }

    private _renderMusic(): BulletinProps {
        const musicProps: BulletinProps = {
            class: "music",
            cover: false,
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/me_music.txt")}
                    type="file"
                />
            ),
            headerText: "Music",
            img: ASSET_PATH.concat("img/music_icon.png"),
        };
        return musicProps;
    }

    private _renderReading(): BulletinProps {
        const readingProps: BulletinProps = {
            class: "reading",
            cover: false,
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/me_reading.txt")}
                    type="file"
                />
            ),
            headerText: "Reading",
            img: ASSET_PATH.concat("img/reading_icon.png"),
        };
        return readingProps;
    }

    private _renderArsenal(): BulletinProps {
        const arsenalProps: BulletinProps = {
            class: "arsenal",
            cover: false,
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/me_arsenal.txt")}
                    type="file"
                />
            ),
            headerText: "Arsenal",
            img: ASSET_PATH.concat("img/arsenal_icon.png"),
        };
        return arsenalProps;
    }

    private _renderNavlab(): BulletinProps {
        const remitlyProps: BulletinProps = {
            class: "navlab",
            cover: false,
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/me_navlab.txt")}
                    type="file"
                />
            ),
            headerText: "Navlab CMU",
            img: ASSET_PATH.concat("img/navlab_icon.png"),
        };
        return remitlyProps;
    }

    private _renderRemitly(): BulletinProps {
        const remitlyProps: BulletinProps = {
            class: "remitly",
            cover: false,
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/me_remitly.txt")}
                    type="file"
                />
            ),
            headerText: "Remitly",
            img: ASSET_PATH.concat("img/remitly_icon.png"),
        };
        return remitlyProps;
    }
}
