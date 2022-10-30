import { React } from 'react'
import CardHome from '../components/Card/CardHome'
import { MainContainer } from '../components/Containers'
import Header from '../components/Header/Header'
import { useContext } from 'react'
import { ElectionContext } from '../context/Provider'

export default function Home() {
  const state = useContext(ElectionContext)

  // console.log('stateHome', state.partials)

  return (
    <>
      <Header />
      <MainContainer>
        <CardHome title={'Parcial de momento'} icon="time" type={'parcial'} />
        <CardHome title={'Previsão 1 (Extrapolação)'} type={'predict'} icon="chart bar" />
        <CardHome title={'Previsão 2 (Regressão)'} type={'regression'} icon="chart line" />
      </MainContainer>
    </>
  )
}
