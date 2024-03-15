import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import {Routes, Route} from "react-router-dom"
import Registration from './Components/Registration';
import HomePage from './Components/HomePage';
import Blogs from './Components/Blogs';
import UserBlogs from './Components/UserBlogs';
import CreateBlogComponent from './Components/CreateBlogComponent';
import Random from './Components/Random';
function App() {
  const backgroundImage = require('./assets/Background.png');
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Blogs></Blogs>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
        <Route path='/signup' element = {<Registration></Registration>}></Route> 
        <Route path='/myblog' element = {<UserBlogs></UserBlogs>}></Route>
        <Route path='/createblog' element = {<CreateBlogComponent></CreateBlogComponent>}></Route>
        <Route path='/random' element = {<Random></Random>}></Route>
      </Routes>
    </div>
  );
}

export default App;
