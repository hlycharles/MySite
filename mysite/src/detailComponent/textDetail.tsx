import * as React from "react";

import "./textDetail.scss";

interface TextDetailProps {
    type: "text" | "file";
    content: string;
}

interface TextDetailState {
    content: string;
}

export default class TextDetail extends
                     React.Component<TextDetailProps, TextDetailState> {

    state = {
        content: (this.props.type === "text") ? this.props.content : "",
    };

    componentWillMount() {
        if (this.props.type === "file") {
            const file = new XMLHttpRequest();
            file.open("GET", this.props.content, true);
            file.onreadystatechange = () => {
                if (file.readyState === 4) {
                    if (file.status === 200 || file.status === 0) {
                        this.setState({ content: file.responseText });
                    }
                }
            };
            file.send(null);
        }
    }

    render() {
        return (
            <div className="text-vertical">
                <p className="content-wrapper">
                    {this.state.content}
                </p>
            </div>
        );
    }
}
