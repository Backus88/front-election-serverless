import React, {PureComponent, useContext, useState} from 'react';
import { ElectionContext } from '../context/Provider';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MainContainer, RegressionContainer } from '../components/Containers';
import Header from '../components/Header/Header';
import Title from '../components/Title';
import { regressionData } from '../mock/regressionData';
import styled from 'styled-components';
import CardRegression from '../components/Card/CardRegression';
import { dataCreation } from '../utils/regressor';

export default function Regression() {
  const {partials}= useContext(ElectionContext)
  const votedCount = partials.byUf.BR.current.votesProportion;
  const lulaPercent = partials.byUf.BR.current.lula *100|| 0
  const bolsoPercent = partials.byUf.BR.current.bolsonaro *100|| 0
  const updateTime = partials.byUf.BR.current.updateTime || '00:00'

  let newData =[];
  if(partials?.byUf?.BR?.history.length !== 0){
    newData = dataCreation(partials?.byUf?.[partials.regFilter|| 'BR'].history)
  }
  
  console.log(partials?.byUf?.[partials.regFilter|| 'BR'])


    class CustomizedLabel extends PureComponent {
        render() {
          const { x, y, stroke, value } = this.props;
      
          return (
            <text x={x} y={y} dy={-4} fill={stroke} fontSize={14} textAnchor="middle">
              {value}
            </text>
          );
        }
      }
      
      class CustomizedAxisTick extends PureComponent {
        render() {
          const { x, y, stroke, payload } = this.props;
      
          return (
            <g transform={`translate(${x},${y})`}>
              <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
                {payload.value}
              </text>
            </g>
          );
        }
      }


    return (
        <>
            <Header />
            <MainContainer>
              <CardRegression 
                title={partials?.byUf?.[partials.regFilter|| 'BR'].current.uf} 
                percentVoted={partials?.byUf?.[partials.regFilter|| 'BR'].current.votesProportion*100}
                lulaPercent={partials?.byUf?.[partials.regFilter|| 'BR'].current.lula*100}
                bolsoPercent={partials?.byUf?.[partials.regFilter|| 'BR'].current.bolsonaro*100}
                updateTime={partials?.byUf?.[partials.regFilter|| 'BR'].current.updateTime}/>
              <RegressionContainer>
                  <ResponsiveContainer width="100%" height="88%">
                      <LineChart
                          width={390}
                          height={500}
                          data={newData}
                          margin={{
                              top: 5,
                              right: 45,
                              left: -20,
                              bottom: 5
                          }}
                      >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" height={50} tick={<CustomizedAxisTick />} />
                          <YAxis domain={[0, 0.8]} />
                          <Tooltip />
                          <Legend payload={[{value:'lula', type:'diamond', color:'red'},{value:'bolso', type:'diamond', color: 'blue'}]}/>
                          <Line
                              type="monotone"
                              dataKey="lula"
                              stroke="red"
                          />
                          <Line 
                              type="monotone" 
                              dataKey="bolso" 
                              stroke="blue"  />
                          <Line
                              type="monotone"
                              dataKey="lulaPred"
                              stroke="red"
                              strokeDasharray="3 4 5 2"
                          />
                          <Line 
                              type="monotone" 
                              dataKey="bolsoPred" 
                              stroke="blue" 
                              strokeDasharray="3 4 5 2" />
                      </LineChart>
                  </ResponsiveContainer>
              </RegressionContainer>
            </MainContainer>
        </>
    )


};
