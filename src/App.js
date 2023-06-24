import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/create/Create';
import Details from './components/details/Details';
import About from './components/about/About';
import Error from './components/error/Error';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/blog'} element={<Blog/>}/>
        <Route path={'/create'} element={<Create/>}/>
        <Route path={'/blog/:id'} element={<Details/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'*'} element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
