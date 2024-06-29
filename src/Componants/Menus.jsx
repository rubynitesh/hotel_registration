import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'
import Home from './Home'
import AddStudent from './AddStudent'
import AllStudent from './AllStudent'

const Menus = () => {
  return (
    <ListGroup>
        <Link className='list-group-item list-group-item-action' tag='a' to="/">Home</Link>
        <Link className='list-group-item list-group-item-action' tag='a' to='/add-student'>Add Student</Link>
        <Link className='list-group-item list-group-item-action' tag='a' to='/view-allstudent'>View All Student</Link>
        <Link className='list-group-item list-group-item-action' tag='a' to='!#'>About</Link>
        <Link className='list-group-item list-group-item-action' tag='a' to='!#'>Contact</Link>
    </ListGroup>
  )
}

export default Menus
