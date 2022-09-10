import { FC } from 'react';

import { IButtonProps } from '@appTypes/react-app-components';

import { SButton as ButtonComponent } from './button-styles';

export const Button: FC<IButtonProps> = ({ children = undefined, styles = undefined, ...rest }) => {
    return (
        <ButtonComponent style={ styles } { ...rest }>{ children }</ButtonComponent>
    );
};