import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import reducer from './store/reducers/reducer';
import Todo from './containers/Todo';


function App() {
  const rootReducer=reducer;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return (
    <div className="App">
      <Provider store={store}>
      <Todo/>
      </Provider>
    </div>
  );
}

export default App;
