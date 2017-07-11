import autobind from "autobind-decorator";
import PropTypes from "prop-types";
import * as React from "react";

import { Screen } from "../appUi";
import { ASSET_PATH } from "./data";

import "./navigator.scss";

export enum PANEL {
    ME,
    BLOG,
    RESUME,
    PROJECT,
    CONTACT,
}

interface PanelOption {
    label: string;
    img: boolean;
    action: () => void;
}

interface NavigatorProps {
    panel: PANEL | null;
}

export default class Navigator extends
                     React.Component<NavigatorProps, never> {

    static contextTypes = {
        switchScreen: PropTypes.func.isRequired,
    };

    render() {
        const panels: Array<PanelOption> = [
            {
                action: this._switchToMain,
                img: true,
                label: ASSET_PATH.concat("img/home_icon.png"),
            },
            {
                action: this._switchToMe,
                img: false,
                label: "Me",
            },
            {
                action: this._switchToResume,
                img: false,
                label: "Resume",
            },
        ];
        return (
            <div className="panel-container">
                <ul className="nav">
                    {
                        panels.map((option: PanelOption) => (
                            <li key={option.label} onClick={option.action}>
                                {
                                    (option.img) ?
                                    <img src={option.label} /> :
                                    option.label
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }

    @autobind
    private _switchToMain() {
        this.context.switchScreen(Screen.MAIN);
    }

    @autobind
    private _switchToMe() {
        this.context.switchScreen(Screen.ME);
    }

    @autobind
    private _switchToResume() {
        this.context.switchScreen(Screen.RESUME);
    }
}
