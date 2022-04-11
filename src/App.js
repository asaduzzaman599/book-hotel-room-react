import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App min-h-screen flex flex-col  justify-between ">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
