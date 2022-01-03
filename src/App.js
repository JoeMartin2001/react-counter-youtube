import { Provider } from 'react-redux';
import { store } from './store';
import CustomView from './store/components/CustomView';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CustomView />
      </div>
    </Provider>
  );
}

export default App;
