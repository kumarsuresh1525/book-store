import { GET_BOOKS_URL } from '@constants/apiUrls';
import { IAction, TDispatch } from '@typings/redux.types';
import axios from 'axios';

export const SET_PRODUCT_REQUEST = 'SET_PRODUCT_REQUEST';
export const SET_PRODUCT_SUCCESS = 'SET_PRODUCT_SUCCESS';
export const SET_PRODUCT_ERROR = 'SET_PRODUCT_ERROR';

const setProductSuccess = (data): IAction => ({
    type: SET_PRODUCT_SUCCESS,
    payload: data,
  });

const setError = (error): IAction => ({
    type: SET_PRODUCT_ERROR,
    payload: error,
  });

const setProductRequest = (): IAction => ({
    type: SET_PRODUCT_REQUEST,
  });

export const fetchBooks: any = () => async (
  dispatch: TDispatch,
): Promise<void> => {
  try {
    dispatch(setProductRequest());
    const resp = await axios.get(GET_BOOKS_URL);
    dispatch(setProductSuccess(resp.data));
  } catch (error) {
    setError(error);
  }
};
