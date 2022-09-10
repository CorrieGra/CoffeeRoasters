import {
    IBaseProps,
} from '../react-app-env';

export type TTitleVariant = 't1' | 'alt' | 't2' | 't3' | 't4' | 'nav';

export interface ITitleProps extends IBaseProps  {
    variant?: TTitleVariant,
};

export interface IButtonProps extends IBaseProps {
    disabled?: boolean;
    onClick?: (args: any) => void;
}

export interface INavigationOption {
    name: string;
    link: string;
}