import { BUSCAR_GIF_TYPE, AGREGAR_RATING_TYPE } from './gyfTypes';

export const buscarGyfAction = payload => ({
  type: BUSCAR_GIF_TYPE,
  payload
});

export const agregarRatingAction = payload => ({
  type: AGREGAR_RATING_TYPE,
  payload
});