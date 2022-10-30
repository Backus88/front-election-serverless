import { TitleStyle } from './TitleStyle'
import { React, useContext } from 'react'
import m from 'moment'
import { ElectionContext } from '../../context/Provider'

export default function Title({ updateTime }) {
  const { partials } = useContext(ElectionContext)
  const lastTime = partials.byUf.BR.current.fetchTime

  return (
    <TitleStyle updateTime={updateTime}>
      {updateTime ? `Atualização: ${lastTime ? m(lastTime).format('DD/MM/YY HH:mm:ss') : ''}` : 'Tracking Eleições'}
    </TitleStyle>
  )
}
