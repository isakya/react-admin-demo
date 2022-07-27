import { Card, Form, Input, Checkbox, Button } from 'antd'
import logo from '@/assets/logo.png'
// 导入样式
import './index.scss'
function Login() {
  return (
    <div className='login'>
      <Card className='login-container'>
        <img className="login-logo" src={logo} alt="" />
        {/* 登陆表单 */}
        <Form
          initialValues={{ remember: true }}
        >
          <Form.Item
          >
            <Input />
          </Form.Item>

          <Form.Item

          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className='login-checkbox-label'>同意隐私条款</Checkbox>
          </Form.Item>

          <Form.Item >
            <Button block size='large' type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div >
  )
}

export default Login
