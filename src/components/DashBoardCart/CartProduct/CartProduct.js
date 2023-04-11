import styled from "styled-components"

export const StyledLi = styled.li`
    display: flex;
    flex: row;
    width: 300px;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
`

export const StyledDivImg = styled.div`
    width: 70px;
    height: 70px;
    background: #E0E0E0;
    border-radius: 5px;
`

export const StyledImg = styled.img`
    width: 70px;
    height: 70px;
`

export const StyledDivDescription = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .h2{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        padding-top: 0px;
        max-width: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .span{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #828282;
    }
`

export const StyledDivButton = styled.div`
    width: 51px;
    height: 70%;
`

export const StyledBtn = styled.button`
    display: flex;
    align-self: flex-start;
    width: 65px;
    height: 20px;
    border: 1px solid blue;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #BDBDBD;
    border: transparent;

`