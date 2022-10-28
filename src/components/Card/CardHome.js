import { HorizontalBar } from './BarChart'
import { RowDiv, ColumnDiv } from '../Containers'
import { CardStyle } from './CardStyle'
import { CandidateProfile } from './CandidateProfile'
import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoOpenOutline } from 'react-icons/io5'
import styled from 'styled-components'
import CardBarChart from './CardBarChart'
import { Card, Feed, Icon, Image, Progress, Grid, Header } from 'semantic-ui-react'

export default function CardHome({ title, icon }) {
  const navigate = useNavigate()
  return (
    <Card>
      <Card.Content>
        <Grid>
          <Grid.Column floated="left" width={13}>
            <Header as="h5" icon={icon} content={title} />
          </Grid.Column>
          <Grid.Column floated="right" width={2}>
            <Icon name="expand"></Icon>
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content>
        <Feed style={{ marginTop: '15px' }}>
          <Feed.Event>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYqnT5mVWes2tdBm5hlBMrPQj8-aT3YLjfJi-oudD&s"
              avatar
            ></Image>
            <Feed.Content>
              <Feed.Date content="Luiz Inácio Lula da Silva" />
              <Progress percent={44} progress active size="small" color="red" />
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Image src="https://static.poder360.com.br/2019/01/foto-oficial-Bolsonaro.png" avatar></Image>
            <Feed.Content>
              <Feed.Date content="Jair Messias Bolsonaro" />
              <Progress percent={56} progress active size="small" color="blue" />
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
      <Card.Content extra>33% de apuração</Card.Content>
      <Progress percent={33} attached="bottom" />
    </Card>
  )

  //   return (
  //     <CardStyle role={'button'} onClick={() => navigate(`/${type}`)}>
  //       <Icon size={20} />
  //       <h1>{title}</h1>
  //       <RowDiv>
  //         <ColumnDiv>
  //           <h3>Nome:</h3>
  //           <h3>Votos%:</h3>
  //           <div style={{ width: '250px', height: '20px' }}>
  //             <CardBarChart color={'#e4142c'} />
  //           </div>
  //         </ColumnDiv>
  //       </RowDiv>
  //       <RowDiv>
  //         <ColumnDiv>
  //           <h3>Nome:</h3>
  //           <h3>Votos%:</h3>
  //           <div style={{ width: '250px', height: '20px' }}>
  //             <CardBarChart color={'#2a3591'} />
  //           </div>
  //         </ColumnDiv>
  //       </RowDiv>
  //     </CardStyle>
  //   )
}

// const Icon = styled(IoOpenOutline)`
//   position: absolute;
//   top: 3px;
//   right: 3px;
//   fill: 'black';
// `
