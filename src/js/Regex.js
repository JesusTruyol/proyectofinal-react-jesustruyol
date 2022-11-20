
/** 
* @see https://www.tutorialspoint.com/regex-in-reactjs
* @see https://github.com/falconmasters/formulario-css-grid/blob/master/js/formulario.js
*/

export const validUser= new RegExp ('^[a-zA-Z0-9\u005f\u002d]{4,16}$'); // Letras, numeros, guion y guion_bajo 
export const validName= new RegExp ('^[a-zA-ZÀ-ÿ\s]{1,40}$');// Letras y espacios, pueden llevar acentos.
export const validEmail= new RegExp ('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
export const validPassword= new RegExp ('^(?=.*?[a-zA-Z0-9])(?=.*?[\u0021-\u002f\u003A-\u0040\u005b-\u0060\u007b-\u007e]).{3,}$')
export const validPhono= new RegExp ('^[0-9]{7,14}$'); //7 a 14 numeros.
