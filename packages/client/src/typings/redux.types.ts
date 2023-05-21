/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRootState } from '@store/reducers';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export interface IAction<P = any, T = string> {
  type: T
  payload?: P
  param?: P
  page?: number
  search?: boolean
}

export type TDispatch<A = IAction, R = any> = (args: A) => R;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
