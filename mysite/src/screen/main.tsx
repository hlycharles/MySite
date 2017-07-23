import autobind from "autobind-decorator";
import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Screen } from "../appUi";
import TextDetail from "../detailComponent/textDetail";
import VerticalLayoutDetail from "../detailComponent/verticalLayoutDetail";
import { BulletinProps } from "../screenComponent/bulletin";
import BulletinBoard from "../screenComponent/bulletinBoard";
import Navigator from "../screenComponent/navigator";
import Title from "../screenComponent/title";
import { ASSET_PATH } from "./data";
import { renderResume } from "./resume";

import "./style.scss";

interface MyWindow extends Window {
    processInsta(data: any): void;
}

declare var window: MyWindow;

interface InstaParams {
    url: string;
    locationName?: string;
}

interface MainScreenState {
    instaParams: Array<InstaParams>;
}

type Props = RouteComponentProps<any>;

const instaNum = 3;

export default class MainScreen extends
                     React.Component<Props, MainScreenState> {

    state: MainScreenState = {
        instaParams: [],
    };

    componentDidMount() {
        window.processInsta = (data: any) => {
            for (const d of data.data) {
                const imgUrl: string = d.images.standard_resolution.url;
                const instaParams: Array<InstaParams> = this.state.instaParams;
                instaParams.push({
                    locationName: d.location.name,
                    url: imgUrl,
                });
            }
            // update rendering
            this.forceUpdate();
        };
        const srcElement = document.createElement("script");
        const url = this._generateUrl();
        srcElement.setAttribute("src", url);
        document.body.appendChild(srcElement);
    }

    render() {
        return (
            <div>
                <div className="header-container">
                    <Title titles={["Luyao Hou"]} />
                    <Navigator screen={Screen.MAIN} />
                </div>
                <div className="content-container">
                    {this._renderPinBoard()}
                    {this._renderInstaBoard()}
                    {this._renderProjectBoard()}
                </div>
            </div>
        );
    }

    private _generateUrl() {
        const token = "247738439.638e650.fd3e68f07430460e95a04a22d583eead";
        const urlPrefix = "https://api.instagram.com/";
        const url = urlPrefix.concat("v1/users/self/media/recent?");
        const urlToken = url.concat("access_token=" + token);
        const urlCount = urlToken.concat("&count=" + instaNum);
        const urlCallback = urlCount.concat("&callback=processInsta");
        return urlCallback;
    }

    private _renderPinBoard(): React.ReactNode {
        const resumeProp: BulletinProps = {
            class: "resume",
            cover: false,
            detailedView: this._renderResume(),
            headerText: "Resume",
            img: ASSET_PATH.concat("img/resume_icon.png"),
        };
        const siteGithubProp: BulletinProps = {
            class: "site-github",
            clickAction: this._openGithub,
            cover: false,
            headerText: "Github",
            img: ASSET_PATH.concat("img/git_icon.png"),
        };
        return (
            <BulletinBoard
                title="PINNED"
                bulletinProps={[resumeProp, siteGithubProp]}
            />
        );
    }

    private _renderInstaBoard(): React.ReactNode {
        const instaProps: Array<BulletinProps> = this.state.instaParams.map(
            (param: InstaParams) => {
                const instaProp: BulletinProps = {
                    class: "insta",
                    cover: true,
                    detailedView: (
                        <VerticalLayoutDetail
                            img={param.url}
                            content={
                                param.locationName ||
                                "Location Not Provided"
                            }
                        />
                    ),
                    headerText: param.locationName,
                    img: param.url,
                };
                return instaProp;
            },
        );
        return (
            <BulletinBoard
                title="INSTAGRAM"
                bulletinProps={instaProps}
            />
        );
    }

    private _renderProjectBoard(): React.ReactNode {
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
        return (
            <BulletinBoard
                title="PINNED PROJECTS"
                bulletinProps={[
                    personalWebsiteProps,
                    reminderAppProps,
                    onlineCourseProps,
                ]}
            />
        );
    }

    private _renderResume() {
        const docPath = ASSET_PATH.concat("doc/resume.svg");
        return renderResume(docPath);
    }

    @autobind
    private _openGithub() {
        const url = "https://github.com/hlycharles";
        window.open(url, "_blank");
    }
}
