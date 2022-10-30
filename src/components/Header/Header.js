import { HeaderStyle } from './HeaderStyle';
import {FaHome} from 'react-icons/fa';
import {React} from 'react';
import Title from './Title'; 
import { useNavigate } from 'react-router-dom';

export default function Header (){
	const navigate = useNavigate();

	return(
		<HeaderStyle>
			<Title/>
			<FaHome size={25} onClick ={()=> navigate('/')} cursor={'pointer'} />
		</HeaderStyle>
	);
}