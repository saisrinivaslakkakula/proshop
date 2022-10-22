import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL} from '../constants/userConstants'
import axios from 'axios'
export const login = (email,password) => async(dispatch) =>{
    try {
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        //console.log(config)
        const {data} = await axios.post('/api/user/login',{email,password},config)
        
         dispatch({
            type : USER_LOGIN_SUCCESS,
            payload:data,
        })
        localStorage.setItem('userInfo',JSON.stringify(data)) 
        
    } catch (error) {

         dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message
        }) 
    }
}

export const register = (firstName, lastName, email, phoneNumber, password, Address, isFreeLancer) => async(dispatch) =>{
    try {
        dispatch({
            type:USER_REGISTER_REQUEST
        })
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        console.log(isFreeLancer)
        const {data} = await axios.post('/api/user/add/',{firstName, lastName, email, phoneNumber,password, address:Address, isFreelancer:isFreeLancer},config)
        
         dispatch({
            type : USER_REGISTER_SUCCESS,
            payload:data,
        })
        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload:data,
        })
        localStorage.setItem('userInfo',JSON.stringify(data)) 
        
    } catch (error) {

         dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message
        }) 
    }
}

export const getUserDetails = (id) => async(dispatch,getState) =>{
    try {
        dispatch({
            type:USER_DETAILS_REQUEST
        })
     
        const {userLogin} = getState()
        const {userInfo} = userLogin
        const config = {
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            }
        }
        const {data} = await axios.get(`/api/users/${id}`,config)
         dispatch({
            type : USER_DETAILS_SUCCESS,
            payload:data,
        })
       
        
    } catch (error) {

         dispatch({
            type:USER_DETAILS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message: error.message
        }) 
    }
}

export const logout = () =>(dispatch)=>{
    localStorage.removeItem('userInfo')
    dispatch({
        type:USER_LOGOUT
    })
}