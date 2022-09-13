import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import StudentPage from './pages';
import StudentList from './pages/students/student-list';
import CreateStudent from './pages/students/student-create';
import EditStudent from './pages/students/student-edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/students' element={<StudentPage></StudentPage>}>
          <Route path='list' element={<StudentList></StudentList>}></Route>
          <Route path='create' element={<CreateStudent></CreateStudent>}></Route>
          <Route path=':id' element={<EditStudent></EditStudent>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
