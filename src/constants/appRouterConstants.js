export const homeR = '/';
export const gifSearchBR = '/search';
export const gifDetailBR = '/gif';
export const registerBR = '/register';

export const login = '/login';
export const error = '/:rest*';

export const gifSearchR = `${gifSearchBR}/:keyword/:rating?`;
export const gifDetailR = `${gifDetailBR}/:id`;