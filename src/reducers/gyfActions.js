import { buscarGyfType, agregarRating } from './gyfTypes';

export const buscarGyfAction = payload => ({
  type: buscarGyfType,
  payload
});

export const agregarRatingAction = payload => ({
  type: agregarRating,
  payload
});