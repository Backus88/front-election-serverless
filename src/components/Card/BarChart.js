import styled from 'styled-components';

export const VerticalBar = styled.div `
    height : ${(props)=> props.height}px;
    width : 30px;
    background-color:${(props)=> props.backColor} ;
    margin-left: 5px;
    border-radius: 5px;
`;

export const HorizontalBar = styled.div `
    height : 30px;
    width : ${(props)=> props.width}px;
    background-color:${(props)=> props.backColor} ;
    border-radius: 5px;
`;

export const DivBarChart = styled.div `
    height: 30px;
    width: 70%;
    display: flex;
    flex-direction: row;
`;