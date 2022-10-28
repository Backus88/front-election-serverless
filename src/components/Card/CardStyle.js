import styled from 'styled-components';

export const CardStyle = styled.div `
    width: 324px;
    height: 146px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    margin: 20px 0;
    border-radius: 10px;
    h1{
        align-self: center;
        font-size: 20px;
        font-family: 'Open Sans';
        color: black;
        margin: 0;
        padding-bottom: 10px;
    }
`;

export const RegressionCard = styled(CardStyle)`
    height: 100%;
`; 