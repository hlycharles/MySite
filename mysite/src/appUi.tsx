import autobind from "autobind-decorator";
import * as H from "history";
import { createBrowserHistory } from "history";
import PropTypes from "prop-types";
import * as React from "react";
import { Route, Router, Switch } from "react-router";

import MainScreen from "./screen/main";
import MeScreen from "./screen/me";
import ResumeScreen from "./screen/resume";

export enum Screen {
    MAIN,
    ME,
    RESUME,
}

export default class AppUi extends
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
        this.history = createBrowserHistory({
            basename: "",
            forceRefresh: false,
            keyLength: 6,
        });
    }

    render() {
        return (
            <Router history={this.history}>
                <Switch>
                    <Route exact path="/" component={MainScreen} />
                    <Route exact path="/me" component={MeScreen} />
                    <Route exact path="/resume" component={ResumeScreen} />
                </Switch>
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
            case Screen.RESUME:
                url = "/resume";
                break;
            default:
                url = "/";
        }
        this.history.push(url);
    }
}
