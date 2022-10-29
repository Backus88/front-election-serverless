import styled from 'styled-components';

export const MainContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #EFEFEF;
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
    padding-left: 0;
    margin-left: 0;
    margin-bottom: 20px;
`;

export const ColumnDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 10px;
    h3{
        font-size: 14px;
        font-family: 'Robot', serif;
        color: #000000;
        padding: 0;
        margin: 0;
    }
`;

export const CarouselContainer = styled.div`
    height: 70%;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;
export const RegressionContainer = styled(MainContainer) `
    background-color: #FFFFFF;
    margin-left: 10px;
`;