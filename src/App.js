import Main from './components/Main';
import { Provider } from 'react-redux';
import { makeStore } from './js/makeStore';

const store = makeStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main></Main>
      </Provider>
    </div>
  );
}

export default App;
