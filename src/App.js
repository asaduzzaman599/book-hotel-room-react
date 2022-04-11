import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App min-h-screen flex flex-col  justify-between ">
      <Header></Header>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
