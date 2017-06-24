import * as React from "react";

import BoardHeader from "./boardHeader";
import Bulletin, { BulletinProps } from "./bulletin";

interface BulletinBoardProps {
    title: string;
    bulletinProps: Array<BulletinProps>;
}

export default function BulletinBoard(props: BulletinBoardProps) {

    return (
        <div>
            <BoardHeader title={props.title} />
            {props.bulletinProps.map(
                (value: BulletinProps, index: number) => {
                    return (
                        <Bulletin
                            color={value.color}
                            img={value.img}
                        />
                    );
                },
            )}
        </div>
    );
}
