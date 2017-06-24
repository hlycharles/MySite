import * as React from "react";

import MainScreen from "./screen/main";

enum Screen {
    MAIN,
    ME,
}

interface AppUiState {
    screen: Screen;
}

export default class AppUi extends
                     React.Component<never, AppUiState> {

    state = {
        screen: Screen.MAIN,
    };

    render() {
        return <MainScreen />;
    }
}
