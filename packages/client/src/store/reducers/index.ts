import { HomeReducer } from '@pages/Home/redcuer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    home: HomeReducer,
});

export default reducers;
export type IRootState = ReturnType<typeof reducers>;
