import HomePage from './Pages/HomePage'
import EditorPage from './Pages/EditorPage'
import './App.css';
import {
  BrowserRouter, Routes, Route } from 'react-router-dom';
  import {Toaster} from 'react-hot-toast'
function App() {
  return (
   <>
   <div>
    <Toaster position='top-right' toastOptions={
     { success:{
        theme:{
          primary:'#4aed88',
        },
      },
    }}></Toaster>
   </div>
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
