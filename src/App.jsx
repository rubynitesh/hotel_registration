

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componants/Header';
import Home from './Componants/Home';
import { Col, Container, Row } from 'reactstrap';
import Menus from './Componants/Menus';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import AddStudent from './Componants/AddStudent';
import AllStudent from './Componants/AllStudent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div>
     <Router>
      <ToastContainer/>
      <Header/>
     <Container>
      <Row>
        <Col md={4}>
        <Menus></Menus>
        </Col>
       
        <Col md={8}>
        <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/add-student' Component={AddStudent}/>
        <Route path='/view-allstudent' Component={AllStudent}/>
        </Routes>
        </Col>
       
       
      </Row>
    </Container>
     </Router>
      
      
    </div>
  )
}

export default App
