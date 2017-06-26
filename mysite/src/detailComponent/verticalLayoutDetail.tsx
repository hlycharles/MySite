import * as React from "react";

import "./verticalLayoutDetail.scss";

interface VerticalLayoutDetailProps {
    img?: string;
    content: string;
}

type Props = VerticalLayoutDetailProps;

export default class ModalView extends
                     React.Component<Props, never> {

    render() {
        return (
            <div className="detail-container">
                <div className="detail-img">
                    <img src="../../asset/img/canada.jpg" />
                </div>
                <div className="detail-content">
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
}
