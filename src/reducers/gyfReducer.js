import { BUSCAR_GIF_TYPE, AGREGAR_RATING_TYPE } from './gyfTypes';

export const gyfReducer = (state, action) => {
  switch (action.type) {
    case BUSCAR_GIF_TYPE:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1
      };
    case AGREGAR_RATING_TYPE:
      return {
        ...state,
        rating: action.payload
      };
    default:
      return state;
  }
};