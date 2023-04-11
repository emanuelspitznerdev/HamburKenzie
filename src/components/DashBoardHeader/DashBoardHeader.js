import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 139px;
    justify-content: center;
    align-items: center;
    gap: 14px;

    @media(min-width: 769px){
        flex-direction: row;
        justify-content: space-between;
        max-width: 95%;
    }
`

export const StyledImage = styled.img`
    width: 159px;
    height: 37px;
`

export const StyledInputForm = styled.form`
    display: flex;
    width: 300px;
    height: 60px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
`

export const StyledInput = styled.input`
    width: 160px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid #E0E0E0;
    padding-left: 15px;
`

export const StyledBtn = styled.button`
    width: 107px;
    height: 40px;
    background-color: #27AE60;
    border: 2px solid #27AE60;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;

`