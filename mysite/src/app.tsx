import autobind from "autobind-decorator";
import * as React from "react";
import { PropTypes } from "react";

import AppUi from "./appUi";

import "./app.scss";

interface AppState {
    modalView: React.ReactNode | null;
}

export default class App extends
                     React.Component<never, AppState> {

    static childContextTypes = {
        loadModalView: PropTypes.func.isRequired,
        unloadModalView: PropTypes.func.isRequired,
    };

    state = {
        modalView: null,
    };

    getChildContext() {
        return {
            loadModalView: this._loadModalView,
            unloadModalView: this._unloadModalView,
        };
    }

    render() {
        return (
            <div className="screen-container">
                <AppUi />
                {this.state.modalView}
            </div>
        );
    }

    @autobind
    private _loadModalView(modalView: React.ReactNode) {
        this.setState({ modalView });
    }

    @autobind
    private _unloadModalView() {
        this.setState({ modalView: null });
    }
}
