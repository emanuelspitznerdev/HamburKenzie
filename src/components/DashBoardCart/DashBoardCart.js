import styled from "styled-components";

export const StyledDivCart = styled.div`
    width: 363px;
    height: 65px;
    background-color: #27AE60;
    border-radius: 5px 5px 0px 0px;
    display: flex;
    align-items: center;

    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #FFFFFF;
        padding-left: 21px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    padding-top: 10px;
`

export const StyledDivList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        padding-top: 25px;
    }

    span{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #828282;
    }
`

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 21px;
    padding: 20px;
`

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
`