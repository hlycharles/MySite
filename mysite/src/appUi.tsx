import autobind from "autobind-decorator";
import * as React from "react";
import { PropTypes } from "react";

import MainScreen from "./screen/main";
import MeScreen from "./screen/me";

export enum Screen {
    MAIN,
    ME,
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
            default:
                return <MainScreen />;
        }
    }

    @autobind
    private _switchScreen(screen: Screen) {
        this.setState({ screen });
    }
}
