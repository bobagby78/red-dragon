import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './Pages/Login';
import Mine from './Pages/Mine';
import Create from './Pages/Create';
import Main from './Pages/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="center-text">
        <Header />
      </div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mine' element={<Mine />} />
        <Route path='/create' element={<Create />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
