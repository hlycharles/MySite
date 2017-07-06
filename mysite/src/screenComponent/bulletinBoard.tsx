import * as React from "react";

import Bulletin, { BulletinProps } from "./bulletin";
import Header from "./header";

import "./bulletinBoard.scss";

interface BulletinBoardProps {
    title?: string;
    bulletinProps: Array<BulletinProps>;
}

export default function BulletinBoard(props: BulletinBoardProps) {

    return (
        <div>
            {props.title && <Header title={props.title} theme="gray" />}
            <div className="bulletin-container">
                {props.bulletinProps.map(
                    (value: BulletinProps, index: number) => {
                        return (
                            <Bulletin
                                class={value.class}
                                clickAction={value.clickAction}
                                img={value.img}
                                detailedView={value.detailedView}
                                cover={value.cover}
                                headerText={value.headerText}
                                key={index}
                            />
                        );
                    },
                )}
            </div>
        </div>
    );
}
