import autobind from "autobind-decorator";
import * as H from "history";
import { createBrowserHistory, createHashHistory } from "history";
import PropTypes from "prop-types";
import * as React from "react";
import { Route, Router } from "react-router";

import AppUi from "./appUi";

import "./style.scss";

export const Screen = {
    MAIN: "",
    ME: "me",
    PROJECT: "project",
    RESUME: "resume",
};
export type Screen = typeof Screen[keyof typeof Screen];

export default class AppUiBase extends
                     React.Component<{}, never> {

    static contextTypes = {
        router: PropTypes.object,
    };

    static childContextTypes = {
        switchScreen: PropTypes.func.isRequired,
    };

    private history: H.History;

    getChildContext() {
        return {
            switchScreen: this._switchScreen,
        };
    }

    componentWillMount() {
        if (window.history && window.history.pushState) {
            this.history = createBrowserHistory({
                basename: "/",
                forceRefresh: false,
            });
        } else {
            this.history = createHashHistory({
                basename: "/",
                hashType: "slash",
            });
        }
    }

    render() {
        return (
            <Router history={this.history}>
                <Route path="/:screen?" component={AppUi} />
            </Router>
        );
    }

    @autobind
    private _switchScreen(screen: Screen) {
        let url: string;
        switch (screen) {
            case Screen.MAIN:
                url = "/";
                break;
            case Screen.ME:
                url = "/me";
                break;
            case Screen.PROJECT:
                url = "/project";
                break;
            case Screen.RESUME:
                url = "/resume";
                break;
            default:
                url = "/";
        }
        this.history.push(url);
    }
}
