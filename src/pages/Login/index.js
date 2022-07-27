import { Card } from 'antd'
import logo from '@/assets/logo.png'
// 导入样式
import './index.scss'
function Login() {
  return (
    <div className='login'>
      <Card className='login-container'>
        <img className="login-logo" src={logo} alt="" />
        {/* 登陆表单 */}
      </Card>
    </div>
  )
}

export default Login
