import styled from 'styled-components';

export const CandidateProfile = styled.div `
    width:${(props)=> props.width}px;
    border-radius: 50%;
    background: url(${(props) => props.image || 'https://static.poder360.com.br/2019/01/foto-oficial-Bolsonaro.png' });
    background-repeat: no-repeat ;
    background-size: cover;
    ::after{
        content: "";
        display: block;
        padding-bottom: 100%;
    }
    margin: 0 5px;
`;