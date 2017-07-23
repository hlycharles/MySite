import autobind from "autobind-decorator";
import PropTypes from "prop-types";
import * as React from "react";

import { Screen } from "../appUi";
import { ASSET_PATH } from "./data";

import "./navigator.scss";

interface PanelOption {
    label: string;
    img: boolean;
    screen: Screen;
    action: () => void;
}

interface NavigatorProps {
    screen: Screen;
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
                screen: Screen.MAIN,
            },
            {
                action: this._switchToMe,
                img: false,
                label: "Me",
                screen: Screen.ME,
            },
            {
                action: this._switchToProject,
                img: false,
                label: "Project",
                screen: Screen.PROJECT,
            },
            {
                action: this._switchToResume,
                img: false,
                label: "Resume",
                screen: Screen.RESUME,
            },
        ];
        return (
            <div className="panel-container">
                <ul className="nav">
                    {
                        panels.map((option: PanelOption) => (
                            <li
                                key={option.label}
                                onClick={
                                    this._handleClick(
                                        option.action,
                                        option.screen,
                                    )}
                            >
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
    private _handleClick(action: () => void, screen: Screen) {
        return () => {
            if (screen === this.props.screen) {
                return;
            }
            action();
        };
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
    private _switchToProject() {
        this.context.switchScreen(Screen.PROJECT);
    }

    @autobind
    private _switchToResume() {
        this.context.switchScreen(Screen.RESUME);
    }
}
