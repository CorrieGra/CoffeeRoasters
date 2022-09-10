import styled from "styled-components";


const SButton = styled.button`
    cursor: pointer;
    padding: 1.5rem 8rem;
    font-family: 'Fraunces', sans-serif;
    font-size: 1.8rem;
    border: none;
    text-transform: Capitalize;
    transition: all .25s ease-out;
    background-color: #0E8784;
    color: #FEFCF7;

    &:hover {
        background-color: #66D2CF;
    }
    
    &::disabled {
        background-color: #979797;
        color: #83888F;
    }
`;

export {
    SButton,
};