import React from 'react'
import { BarChart, Bar, ResponsiveContainer } from 'recharts'

const data = [
  {
    uv: 4000,
  },
  {
    uv: 4000,
  },
]

const CardBarChart = ({ color }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" barSize={10} margin={{ bottom: '20' }}>
        <Bar dataKey="uv" fill={color} background />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default CardBarChart
