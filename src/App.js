import HomePage from './Pages/HomePage'
import EditorPage from './Pages/EditorPage'
import './App.css';
import {
  BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/editor/:roomId' element={<EditorPage/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
