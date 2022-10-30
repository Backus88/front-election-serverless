import styled from "styled-components";
import { CardStyle } from './CardStyle';
import {  RowDiv, CardHeader, CardFooter, ColumnDiv } from '../Containers';

export default function CardRegression({title,percentVoted, lulaPercent, bolsoPercent}){
    return(
        <CardStyle>
            <CardHeader>
                <h1>{title}</h1>
				{percentVoted?
					<h2>Votos Apurados: {percentVoted}%</h2>
				:
					<h2>Votos Apurados: 30%</h2>
				}
            </CardHeader>
            <ColumnDiv>
                {lulaPercent?
                    <h4>Lula: <b>{lulaPercent}%</b></h4>
                :
                    <h4>Lula: xx%</h4>  
                }
                {bolsoPercent?
                    <h4>Bolsonaro: <b>{bolsoPercent}%</b></h4>
                :
                    <h4>Bolsonaro: xx%</h4>  
                }
            </ColumnDiv>
        </CardStyle>
    )
}