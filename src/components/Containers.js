import styled from 'styled-components';

export const MainContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #0FBFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
        font-family: 'Playfair Display', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;
        color: #5B84B9;
        margin-bottom: 30px;
    }
    h2{
        font-family: 'Robot', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 50px;
        color: #5B84B9;
    }
`;

export const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    margin-bottom: 20px;
`;

export const ColumnDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const CarouselContainer = styled.div`
    height: 70%;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;