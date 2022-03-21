import { useReducer } from 'react';
import { agregarRatingAction, buscarGyfAction } from 'reducers/gyfActions';
import { gyfReducer } from '../reducers/gyfReducer';

export const useSearchForm = ({ valueKeyword, valueRating } = {}) => {
  const initialState = { keyword: valueKeyword, times: 0, rating: valueRating };
  const [state, dispatch] = useReducer(gyfReducer, initialState);
  const { keyword, times, rating } = state;

  const buscarGif = (value) => {
    dispatch(buscarGyfAction(value));
  };

  const agregarTimes = (value) => {
    dispatch(agregarRatingAction(value))
  };

  return {
    keyword,
    times,
    rating,
    buscarGif,
    agregarTimes
  };
};