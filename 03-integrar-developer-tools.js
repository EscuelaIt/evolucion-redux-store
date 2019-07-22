// importamos la función createStore, de Redux
import { 
  createStore, 
  applyMiddleware,
  compose
} from 'redux';
// importamos nuestro reducer, que enseguida veremos cómo se hace
import { reducer } from './reducers/app-reducer';

// Thunk para el trabajo con actions asíncronos
import thunk from 'redux-thunk';

// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creamos el store con la función createStore(), enviando el reducer como parámetro.
// exportamos el store para que otros lo puedan importar fuera de este módulo.
export const store = createStore(reducer, devCompose(
  applyMiddleware(thunk)
));