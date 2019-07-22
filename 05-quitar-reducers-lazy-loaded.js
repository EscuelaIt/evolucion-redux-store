// importamos la función createStore, de Redux
import { 
  createStore, 
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';

// importamos nuestro reducer, que enseguida veremos cómo se hace
import { reducer } from './reducers/app-reducer';

// Este reducer lo voy a traer por lazy load
// import { todoReducer } from './reducers/todo-reducer';

// Thunk para el trabajo con actions asíncronos
import thunk from 'redux-thunk';

// importamos lazyReducerEnhancer para el lazy load de reducers
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js';

// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combinamos los reducer
// const combinedReducers = combineReducers({
//   app: reducer,
//   todo: todoReducer,
// });

// creamos el store con la función createStore(), enviando el reducer como parámetro.
// exportamos el store para que otros lo puedan importar fuera de este módulo.
export const store = createStore( state => state, devCompose(
  applyMiddleware(thunk),
  lazyReducerEnhancer(combineReducers)
));

store.addReducers({
  app: reducer
});