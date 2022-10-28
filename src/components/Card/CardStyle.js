import styled from 'styled-components';

export const CardStyle = styled.div `
    width: 324px;
    height: 160px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    padding-bottom: 20px;
    margin-top: 30px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid black;
    position: relative;
    h1{
        align-self: flex-start;
        font-size: 20px;
        font-family: 'Open Sans';
        color: black;
        margin: 0;
        padding-bottom: 0px;
    }
`;

export const RegressionCard = styled(CardStyle)`
    height: 100%;
`; 