import autobind from "autobind-decorator";
import * as React from "react";
import { PropTypes } from "react";

import { Screen } from "../appUi";

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
                action: this._switchToMe,
                label: "Me",
            },
            {
                action: this._switchToMain,
                label: "Resume",
            },
        ];
        return (
            <div className="panel-container">
                <ul className="nav">
                    {
                        panels.map((option: PanelOption) => (
                            <li key={option.label} onClick={option.action}>
                                {option.label}
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
}
