import React, {PureComponent} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MainContainer, RegressionContainer } from '../components/Containers';
import Header from '../components/Header/Header';
import Title from '../components/Title';
import { regressionData } from '../mock/regressionData';

export default function Regression() {

    const data = [
        {
            name: '13:00',
            lula: 51,
            bolso: 49,
            amt: 2400,
        },

        {
            name: '14:00',
            lula: 51,
            bolso: 49,
            amt: 2400,
        },
        {
            name: '15:00',
            lula: 51,
            bolso: 49,
            amt: 2400,
        },
        {
            name: '16:00',
            lula: 45,
            bolso: 55,
            amt: 2210,
        },
        {
            name: '17:00',
            lula: 48,
            bolso: 52,
            amt: 2290,
        },
        {
            name: '18:00',
            lula: 49,
            bolso: 51,
            amt: 2290,
        },
        {
            name: '19:00',
            lula: 48.5,
            bolso: 51.5,
            amt: 2290,
        }
    ];

    class CustomizedLabel extends PureComponent {
        render() {
          const { x, y, stroke, value } = this.props;
      
          return (
            <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
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
                <Title />
                <ResponsiveContainer width="100%" height="70%">
                    <LineChart
                        width={390}
                        height={500}
                        data={data}
                        margin={{
                            top: 5,
                            right: 45,
                            left: -20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" height={50} tick={<CustomizedAxisTick />} />
                        <YAxis domain={[0, 80]} />
                        <Tooltip />
                        <Legend verticalAlign='top' />
                        <Line
                            type="monotone"
                            dataKey="lula"
                            stroke="red"
                            label={<CustomizedLabel />}
                        />
                        <Line type="monotone" dataKey="bolso" stroke="blue" label={<CustomizedLabel />} />
                    </LineChart>
                </ResponsiveContainer>
            </MainContainer>
        </>
    )


};
