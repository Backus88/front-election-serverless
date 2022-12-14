import { HeaderStyle } from './HeaderStyle'
import { FaHome } from 'react-icons/fa'
import { React, useEffect, useState } from 'react'
import { useWindowSize } from '../../customHooks/useWindow'
import Title from './Title'
import DropdownFilterUF from '../Dropdown/DropdownFilterUF'
import { Grid } from 'semantic-ui-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'



export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const route = location.pathname
  const breakPoint = 500;
  const {size} = useWindowSize()
  console.log(size)
  return (
    <>
    {size> breakPoint?
        <HeaderStyle columns={3} padded width={16}>
          <Grid.Column width={5}>
            <Title updateTime />
          </Grid.Column>
          <Grid.Column width={6} textAlign="center">
            {route === '/' && <Title updateTime={false} />}
            {route === '/predict' && <DropdownFilterUF nav="predict" />}
            {route === '/regression' && <DropdownFilterUF nav="regression" />}
          </Grid.Column>
          <Grid.Column width={5} onClick={() => navigate(`/`)} style={{ cursor: 'pointer' }}>
            <FaHome size={25} style={{ float: 'right' }} />
          </Grid.Column>
        </HeaderStyle>
    :
        <HeaderStyle columns={3} padded width={16}>
          <Grid.Column width={14} textAlign="left">
            {route === '/' && <Title updateTime={false} />}
            {route === '/predict' && <DropdownFilterUF nav="predict" />}
            {route === '/regression' && <DropdownFilterUF nav="regression" />}
          </Grid.Column>
          <Grid.Column width={2} style={{ cursor: 'pointer' }}>
            <FaHome size={25} style={{ float: 'right' }} onClick={() => navigate(`/`)} />
          </Grid.Column>
        </HeaderStyle>
    }
    </>
  )
}
