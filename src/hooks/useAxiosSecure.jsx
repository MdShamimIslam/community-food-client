import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    axiosSecure.interceptors.response.use(function (response) {
        
        return response;
      }, function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            logOut();
            navigate('/signIn');
        }
        return Promise.reject(error);
      });
};

return axiosSecure

export default useAxiosSecure;