import { React, useContext } from 'react'
import CardPrediction from '../components/Card/CardPrediction'
import { MainContainer, CarouselContainer } from '../components/Containers'
import Header from '../components/Header/Header'
import Title from '../components/Title'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { ufData } from '../mock/ufs'
import { ElectionContext } from '../context/Provider'

export default function Predict() {
  const state = useContext(ElectionContext)
  console.log('statePredict', state)
  return (
    <>
      <Header />
      <MainContainer> 
        <CarouselContainer>
          {ufData.map((item, index) => {
            return <CardPrediction title={item} key={index} />
          })}
        </CarouselContainer>
      </MainContainer>
    </>
  )
}
