import { React } from 'react'
import CardHome from '../components/Card/CardHome'
import { MainContainer } from '../components/Containers'
import Header from '../components/Header/Header'
import Title from '../components/Title'
import { useContext } from 'react'
import { ElectionContext } from '../context/Provider'
export default function Home() {
  const state = useContext(ElectionContext)

  console.log('stateHome', state)

  return (
    <>
      <Header />
      <MainContainer>
        <Title />
        <CardHome title={'Prediction 1'} />
        <CardHome title={'Prediction 2'} />
        <CardHome title={'Parcial'} />
      </MainContainer>
    </>
  )
}
