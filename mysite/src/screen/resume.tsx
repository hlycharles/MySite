import * as React from "react";

import { ASSET_PATH } from "./data";

export function renderResume(path: string, backPath?: string) {

    function openInNewTab() {
        const filePath = (backPath) ? backPath : path;
        window.open(filePath);
    }

    return (
        <div className="resume-container">
            <object type="image/svg+xml" data={path}>
                <button type="button" onClick={openInNewTab}>
                    Click to view resume
                </button>
            </object>
        </div>
    );
}

export default function ResumeScreen() {

    const docPath = ASSET_PATH.concat("doc/resume.svg");
    return renderResume(docPath);
}
