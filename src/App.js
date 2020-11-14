import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import reducer from './store/reducers/reducer';
import Todo from './containers/Todo';

function App() {
  const rootReducer=reducer;
  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return (
    <div className="App">
      <Provider store={store}>
      <Todo/>
      </Provider>
    </div>
  );
}

export default App;
