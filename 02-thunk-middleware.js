// importamos la función createStore, de Redux
import { createStore, applyMiddleware } from 'redux';
// importamos nuestro reducer, que enseguida veremos cómo se hace
import { reducer } from './reducers/app-reducer';

// Thunk para el trabajo con actions asíncronos
import thunk from 'redux-thunk';

// creamos el store con la función createStore(), enviando el reducer como parámetro.
// exportamos el store para que otros lo puedan importar fuera de este módulo.
export const store = createStore(reducer, applyMiddleware(thunk));