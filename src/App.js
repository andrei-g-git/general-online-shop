import Main from './components/Main';
import { Provider } from 'react-redux';
import { makeStore } from './js/makeStore';
import { BrowserRouter } from 'react-router-dom';

//import './App.css';

const store = makeStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Main></Main>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
