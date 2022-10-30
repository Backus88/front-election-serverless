import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Card, Feed, Icon, Image, Progress, Grid, Header } from 'semantic-ui-react'
import { ElectionContext } from '../../context/Provider'

const partialCardHeight = '190px'
const predictionCardHeight = '150px'

export default function CardHome({ title, icon, type }) {
  const navigate = useNavigate()
  const { partials } = useContext(ElectionContext)

  const votesProportionPercent = partials.byUf.BR.current.votesProportion * 100 || 0
  const lulaPercent = partials.byUf.BR.current.lula * 100
  const bolsonaroPercent = partials.byUf.BR.current.bolsonaro * 100

  return (
    <CardStyled onClick={() => navigate(`${type}`)} h={type ? predictionCardHeight : partialCardHeight}>
      <Card.Content>
        <Grid style={styleTitle}>
          <Grid.Column floated="left" width={13}>
            <Header as="h5" icon={icon} content={title} />
          </Grid.Column>
          <Grid.Column floated="right" width={2}>
            <Icon name="expand"></Icon>
          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content>
        <Feed style={styleBody}>
          <Feed.Event>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYqnT5mVWes2tdBm5hlBMrPQj8-aT3YLjfJi-oudD&s"
              avatar
            ></Image>
            <Feed.Content>
              <Feed.Date content="Luiz Inácio Lula da Silva" />
              <Progress percent={lulaPercent} progress active size="small" color="red" />
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Image src="https://static.poder360.com.br/2019/01/foto-oficial-Bolsonaro.png" avatar></Image>
            <Feed.Content>
              <Feed.Date content="Jair Messias Bolsonaro" />
              <Progress percent={bolsonaroPercent} progress active size="small" color="blue" />
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
      {!type && (
        <Card.Content extra style={styleFoot}>
          {`${votesProportionPercent}% de apuração`}
          <span style={{ float: 'right' }}>{`${partials.byUf.BR.current.votesCount} votos`}</span>
        </Card.Content>
      )}
      <Progress percent={votesProportionPercent} attached="bottom" />
    </CardStyled>
  )
}

const CardStyled = styled(Card)`
  height: ${(props) => props.h};
`

const styleBody = {
  height: '70px',
}

const styleTitle = {
  height: '30px',
}

const styleFoot = {
  height: '30px',
  padding: '3px',
  verticalAlign: 'middle',
}
