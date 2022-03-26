import AsyncStorage from '@react-native-async-storage/async-storage';
import client from '../../api/client';
import {LOADING, USER_DATA} from '../actionTypes';
export const userLogin = value => {
  return async dispatch => {
    try {
      const res = await client.post('/api/client/login', value);
      if (res.data) {
        dispatch({
          type: USER_DATA,
          payload: res.data?.data?.clientInfo,
        });
        dispatch({
          type: LOADING,
          payload: false,
        });
      }
    } catch (error) {
      console.log('===>', error?.response?.data?.message);
      setTimeout(() => {
        error?.response?.data?.message && alert(error?.response?.data?.message);
      }, 100);
      dispatch({
        type: LOADING,
        payload: false,
      });
    }
  };
};

export const loadingAction = value => {
  return dispatch => {
    dispatch({
      type: LOADING,
      payload: value,
    });
  };
};
