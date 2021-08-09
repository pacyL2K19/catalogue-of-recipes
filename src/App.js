import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
