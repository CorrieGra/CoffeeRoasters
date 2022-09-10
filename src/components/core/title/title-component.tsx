import { FC } from "react";


import * as sTitles from "@components/core/title/title-styles";
import { ITitleProps } from "@appTypes/react-app-components";
import { IBaseProps } from "src/react-app-env";

export const Title: FC<ITitleProps> = ({ children = undefined, styles = undefined, variant = 't1' }) => {
    const StyledTitle: FC<IBaseProps> = sTitles[variant];

    return (
        <StyledTitle styles={ styles }>{ children }</StyledTitle>
    );
};