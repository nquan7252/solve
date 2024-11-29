import logo from './logo.svg';
import './App.css';
import MainPage from './Pages/MainPage.tsx';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Sudoku from './Pages/SudokuPage.tsx';
import WordSearch from './Pages/WordSearchPage.tsx';
import AlignmentPage from './Pages/AlignmentPage.tsx';
import './blobz.css'
import './blobz.min.css'
function App() {
  return <BrowserRouter>
  <Routes>
   <Route path='/' element={<MainPage/>}></Route>
   <Route path='/sudoku' element={<Sudoku/>}></Route>
   <Route path='/wordsearch' element={<WordSearch/>}></Route>
   <Route path='/alignment' element={<AlignmentPage/>}/>

  </Routes>
  </BrowserRouter>
}

export default App;
