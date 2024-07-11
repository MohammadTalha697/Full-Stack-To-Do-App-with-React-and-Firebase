import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import NoPage from './NoPage'
import { useAuthContext } from '../contexts/AuthContext'
const RoutesABC = () => {
    const { isAuth } = useAuthContext()
    const location = useLocation()
    return (
        <>
            <Routes>
                <Route path='/*' element={!isAuth ? <Navigate to="/auth" state={{ from: location.pathname }} replace /> : <Frontend />} />
                <Route path='/auth/*' element={!isAuth ? <Auth /> : <Navigate to="/" />} />
                <Route path='*' element={<NoPage />} />
            </Routes>
        </>
    )
}

export default RoutesABC