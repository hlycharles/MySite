import autobind from "autobind-decorator";
import PropTypes from "prop-types";
import * as React from "react";

import AppUi from "./appUi";
import ModalView from "./modalView";

import "./app.scss";

interface AppState {
    modalView: React.ReactNode | null;
}

export default class App extends
                     React.Component<{}, AppState> {

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
                {
                    this.state.modalView &&
                    <ModalView view={this.state.modalView} />
                }
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
