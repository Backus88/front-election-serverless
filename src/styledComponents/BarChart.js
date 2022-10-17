import styled from "styled-components";

export const VerticalBar = styled.div `
    height : ${(props)=> props.height}%;
    width : 30px;
    background-color:${(props)=> props.backColor} ;
`;

export const HorizontalBar = styled.div `
    height : ${(props)=> props.height}%;
    width : 30px;
    background-color:${(props)=> props.backColor} ;
`;