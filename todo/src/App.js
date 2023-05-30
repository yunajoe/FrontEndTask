import logo from './logo.svg';
import  IndexPage from './pages/indexPage'
import  WritingPage from './pages/writingPage'
import EditPage from './pages/editPage'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
function App() {
  const [list, setList] = useState([])
  // element도 prop이다 
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={<IndexPage Todolist={list} setTodoList={setList}/> }></Route>
        <Route path="/writing" element={<WritingPage Todolist={list} setTodoList={setList}/>}></Route>  
        <Route path="/edit/" element={<EditPage/>}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
