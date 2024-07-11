import { Button, Divider, Form, Input, message } from 'antd'
import { SecurityScanOutlined, MailOutlined, CheckCircleOutlined, UserAddOutlined, UsergroupAddOutlined } from "@ant-design/icons"
import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AttentionSeeker } from 'react-awesome-reveal'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../config/firebase'


const Register = () => {

  let initialState = {
    fullName: "", email: "", password: ""
  }
  const [state, setState] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  // Handle Change
  const handleChange = e => {
    setState({
      ...state, [e.target.name]: e.target.value
    })
  }

  // Handle Submit

  const handleSubmit = () => {
    const { fullName, email, password } = state
    if (fullName.length < 3)
      return message.error("Enter your Fullname correctly")
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!reg.test(email))
      return message.error("Enter your Email correctly")
    if (password.length < 6)
      return message.error("Please Enter a Strong Password ")

    setState({ fullName, email, password })
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setIsLoading(false)
        message.success("User has been Created Successfully")
        // ...
      })
      .catch((error) => {
        message.error("Something went Wrong")
        console.error(error);
        setIsLoading(false)
        // ..
      });

  }


  return (
    <div className="authBackground bg-success-subtle">
      <AttentionSeeker>
        <div className='authCard text-center bg-success'>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className='mt-3'>Todo App <CheckCircleOutlined /></h1>
                <Divider />
                <Form onFinish={handleSubmit} layout='vertical' >
                  <Form.Item>
                    <h2 className='text-light'>Register</h2>
                  </Form.Item>
                  <Form.Item>
                    <Input name='fullName' onChange={handleChange} placeholder='Full name' prefix={<UserAddOutlined className='text-success me-2' />} allowClear />
                  </Form.Item>
                  <Form.Item>
                    <Input name='email' placeholder='Email' onChange={handleChange} allowClear prefix={<MailOutlined className='text-success me-2' />} />
                  </Form.Item>
                  <Form.Item >
                    <Input.Password name='password' onChange={handleChange} placeholder='Password' prefix={<SecurityScanOutlined className='text-success me-2' />} />
                  </Form.Item>
                  <Form.Item>
                    <Button loading={isLoading} htmlType='submit' icon={<UsergroupAddOutlined />} block>
                      Register
                    </Button>
                  </Form.Item>
                </Form>
                <h6 className='text-light my-5'>Already have an Account? <Link className='text-light' to="/auth/login">Go to Login Page</Link></h6>
              </div>
            </div>
          </div>

        </div>
      </AttentionSeeker>
    </div>
  )
}

export default Register