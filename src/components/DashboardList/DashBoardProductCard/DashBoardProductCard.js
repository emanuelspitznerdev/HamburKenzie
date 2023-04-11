import styled from "styled-components";

export const StyledLi = styled.li`
    height: 346px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 280px;

    h2{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        padding-left: 15px;
        max-width: 140px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        padding-left: 15px;
    }

    p{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #27AE60;
        padding-left: 15px;
    }
    
    button{
        width: 106px;
        height: 40px;
        background: #27AE60;
        border: 2px solid #27AE60;
        border-radius: 8px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #FFFFFF;
        margin-left: 15px;
    }

    
`
export const StyledDivImg = styled.div`
    display: flex;
    width: 160px;
    justify-content: center;
`

export const StyledImg = styled.img`
    width: 160px;
    height: 160px;
`