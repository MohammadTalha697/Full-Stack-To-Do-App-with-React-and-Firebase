import React from 'react'
import { CheckCircleOutlined } from "@ant-design/icons"
import { Bounce, Hinge , AttentionSeeker} from 'react-awesome-reveal'
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col">
            <AttentionSeeker triggerOnce><h1 className='fw-bold text-center text-md-start' style={{ margin: "10.5px" }}>Todo App <CheckCircleOutlined /></h1></AttentionSeeker>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header