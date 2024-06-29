import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap'

const Student = ({students}) => {
  return (
    <Card>
        <CardBody>
          <CardText>{students.studentId}</CardText>
          <CardText>{students.studentFirstName}</CardText>
          <CardText>{students.studentLastName}</CardText>
          <CardText>{students.studentEmail}</CardText>
          <CardText>{students.studentAdharNumber}</CardText>
          <CardText>{students.studentDob}</CardText>
          <CardText>{students.studentMobileNumber}</CardText>
          <CardText>{students.studentFatherName}</CardText>
          <CardText>{students.studentFatherMobileNumber}</CardText>
          <CardText>{students.studentFatherAdharNumber}</CardText>
          <CardText>{students.studentEntryDate}</CardText>
        </CardBody>
    </Card>
  )
}

export default Student
