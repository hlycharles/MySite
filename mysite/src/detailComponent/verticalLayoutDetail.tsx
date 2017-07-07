import * as React from "react";

import "./verticalLayoutDetail.scss";

interface VerticalLayoutDetailProps {
    img?: string;
    content: string;
}

type Props = VerticalLayoutDetailProps;

export default class VerticalLayoutDetail extends
                     React.Component<Props, never> {

    render() {
        return (
            <div className="detail-vertical">
                <div className="detail-img">
                    <img src={this.props.img} />
                </div>
                <div className="detail-content">
                    <p className="content-wrapper">
                        {this.props.content}
                    </p>
                </div>
            </div>
        );
    }
}
