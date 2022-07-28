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
          validateTrigger={['onBlur', 'onChange']}
          initialValues={{
            remember: true,
            username: 13111111111,
            password: 123456
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号码格式不正确',
                validateTrigger: 'onBlur'
              },
              {
                required: true,
                message: '请输入手机号'
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码'
              },
              {
                min: 6,
                message: '请输入6位密码',
                validateTrigger: 'onBlur'
              }
            ]}
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
