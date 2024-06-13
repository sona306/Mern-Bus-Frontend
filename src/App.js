import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addbus from './components/Addbus';
import Searchbus from './components/Searchbus';
import Viewbus from './components/Viewbus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/addbus' element={<Addbus/>}/>
        <Route path='/searchbus' element={<Searchbus/>}/>
        <Route path='/viewbus' element={<Viewbus/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
