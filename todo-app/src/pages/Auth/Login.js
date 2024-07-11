import { Button, Divider, Form, Input, message } from 'antd'
import { UserOutlined, MailOutlined, LoginOutlined, CheckCircleOutlined } from "@ant-design/icons"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AttentionSeeker } from 'react-awesome-reveal'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'

const Login = () => {
  let initialState = {
    email: "", password: ""
  }
  const [state, setState] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)

  // Handle Change
  const handleChange = e => {
    setState({
      ...state, [e.target.name]: e.target.value
    })
  }

  // Handle Submit
  const handleSubmit = () => {
    const { email, password } = state

    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!reg.test(email))
      return message.error("Enter your Email correctly")

    setState({ email, password })
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        message.success("You have been logged in")
        setIsLoading(false)
        // ...
      })
      .catch((err) => {
        console.log(err);
        message.error("Enter Correct Email & Password")
        setIsLoading(false)
      });
  }
  return (
    <div className="authBackground bg-primary-subtle">
      <AttentionSeeker>
        <div className='authCard text-center bg-primary'>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className='mt-3'>Todo App <CheckCircleOutlined /></h1>
                <Divider />
                <Form layout='vertical' onFinish={handleSubmit} >
                  <Form.Item>
                    <h2 className='text-light'>Login</h2>
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder='Email' name='email' onChange={handleChange} allowClear prefix={<MailOutlined className='text-primary me-2' />} />
                  </Form.Item>
                  <Form.Item >
                    <Input.Password placeholder='Password' name='password' onChange={handleChange} prefix={<UserOutlined className='text-primary me-2' />} />
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType='submit' loading={isLoading} icon={<LoginOutlined />} block>
                      Login
                    </Button>
                  </Form.Item>
                </Form>
                <h6 className='text-light my-5'>Don't have an Account? <Link className='text-light' to="/auth/register">Click Here to Create an Account.</Link></h6>
              </div>
            </div>
          </div>

        </div>
      </AttentionSeeker>
    </div>
  )
}

export default Login