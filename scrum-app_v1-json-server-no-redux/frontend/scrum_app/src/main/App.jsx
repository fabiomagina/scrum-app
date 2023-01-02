import './App.css';
import Footer from '../components/common/Footer';
import Menu from '../components/common/Menu';
import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter } from 'react-router-dom'
import Main from './Routes';

function App() {
  return (

    <BrowserRouter>

      <div className="App">
        <Menu />
        <Main />
        <Footer />
      </div>

    </BrowserRouter >

  );
}

export default App;
