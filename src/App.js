import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Singleview from './pages/Singleview';

import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/view/:mob' element={<Singleview></Singleview>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
