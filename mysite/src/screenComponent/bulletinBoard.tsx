import * as React from "react";

import BoardHeader from "./boardHeader";
import Bulletin, { BulletinProps } from "./bulletin";

import "./bulletinBoard.scss";

interface BulletinBoardProps {
    title: string;
    bulletinProps: Array<BulletinProps>;
}

export default function BulletinBoard(props: BulletinBoardProps) {

    return (
        <div>
            <BoardHeader title={props.title} />
            <div className="bulletin-container">
                {props.bulletinProps.map(
                    (value: BulletinProps, index: number) => {
                        return (
                            <Bulletin
                                class={value.class}
                                img={value.img}
                                detailedView={value.detailedView}
                                key={index}
                            />
                        );
                    },
                )}
            </div>
        </div>
    );
}
