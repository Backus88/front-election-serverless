import styled from 'styled-components';
import {React} from 'react';
import { TitleStyle } from './Header/TitleStyle';


export default function Title(){
	return(
		<MainTitle>
            Home
		</MainTitle>
	);
}

const MainTitle = styled(TitleStyle)`
    font-size: 26px;
    color: #ffffff;
`;