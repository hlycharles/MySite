import autobind from "autobind-decorator";
import * as React from "react";

import Bulletin, { BulletinProps } from "./bulletin";
import Header from "./header";

import "./bulletinBoard.scss";

interface BulletinBoardProps {
    title?: string;
    bulletinProps: Array<BulletinProps>;
}

interface BulletinBoardState {
    groupSize: number;
}

export default class BulletinBoard extends
                     React.Component<BulletinBoardProps, BulletinBoardState> {

    state = {
        groupSize: 3,
    };

    componentWillMount() {
        this._calculateGroupSize();
    }

    componentDidMount() {
        window.addEventListener("resize", this._calculateGroupSize);
    }

    render() {
        return (
            <div>
                {this.props.title && <Header title={this.props.title} theme="gray" />}
                {this._renderBulletins()}
            </div>
        );
    }

    private _renderBulletins(): Array<React.ReactNode> {
        const containers: Array<React.ReactNode> = [];
        for (
            let i = 0;
            i < this.props.bulletinProps.length;
            i += this.state.groupSize
        ) {
            const bulletins: Array<React.ReactNode> = [];
            for (
                let j = i;
                j < i + this.state.groupSize &&
                j < this.props.bulletinProps.length;
                j++
            ) {
                const bulletinProps = this.props.bulletinProps[j];
                bulletins.push(
                    <Bulletin
                        class={bulletinProps.class}
                        clickAction={bulletinProps.clickAction}
                        img={bulletinProps.img}
                        detailedView={bulletinProps.detailedView}
                        cover={bulletinProps.cover}
                        headerText={bulletinProps.headerText}
                        key={j}
                    />,
                );
            }
            containers.push(
                <div className="bulletin-container" key={i}>
                    {bulletins}
                </div>,
            );
        }
        return containers;
    }

    @autobind
    private _calculateGroupSize() {
        if (window.innerWidth > 900) {
            this.setState({ groupSize: 3 });
        } else if (window.innerWidth > 550 && window.innerWidth <= 900) {
            this.setState({ groupSize: 2 });
        } else if (window.innerWidth <= 550) {
            this.setState({ groupSize: 1 });
        }
    }
}
