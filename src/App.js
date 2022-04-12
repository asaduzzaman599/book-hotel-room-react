import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Rooms from './Components/Rooms/Rooms';
import Room from './Components/Room/Room';
import RoomDetail from './Components/RoomDetail/RoomDetail';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App min-h-screen flex flex-col  justify-between ">
      <Header></Header>
      <Toaster />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/room/:roomType' element={<Rooms></Rooms>}>
             {<Route path=':room' element={''}></Route> }
          </Route>
          <Route path='/room' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
