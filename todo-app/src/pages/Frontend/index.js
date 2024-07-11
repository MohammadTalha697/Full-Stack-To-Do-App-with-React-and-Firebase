import React from 'react'
import { Routes, Route, useNavigate, NavLink } from 'react-router-dom'
// PAGES
import Home from './Home'
import Upcoming from './Upcoming'
import Today from './Today'
import NoPage from '../NoPage'

// COMPONENTS
import Header from '../../components/Frontend/Header'
import Footer from '../../components/Frontend/Footer'
// ANTD
import { MenuOutlined, ForwardOutlined, DatabaseOutlined, OrderedListOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Divider, Layout, Menu, Popconfirm, message } from 'antd';
import { Fade } from 'react-awesome-reveal'
import { useAuthContext } from '../../contexts/AuthContext'
import { auth } from '../../config/firebase'
import { signOut } from 'firebase/auth'
const { Sider } = Layout;

const Frontend = () => {
    const { isAuth, setIsAuth } = useAuthContext()
    const navigate = useNavigate()
    console.log(isAuth);
    // Handle Logout 

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                message.success("Signed out successfully")
                setIsAuth(false)
            }).catch((error) => {
                console.log(error)
            });
    }
    
    return (
        <Fade>
            <Layout >
                {/* SIDEBAR */}
                <Sider theme='light' id='sideBar' breakpoint='sm' collapsedWidth="0" zeroWidthTriggerStyle={{ zIndex: "1", position: "absolute", top: "10px", boxShadow: "0 0 20px rgba(0 , 0 , 0 , 0.3)" }}>

                    <div className="container mx-auto rounded-3 d-flex flex-column min-vh-100">
                        <div className='flex-grow-1'>
                            <div className="row mt-3">
                                <div className="col-12 mb-4">
                                    <span className='h4 me-2'>Menu</span><MenuOutlined />
                                </div>
                                <Divider />
                                <div className="col-12">
                                    <h6>Tasks</h6>
                                    <div id='navigationMenu' className='mt-3'>
                                        <div className="row " style={{ rowGap: "5px" }}>
                                            <div className="col-12">
                                                <NavLink className="btn btn-sm btn-light text-start w-100 sideButtons" to="/upcoming"><ForwardOutlined /> &ensp;Upcoming</NavLink>
                                            </div>
                                            <div className="col-12">
                                                <NavLink className="btn btn-sm btn-light text-start w-100 sideButtons" to="/today"><DatabaseOutlined /> &ensp;Today</NavLink>
                                            </div>
                                            <div className="col-12">
                                                <NavLink className="btn btn-sm btn-light text-start w-100 sideButtons" to="/"><OrderedListOutlined /> &ensp;All</NavLink>
                                            </div>
                                        </div>
                                    </div>

                                    <Divider />
                                </div>
                                <div className="col-12">
                                    <h6>Lists</h6>
                                    <div className="row">
                                        <div className="col-12">
                                            <button className="btn btn-sm btn-light text-start w-100"><span className="text-danger h5">&#9724;</span>&ensp; Personal</button>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-sm btn-light text-start w-100"><span className="text-primary h5">&#9724;</span>&ensp; Work</button>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-sm btn-light text-start w-100"><span className="text-warning h5">&#9724;</span>&ensp; List 1</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer Sidebar */}
                        <div className='py-3'>
                            <Popconfirm
                                title="Sign Out"
                                description="Are you sure to sign out?"
                                onConfirm={handleLogOut}
                                okText="Sign out"
                                cancelText="No"
                            >
                                <Button className='text-start' type='text' icon={<LogoutOutlined />} danger block>Sign out</Button>
                            </Popconfirm>
                        </div>
                    </div>

                </Sider>

                {/* CONTENT */}

                <Layout className='bg-light d-flex flex-column min-vh-100'>
                    <Header />
                    <Divider className='mt-0' />
                    <main className='flex-grow-1'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/upcoming' element={<Upcoming />} />
                            <Route path='/today' element={<Today />} />
                            <Route path='*' element={<NoPage />} />
                        </Routes>
                    </main>
                    <Footer />
                </Layout>
            </Layout>

        </Fade>
    )
}

export default Frontend