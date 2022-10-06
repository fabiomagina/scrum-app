import './App.css';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter } from 'react-router-dom'
import Routas from './Routes';

function App() {
  return (
    <BrowserRouter>
    <div className="container">

      <div className="App">
        <Menu />
        <Routas />
        <Footer />
      </div>
    </div>
    </BrowserRouter >

  );
}

export default App;
