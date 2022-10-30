import React from 'react'
import styled from 'styled-components'

export const TitleStyle = styled.h1`
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  text-align: ${(props) => {
    return props.updateTime ? 'left' : 'center'
  }};
`
