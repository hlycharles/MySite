import * as React from "react";

import TextDetail from "../detailComponent/textDetail";
import { BulletinProps } from "../screenComponent/bulletin";
import BulletinBoard from "../screenComponent/bulletinBoard";
import { ASSET_PATH } from "./data";

export default class ProjectScreen extends
                     React.Component<{}, never> {

    render() {
        return (
            <div className="content-container">
                {this._renderOrganization()}
                {this._renderWeb()}
                {this._renderNative()}
                {this._renderDesktop()}
            </div>
        );
    }

    private _renderOrganization(): React.ReactNode {
        return (
            <BulletinBoard
                title="Organization"
                bulletinProps={[
                    this._renderNavlab(),
                    this._renderRemitly(),
                ]}
            />
        );
    }

    private _renderWeb(): React.ReactNode {
        return (
            <BulletinBoard
                title="Web"
                bulletinProps={[
                    this._renderPersonalWebsite(),
                    this._renderOnlineCourse(),
                ]}
            />
        );
    }

    private _renderNative(): React.ReactNode {
        return (
            <BulletinBoard
                title="Native"
                bulletinProps={[
                    this._renderReminderApp(),
                    this._renderCalRevision(),
                ]}
            />
        );
    }

    private _renderDesktop(): React.ReactNode {
        return (
            <BulletinBoard
                title="Desktop"
                bulletinProps={[
                    this._renderPythonTP(),
                ]}
            />
        );
    }

    // bulletin renderers

    private _renderNavlab(): BulletinProps {
        const cmuProps: BulletinProps = {
            class: "navlab",
            cover: false,
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/project_navlab.txt")}
                    type="file"
                />
            ),
            headerText: "Navlab CMU",
            img: ASSET_PATH.concat("img/navlab_icon.png"),
        };
        return cmuProps;
    }

    private _renderRemitly(): BulletinProps {
        const remitlyProps: BulletinProps = {
            class: "remitly",
            cover: false,
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/project_remitly.txt")}
                    type="file"
                />
            ),
            headerText: "Remitly",
            img: ASSET_PATH.concat("img/remitly_icon.png"),
        };
        return remitlyProps;
    }

    private _renderPersonalWebsite(): BulletinProps {
        const personalWebsiteProps: BulletinProps = {
            class: "personal-website",
            cover: false,
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/project_personal_website.txt")}
                    type="file"
                />
            ),
            headerText: "Personal Website",
            img: ASSET_PATH.concat("img/personal_website_icon.png"),
        };
        return personalWebsiteProps;
    }

    private _renderOnlineCourse(): BulletinProps {
        const onlineCourseProps: BulletinProps = {
            class: "online-course",
            cover: false,
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/project_online_course.txt")}
                    type="file"
                />
            ),
            headerText: "Online CS Tutorial",
            img: ASSET_PATH.concat("img/online_course_icon.png"),
        };
        return onlineCourseProps;
    }

    private _renderReminderApp(): BulletinProps {
        const reminderAppProps: BulletinProps = {
            class: "ios-reminder",
            cover: false,
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/project_ios_reminder.txt")}
                    type="file"
                />
            ),
            headerText: "iOS Reminder App",
            img: ASSET_PATH.concat("img/ios_reminder_icon.png"),
        };
        return reminderAppProps;
    }

    private _renderCalRevision(): BulletinProps {
        const calRevisionProps: BulletinProps = {
            class: "cal-revision",
            cover: false,
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/project_cal_revision.txt")}
                    type="file"
                />
            ),
            headerText: "A-Level Revision App",
            img: ASSET_PATH.concat("img/cal_revision_icon.png"),
        };
        return calRevisionProps;
    }

    private _renderPythonTP(): BulletinProps {
        const pythonTPProps: BulletinProps = {
            class: "python-tp",
            cover: false,
            detailedView: (
                <TextDetail
                    content={ASSET_PATH.concat("doc/project_python_tp.txt")}
                    type="file"
                />
            ),
            headerText: "Python Term Project",
            img: ASSET_PATH.concat("img/python_tp_icon.png"),
        };
        return pythonTPProps;
    }
}
