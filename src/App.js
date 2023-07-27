import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import SingleView from './SingleView';
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
       <Route path='' element={<Home></Home>}></Route>
      <Route path="view/:id" element={<SingleView></SingleView>}></Route>
      </Routes> 
      <Footer></Footer>
    </div>
  );
}

export default App;
