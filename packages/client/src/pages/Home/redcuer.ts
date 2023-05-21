/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { IAction } from '@typings/redux.types';
import {
  SET_PRODUCT_ERROR,
  SET_PRODUCT_REQUEST,
  SET_PRODUCT_SUCCESS,
} from './action';

const initialState = {
  loading: false,
  productList: [],
  error: null,
};

export const HomeReducer = (
  state = initialState,
  action: IAction,
): any => {
    const { type, payload } = action;
  switch (type) {
    case SET_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };

    case SET_PRODUCT_SUCCESS:
      return { ...state, loading: false, productList: payload };

    case SET_PRODUCT_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
