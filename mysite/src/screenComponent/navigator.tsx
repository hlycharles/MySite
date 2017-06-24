import * as React from "react";

export enum PANEL {
    ME,
    BLOG,
    RESUME,
    PROJECT,
    CONTACT,
}

interface NavigatorProps {
    panel: PANEL | null;
}

export default class Navigator extends
                     React.Component<NavigatorProps, never> {

    render() {
        return (
            <div className="panel-container">
                <h4>ME</h4>
            </div>
        );
    }
}
