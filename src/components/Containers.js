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
`;

export const ColumnDiv = styled.div`
    display: flex;
    height: 110px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 15px;
    h3{
        font-size: 12px;
        font-family: 'Open Sans';
        font-weight: 400;
        color: grey;
        padding: 0;
        margin:0 ;
        margin-bottom: 3px;
    }
`;

export const CarouselContainer = styled.div`
    height: 85%;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    margin-top: 10px;
`;
export const RegressionContainer = styled(MainContainer) `
    background-color: #FFFFFF;
    margin-left: 10px;
`;

export const CardHeader = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 0.5px solid lightgray;
    padding: 0px;
    display: flex;
    justify-content: flex-start;
    padding: 0 15px;
    align-items: center;
    h2{
        font-size: 15px;
        font-family: 'Open Sans';
        font-weight: 400;
        color: grey;
        margin: 0;
        margin-left: 30px;
        padding-bottom: 0px;
    }
`;

export const CardFooter = styled.div`
    width: 100%;
    height: 40px;
    border-top: 0.5px solid lightgrey;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

