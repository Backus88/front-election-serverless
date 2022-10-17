import styled from "styled-components";

export const CandidateProfile = styled.div `
    width:30%;
    border-radius: 50%;
    background-image: url(${(props)=> props.profileImg});
    background-repeat: no-repeat ;
    background-size: contain;
    ::after{
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`;