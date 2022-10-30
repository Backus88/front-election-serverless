import { React, useContext } from 'react'
import CardPrediction from '../components/Card/CardPrediction'
import { MainContainer, CarouselContainer } from '../components/Containers'
import Header from '../components/Header/Header'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { ElectionContext } from '../context/Provider'

export default function Predict() {
  const {partials}= useContext(ElectionContext)



  return (
    <>
      <Header />
      <MainContainer> 
        <CarouselContainer>
          {Object.values(partials.byUf).map((item, index) => {
            console.log(item.current.votesProportion)
            return <CardPrediction 
              title={item.uf} 
              key={index} 
              lulaPercent= {item.current.lula} 
              bolsonaroPercent = {item.current.bolsonaro} 
              percentVoted = {item.current.votesProportion*100}
              countedVotes = {item.current.votesCount}
              />
          })}
        </CarouselContainer>
      </MainContainer>
    </>
  )
}
