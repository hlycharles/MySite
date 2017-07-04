import autobind from "autobind-decorator";
import PropTypes from "prop-types";
import * as React from "react";

import Header from "./header";

import "./bulletin.scss";

export interface BulletinProps {
    class: string;
    img?: string;
    detailedView?: React.ReactNode;
    cover: boolean;
    headerText?: string;
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
                {
                    this.props.headerText &&
                    <div className="bulletin-header">
                        <Header title={this.props.headerText} theme="light" />
                    </div>
                }
                {
                    this.props.img &&
                    <img
                        src={this.props.img}
                        className={this.props.cover ? "cover" : "margin"}
                    />
                }
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
