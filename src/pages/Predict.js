import { React, useContext } from 'react'
import CardPrediction from '../components/Card/CardPrediction'
import { MainContainer, CarouselContainer } from '../components/Containers'
import Header from '../components/Header/Header'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { ElectionContext } from '../context/Provider'
import extrapolador from '../utils/extrapolador'

export default function Predict() {
  const { partials } = useContext(ElectionContext)
  const listItems = partials.predFilter?.length > 0 ? ['BR', ...partials.predFilter] : partials.allUfs
  

  return (
    <>
      <Header />
      <MainContainer>
        <CarouselContainer>
          {listItems.map((uf, index) => {
            const item = partials.byUf[uf]
            if (item.uf === 'BR') {
              const { lulaPercent, bolsonaroPercent } = extrapolador(partials)
              return (
                <CardPrediction
                  title={item.name}
                  key={index}
                  lulaPercent={lulaPercent / 100}
                  bolsonaroPercent={bolsonaroPercent / 100}
                  percentVoted={item.current.votesProportion}
                  countedVotes={item.current.votesCount}
                  updatedTime={item.current.updateTime}
                />
              )
            }
            return (
              <CardPrediction
                title={item.name}
                key={index}
                lulaPercent={item.current.lula}
                bolsonaroPercent={item.current.bolsonaro}
                percentVoted={item.current.votesProportion}
                countedVotes={item.current.votesCount}
                updatedTime={item.current.updateTime}
              />
            )
          })}
        </CarouselContainer>
      </MainContainer>
    </>
  )
}
