export const homeR = '/';
export const gifSearchBR = '/search';
export const gifDetailBR = '/gif';
export const error = '/:rest*';

export const gifSearchR = `${gifSearchBR}/:keyword/:rating?`;
export const gifDetailR = `${gifDetailBR}/:id`;