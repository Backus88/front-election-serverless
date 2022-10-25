import { HeaderStyle } from './HeaderStyle';
import {FaHome} from 'react-icons/fa';
import {React} from 'react';
import Title from './Title';

export default function Header (){
	return(
		<HeaderStyle>
			<Title/>
			<FaHome size={25}/>
		</HeaderStyle>
	);
}