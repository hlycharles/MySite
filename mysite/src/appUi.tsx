import autobind from "autobind-decorator";
import PropTypes from "prop-types";
import * as React from "react";

import MainScreen from "./screen/main";
import MeScreen from "./screen/me";
import ResumeScreen from "./screen/resume";

export enum Screen {
    MAIN,
    ME,
    RESUME,
}

interface AppUiState {
    screen: Screen;
}

export default class AppUi extends
                     React.Component<never, AppUiState> {

    static childContextTypes = {
        switchScreen: PropTypes.func.isRequired,
    };

    state = {
        screen: Screen.MAIN,
    };

    getChildContext() {
        return {
            switchScreen: this._switchScreen,
        };
    }

    render() {
        switch (this.state.screen) {
            case Screen.MAIN:
                return <MainScreen />;
            case Screen.ME:
                return <MeScreen />;
            case Screen.RESUME:
                return <ResumeScreen />;
            default:
                return <MainScreen />;
        }
    }

    @autobind
    private _switchScreen(screen: Screen) {
        this.setState({ screen });
    }
}
