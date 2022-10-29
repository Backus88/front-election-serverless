import styled from 'styled-components';

export const CardStyle = styled.div `
    width: 290px;
    height: 190px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px; */
    padding-bottom: 0px;
    margin-top: 25px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid lightgray;
    position: relative;
    h1{
        font-size: 17px;
        font-family: 'Open Sans';
        color: black;
        margin: 0;
        padding-bottom: 0px;
    }
`;

export const RegressionCard = styled(CardStyle)`
    height: 100%;
`; 

