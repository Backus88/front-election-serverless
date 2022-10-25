import {React} from 'react';
import Card from '../components/Card/Card';
import { MainContainer } from '../components/Containers';
import Header from '../components/Header/Header';
import Title from '../components/Title';

export default function Home (){
	return(
		<>
			<Header/>
			<MainContainer>
				<Title/>
				<Card title={'Prediction 1'}/>
				<Card title={'Prediction 2'}/>
				<Card title={'Parcial'}/>
			</MainContainer>

		</>
	);
}