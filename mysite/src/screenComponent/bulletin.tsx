import autobind from "autobind-decorator";
import PropTypes from "prop-types";
import * as React from "react";

import "./bulletin.scss";

export interface BulletinProps {
    class: string;
    img?: string;
    detailedView?: React.ReactNode;
}

export default class Bulletin extends
                     React.Component<BulletinProps, never> {

    static contextTypes = {
        loadModalView: PropTypes.func.isRequired,
    };

    render() {
        const className = "bulletin ".concat(this.props.class);
        return (
            <div className={className} onClick={this._handleClick}>
                {this.props.img && <img src={this.props.img}/>}
            </div>
        );
    }

    @autobind
    private _handleClick() {
        if (this.props.detailedView) {
            this.context.loadModalView(this.props.detailedView);
        }
    }
}
