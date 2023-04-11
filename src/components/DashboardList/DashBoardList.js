import styled from "styled-components";

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-y: scroll;
    gap: 25px;
    padding-left: 16px;
    width: 100vw;

    @media(min-width: 769px){
        flex-wrap: wrap;
        justify-content: space-around;

    }
`