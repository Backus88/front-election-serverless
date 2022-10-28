import { HorizontalBar } from './BarChart';
import {  RowDiv, ColumnDiv } from '../Containers';
import { CardStyle } from './CardStyle';
import { CandidateProfile } from './CandidateProfile';
import {React} from 'react';
import { useNavigate } from 'react-router-dom';
import {IoOpenOutline} from "react-icons/io5";
import styled from 'styled-components';


export default function CardHome({title, type}){
	const navigate = useNavigate();

	return(
		<CardStyle role={'button'} onClick={()=> navigate(`/${type}`)}>
			<Icon size={20} />
			<h1>{title}</h1>
			<RowDiv>
				<CandidateProfile  width = {30} image = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYqnT5mVWes2tdBm5hlBMrPQj8-aT3YLjfJi-oudD&s'}/>
				<ColumnDiv>
					<h3>
						Nome:
					</h3>
					<h3>
						Votos%:
					</h3>
					<HorizontalBar width ={240} height={10} backColor={'#E7E6E6'}>
						<HorizontalBar width = {110	} height={10} backColor = {'red'} />
					</HorizontalBar>
				</ColumnDiv>
			</RowDiv> 
			<RowDiv>
				<CandidateProfile  width = {30} image = {'https://static.poder360.com.br/2019/01/foto-oficial-Bolsonaro.png'}/>
				<ColumnDiv>
					<h3>
						Nome:
					</h3>
					<h3>
						Votos%:
					</h3>
					<HorizontalBar width ={240} height={10} backColor={'#E7E6E6'}>
						<HorizontalBar width = {130} height={10} backColor = {'blue'} />
					</HorizontalBar>
				</ColumnDiv>
			</RowDiv> 
		</CardStyle>
	);
}

const Icon = styled(IoOpenOutline)`
	position: absolute;
	top: 3px;
	right: 3px;
	fill: 'black';
`;