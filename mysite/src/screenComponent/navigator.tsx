import autobind from "autobind-decorator";
import PropTypes from "prop-types";
import * as React from "react";

import { Screen } from "../appUiBase";
import { ASSET_PATH } from "./data";

import "./navigator.scss";

interface PanelOption {
    label: string;
    img: boolean;
    screen?: Screen;
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

    private mediaPanel: Array<PanelOption>;
    private screenPanel: Array<PanelOption>;

    componentWillMount() {
        this.mediaPanel = [
            {
                action: this._gotoUrl("https://www.facebook.com/hlycharles"),
                img: true,
                label: ASSET_PATH.concat("img/facebook_icon.png"),
            },
            {
                action: this._gotoUrl("https://www.instagram.com/hlycharles/"),
                img: true,
                label: ASSET_PATH.concat("img/insta_icon.png"),
            },
            {
                action: this._gotoUrl("https://github.com/hlycharles"),
                img: true,
                label: ASSET_PATH.concat("img/github_icon.png"),
            },
        ];

        this.screenPanel = [
            {
                action: this._switchToScreen(Screen.MAIN),
                img: true,
                label: ASSET_PATH.concat("img/home_icon.png"),
                screen: Screen.MAIN,
            },
            {
                action: this._switchToScreen(Screen.ME),
                img: false,
                label: "Me",
                screen: Screen.ME,
            },
            {
                action: this._switchToScreen(Screen.PROJECT),
                img: false,
                label: "Project",
                screen: Screen.PROJECT,
            },
            {
                action: this._switchToScreen(Screen.RESUME),
                img: false,
                label: "Resume",
                screen: Screen.RESUME,
            },
        ];
    }

    render() {
        return (
            <div className="panel-container">
                {this._renderPanel(this.mediaPanel)}
                {this._renderPanel(this.screenPanel)}
            </div>
        );
    }

    private _renderPanel(panelOptions: Array<PanelOption>) {
        return (
            <ul className="nav">
                {
                    panelOptions.map((option: PanelOption) => (
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
        );
    }

    @autobind
    private _handleClick(action: () => void, screen?: Screen) {
        return () => {
            if (screen && screen === this.props.screen) {
                return;
            }
            action();
        };
    }

    @autobind
    private _switchToScreen(screen: Screen) {
        return () => this.context.switchScreen(screen);
    }

    @autobind
    private _gotoUrl(url: string) {
        return () => window.open(url, "_blank");
    }
}
