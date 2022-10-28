import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Predict from './pages/Predict'
import { Provider } from './context/Provider'
import Regression from './pages/Regression'
import awsExports from './aws-exports'
import Amplify from 'aws-amplify'

Amplify.configure(awsExports)

export default function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/regression" element={<Regression />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}
