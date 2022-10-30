import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './styles/reset.css'
import './styles/style.css'
import '../node_modules/semantic-ui-css/semantic.min.css'

ReactDom.render(React.createElement(App), document.querySelector('.root'))
