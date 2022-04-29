import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Profile } from '@/components/user/Profile'

const SERVER = 'http://127.0.0.1:5000'
/**
Profile.getInitialProps = async ({ query }) => {
    const {id} = query
    return {id}
}
*/

const ProfilePage = ({id}) => {
    const [user, setUser] = useState({
        userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
    })
    /**
    useEffect(() => {
        axios.get(`${SERVER}/user/profile/${id}`)
        .then(res => {
            setUser(res.data.user)
            console.log(res.data.user)
        }).catch(err=>{
            console.log(err)
        })
      }, [])
      console.log(JSON.stringify(user))
    */
    return (
        <Profile profile={user}/>
    )
}

export default ProfilePage