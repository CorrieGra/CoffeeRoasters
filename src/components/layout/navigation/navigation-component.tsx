import { default as logo } from '@assets/logos/logo.svg';

import {
    NavigationContainer,
    NavigationLogoContainer,
    NavigationLogo,
    NavigationMenu,
    NavigationMenuItem
} from './navigation-styles';

export const Navigation = () => {
    return (
        <NavigationContainer>
            <NavigationLogoContainer>
                <NavigationLogo src={ logo } alt="coffeeroasters logo" />
            </NavigationLogoContainer>

            <NavigationMenu>
                <NavigationMenuItem>
                    <a href="#">home</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="#">about us</a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="#">create your order</a>
                </NavigationMenuItem>
            </NavigationMenu>
        </NavigationContainer>
    );
};