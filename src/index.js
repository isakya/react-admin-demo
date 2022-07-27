import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
// 导入 antd 样式文件
import 'antd/dist/antd.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

