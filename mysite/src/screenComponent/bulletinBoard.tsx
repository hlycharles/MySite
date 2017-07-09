import * as React from "react";

import Bulletin, { BulletinProps } from "./bulletin";
import Header from "./header";

import "./bulletinBoard.scss";

interface BulletinBoardProps {
    title?: string;
    bulletinProps: Array<BulletinProps>;
}

const groupSize = 3;

export default function BulletinBoard(props: BulletinBoardProps) {

    const containers: Array<React.ReactNode> = [];
    for (let i = 0; i < props.bulletinProps.length; i += groupSize) {
        const bulletins: Array<React.ReactNode> = [];
        for (let j = i; j < i + groupSize && j < props.bulletinProps.length; j++) {
            const bulletinProps = props.bulletinProps[j];
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

    return (
        <div>
            {props.title && <Header title={props.title} theme="gray" />}
            {containers}
        </div>
    );
}
