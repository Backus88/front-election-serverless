import { HorizontalBarLula, DivBarChart, HorizontalBarBolso } from './BarChart';
import {  RowDiv, CardHeader, CardFooter, ColumnDiv } from '../Containers';
import { CardStyle } from './CardStyle';
import { CandidateProfile } from './CandidateProfile';
import {React} from 'react';



export default function CardPrediction({
	title, 
	lulaPercent, 
	bolsonaroPercent,
	percentVoted, 
	countedVotes,
	updatedTime}){
	
	const time = updatedTime?.slice(11,16)
	console.log(updatedTime)

	return(
		<CardStyle>
			<CardHeader>
				<h1>{title}</h1>
				{percentVoted?
					<h2>Votos Apurados:<b> {percentVoted*100}%</b> </h2>
				:
					<h2>Votos Apurados: 30%</h2>
				}
			</CardHeader>
			<ColumnDiv>
				{countedVotes?
					<h3>Quantidade de Votos Apurados:<b> {countedVotes}</b> </h3>
				:
					<h3>Quantidade de Votos Apurados: xxx.xxx</h3>
				}
				{lulaPercent&&bolsonaroPercent&&countedVotes?
					<>
						<h3>Lula: <b>{(lulaPercent*countedVotes)/percentVoted} votos previstos</b></h3>
						<h3>Bolsonaro: <b>{(bolsonaroPercent*countedVotes/percentVoted)} votos previstos</b></h3>
					</>

				:
					<>
						<h3>Lula: <b>xxx.xxx votos previstos</b></h3>
						<h3>Bolsonaro: <b>xxx.xxx votos previstos</b></h3>
					</>
				}
				{updatedTime?
					<h3>Última atualição: <b>{time} </b> </h3>
				:
					<h3>Última atualição: <b>00:00 </b> </h3>
				}
			</ColumnDiv>
			<CardFooter>
				<RowDiv>
					<CandidateProfile  width = {30} image = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYqnT5mVWes2tdBm5hlBMrPQj8-aT3YLjfJi-oudD&s'}/>
					<DivBarChart>
						{lulaPercent?
							<HorizontalBarLula width = {lulaPercent*190} height ={30} backColor = {'#BB061C'} >
								<h4>{lulaPercent*100}%</h4>
							</HorizontalBarLula>
						:
							<HorizontalBarLula width = {90} height ={30} backColor = {'#BB061C'} >
								<h4>49%</h4>
							</HorizontalBarLula>
						}
						{bolsonaroPercent?
							<HorizontalBarBolso width = {bolsonaroPercent*190} height ={30} backColor = {'#3824DF'} >
								<h4>{bolsonaroPercent*100}%</h4>
							</HorizontalBarBolso>
						:
							<HorizontalBarBolso width = {100} height ={30} backColor = {'#3824DF'} >
								<h4>51%</h4>
							</HorizontalBarBolso>
						}
					</DivBarChart>
					<CandidateProfile  width = {30} image = {'https://static.poder360.com.br/2019/01/foto-oficial-Bolsonaro.png'}/>
				</RowDiv>
			</CardFooter> 
		</CardStyle>
	);
}