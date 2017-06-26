import autobind from "autobind-decorator";
import * as React from "react";
import { PropTypes } from "react";

import "./modalView.scss";

interface ModalViewProps {
    view: React.ReactNode;
}

export default class ModalView extends
                     React.Component<ModalViewProps, never> {

    static contextTypes = {
        unloadModalView: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className="modal-boundary">
                <div className="modal-container">
                    <div className="modal-button" onClick={this._handleClick} />
                    <div className="modal-content">
                        {this.props.view}
                    </div>
                </div>
            </div>
        );
    }

    @autobind
    private _handleClick() {
        this.context.unloadModalView();
    }
}
