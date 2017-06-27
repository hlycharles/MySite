import * as React from "react";

import "./horizontalLayoutDetail.scss";

interface HorizontalLayoutDetailProps {
    img?: string;
    content: string;
}

type Props = HorizontalLayoutDetailProps;

export default class ModalView extends
                     React.Component<Props, never> {

    render() {
        return (
            <div className="detail-horizontal">
                <div className="detail-img">
                    <img src="../../asset/img/canada.jpg" />
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
