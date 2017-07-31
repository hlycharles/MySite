import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Screen } from "./appUiBase";
import MainScreen from "./screen/main";
import MeScreen from "./screen/me";
import ProjectScreen from "./screen/project";
import ResumeScreen from "./screen/resume";
import Navigator from "./screenComponent/navigator";
import Title from "./screenComponent/title";

export default function AppUi(props: RouteComponentProps<any>) {

    function renderComponent(
        component: React.ReactNode,
        titles: Array<string>,
        screen: Screen,
    ) {
        return (
            <div>
                <div className="header-container">
                    <Title titles={titles} />
                    <Navigator screen={screen} />
                </div>
                {component}
            </div>
        );
    }

    // render
    const currentScreen: string = props.match.params.screen || "";
    switch (currentScreen) {
        case Screen.MAIN:
            return renderComponent(<MainScreen />, ["Luyao Hou"], Screen.MAIN);
        case Screen.ME:
            return renderComponent(<MeScreen />, ["Me"], Screen.ME);
        case Screen.PROJECT:
            return renderComponent(
                <ProjectScreen />,
                ["Projects"],
                Screen.PROJECT,
            );
        case Screen.RESUME:
            return renderComponent(
                <ResumeScreen />,
                ["Resume"],
                Screen.RESUME,
            );
        default:
            return null;
    }
}
