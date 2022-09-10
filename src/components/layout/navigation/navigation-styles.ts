import styled from "styled-components";

const NavigationContainer = styled.nav`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 4.3rem 8rem;
    justify-items: flex-end;
    align-items: center;

    & > :first-child { justify-self: flex-start; }
`;

const NavigationLogoContainer = styled.div``;

const NavigationLogo = styled.img``;

const NavigationMenu = styled.ul`
    list-style: none;
`;

const NavigationMenuItem = styled.li`
    display: inline-block;
    &:not(last-child) { margin-right:  3.3rem; }

    > a {
        font-family: 'Barlow', sans-serif;
        font-weight: bold;
        text-decoration: none;
        color: #83888F;
        text-transform: Capitalize;
    }
`;

export {
    NavigationContainer,
    NavigationLogoContainer,
    NavigationLogo,
    NavigationMenu,
    NavigationMenuItem,
};