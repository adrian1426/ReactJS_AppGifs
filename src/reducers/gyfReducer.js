import { buscarGyfType, agregarRating } from './gyfTypes';

export const gyfReducer = (state, action) => {
  switch (action.type) {
    case buscarGyfType:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1
      };
    case agregarRating:
      return {
        ...state,
        rating: action.payload
      };
    default:
      return state;
  }
};