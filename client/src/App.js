import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from './components/signup';
import Login from './components/login';
import Main from './components/main';
import Protected from './components/utilities';
import Create from './components/create';
import History from './components/history';
import Comments from './components/comments';

function App() {
  return (

      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path="/register" element={<Signup/>}></Route>
        
        <Route path="/main" element={<Protected><Main/></Protected>} ></Route>
        <Route path="/create" element={<Create/>} ></Route>
        <Route path="/history" element={<History/>} ></Route>
        <Route path="/comments" element={<Comments/>} ></Route>
      {/* <Route path="/order/history" element={<Protected><Pastorders/></Protected>} ></Route> */}
    </Routes>
    </BrowserRouter>
     

  );
}

export default App;
