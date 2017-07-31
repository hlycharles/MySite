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
    clickAction?(): void;
}

export default class Bulletin extends
                     React.Component<BulletinProps, never> {

    static contextTypes = {
        loadModalView: PropTypes.func.isRequired,
    };

    render() {
        let className = `bulletin ${this.props.class}`;
        if (this.props.detailedView || this.props.clickAction) {
            className = `${className}  clickable`;
        }
        if (this.props.img && this.props.cover) {
            className = `${className} fade-in`;
        }
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
        if (this.props.clickAction) {
            this.props.clickAction();
        }
        if (this.props.detailedView) {
            this.context.loadModalView(this.props.detailedView);
        }
    }
}
