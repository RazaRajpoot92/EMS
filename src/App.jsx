
import MainContainer from "./components/MainContainer"
import SideBar from "./components/SideBar"
import Home from "./pages/Home"
import AddEmployee from "./pages/AddEmployee"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import UpdatEmployee from "./pages/UpdateEmployee"
import EmployeesTable from "./components/EmployeesTable"


function App() {


  return (
    <>
      <Router >

          <MainContainer>

          <SideBar />

          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/employees"} element={<EmployeesTable />} />
            <Route path={"/addemployee"} element={<AddEmployee />} />
            <Route path={"/updateemployee/:id"} element={<UpdatEmployee />} />

          </Routes>

          </MainContainer>

      </Router>
    </>
  )
}

export default App
