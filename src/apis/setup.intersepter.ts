import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as PKG from '../../package.json';
import {store} from '../redux/redux-store';
import { storeDataToNull } from '../views/App/Profile/components/Profile';
import  { reset, setAccessToken } from '../views/Auth/Login/services/loginSlice';

export const dev = {
  axios_option: {
    baseURL: 'https://demo.invincix.com',
    headers: {
      'X-API-KEY': 1234,
    },
  },
};
export const uat = {
  axios_option: {
    baseURL: 'https://demo.invincix.com',
    headers: {
      'X-API-KEY': 1234,
    },
  },
};
export const preprod = {
  axios_option: {
    baseURL: 'https://demo.invincix.com',
    headers: {
      'X-API-KEY': 1234,
    },
  },
};

const dev_env = PKG.version.toLowerCase().includes('dev');
const uat_env = PKG.version.toLowerCase().includes('uat');
export const api_url = dev_env
  ? 'https://dev-py-api-mgmt.azure-api.net'
  : uat_env
  ? 'https://uat-py-api-mgmt.azure-api.net'
  : 'https://preprodpyapim.azure-api.net';
export const axios_option = dev_env
  ? dev.axios_option
  : uat_env
  ? uat.axios_option
  : preprod.axios_option;
  
const instance = axios.create(axios_option);


instance.interceptors.request.use(
  request => {
    const urlAuth = request.url;
    if (urlAuth?.includes('/auth/validateEmail')) {
      return request;
    } else {
      return {
        ...request,
        headers: {
          ...request.headers,
          'X-ACCESS-TOKEN': store.getState().login.userDetails.access_token,
        },
      };
    }
  },
  error => {
    console.log('ERROR IN [instance.interceptors.request.use]: ', error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  
  async response => {    
    return response;
  },
  
  async error => {

    const originalRequest = error.config;
    let refreshTokenError, res
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshTokenData={
        refresh_token:store.getState().login.userDetails.refresh_token
      }
      [refreshTokenError, res] = await axios({
          method: "POST",
          url: "https://demo.invincix.com/weserve/public/api/auth/refreshToken",
          data:refreshTokenData,
          headers: { "Content-Type": "application/json",'X-API-KEY': 1234},
      })
          .then(async (response) => {
              store.dispatch(setAccessToken(response))
              return [null, await axios.request(originalRequest)];
          }).catch(function (error) {
            store.dispatch(reset())
          });
   
  }
  },
);

export {instance as axios};
