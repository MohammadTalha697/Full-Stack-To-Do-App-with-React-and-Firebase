import { Button, ColorPicker, DatePicker, Divider, Form, Input, Modal, Tooltip } from 'antd'
import { PlusOutlined, BookFilled } from "@ant-design/icons"
import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import dayjs from 'dayjs'

const Home = () => {
    let initialState = {
        title: "", description: "", color: "", date: ""
    }
    const [color, setColor] = useState()
    const [state, setState] = useState(initialState)

    let dateEx = dayjs(new Date().getTime()).format('yyyy'-'mm'-'dd') 
    console.log( dateEx.slice(0,10))
    // MODAL
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    // Handle Change
    const handleChange = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        })

    }
    // Handle Submit
    const handleSubmit = () => {
        const { color, date, description, title } = state
        console.log(state)
        handleCancel()
    }
    return (
        <div className='container'>
            <h3 className='ms-3'>All Tasks</h3>
            <div className="row" style={{ rowGap: "20px" }}>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 ">
                    <Fade direction='up' triggerOnce><div className={`container bg-primary-subtle rounded-4`} >
                        <div className="row">
                            <div className="col taskCard p-3">
                                <header>
                                    <h5>Title</h5>
                                </header>
                                <main className='mt-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta autem quisquam tempore adipisci dignissimos provident? Nihil distinctio, reiciendis atque nesciunt magni, hic tempore eveniet corrupti veniam sed optio qui dolore nemo iusto, culpa cumque! Modi accusantium ipsa nobis ipsam.
                                </main>
                            </div>
                        </div>
                    </div></Fade>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 ">
                    <Fade direction='up'>
                        <div className="container bg-dark-subtle rounded-4 " >
                            <div className="row">
                                <Tooltip title="ADD TASK">
                                    <div id='addTaskCard' onClick={showModal} className="col taskCard p-3 d-flex align-items-center justify-content-center">
                                        <h1>
                                            <PlusOutlined />
                                        </h1>
                                    </div>
                                </Tooltip>
                                {/* ADD TASK */}
                                <Modal okButtonProps={{ hidden: true }} cancelButtonProps={{ hidden: true }} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                    <header>
                                        <h3 className='text-center'>Add Task</h3>
                                    </header>
                                    <Divider />
                                    <main>
                                        <Form layout='vertical' onFinish={handleSubmit}>
                                            <Form.Item>
                                                <Input name='title' onChange={handleChange} placeholder='Title' prefix={<BookFilled className='text-secondary' />} />
                                            </Form.Item>
                                            <Form.Item>
                                                <Input.TextArea onChange={handleChange} name='description' placeholder='Description' />
                                            </Form.Item>
                                            <Form.Item>
                                                <input type="date" name='date' className='form-control form-control-sm' onChange={handleChange} />
                                            </Form.Item>
                                            <Form.Item>
                                                <label htmlFor="color" className='text-secondary'>Choose a Color for Background :</label>
                                                <input type="color" placeholder='Choose a Color for Background' name='color' onChange={handleChange} className='form-control form-control' />
                                            </ Form.Item>
                                            <Form.Item>
                                                <Button htmlType='submit' block type='primary'>Add Task</Button>
                                            </Form.Item>
                                        </Form>
                                    </main>
                                    <footer>

                                    </footer>
                                </Modal>
                            </div>
                        </div>
                    </Fade>
                </div>

            </div>
        </div>
    )
}

export default Home