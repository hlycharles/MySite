import * as React from "react";

import { readFile } from "../lib/file";
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
            readFile(
                this.props.content,
                (content: string) => this.setState({ content }),
            );
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
