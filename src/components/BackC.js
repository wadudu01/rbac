import React from 'react'
import { Col, Row, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const BackC = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to={"/app/admin"}>
          <Button color="dark" className="mr-2">
            Back
          </Button>
        </Link>
      </Col>
    </Row>
  )
}

export default BackC
