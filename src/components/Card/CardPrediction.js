import { HorizontalBar, DivBarChart } from './BarChart';
import {  RowDiv } from '../Containers';
import { CardStyle } from './CardStyle';
import { CandidateProfile } from './CandidateProfile';
import {React} from 'react';


export default function CardPrediction({title}){

	return(
		<CardStyle>
			<h1>{title}</h1>
			<RowDiv>
				<CandidateProfile  width = {30} image = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYqnT5mVWes2tdBm5hlBMrPQj8-aT3YLjfJi-oudD&s'}/>
				<DivBarChart>
					<HorizontalBar width = {120} height ={30} backColor = {'red'} />
					<HorizontalBar width = {125} height ={30} backColor = {'blue'} />
				</DivBarChart>
				<CandidateProfile  width = {30} image = {'https://static.poder360.com.br/2019/01/foto-oficial-Bolsonaro.png'}/>
			</RowDiv> 
		</CardStyle>
	);
}