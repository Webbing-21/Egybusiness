import React, { useContext } from 'react'
import { UserContext } from '../context/auth/usercontect'
import { Navigate } from 'react-router-dom'

export default function RequireAuth({Page, admin}) {
    const {userToken , userData} = useContext(UserContext)
    if (admin) {
        if (userToken && userData && userData.isAdmin) {
            return <Page />
        } else if (!userToken && !userData) {
            return <Navigate to={'/auth'} />
        }
        else return <Navigate to={'/'} />
    }else {
        if (!userToken && !userData) {
            return <Navigate to={'/auth'} />
        }
        else return <Page />
    }
    
}
