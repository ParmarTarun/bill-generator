import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function DetailsForm({
  data,
  dataCollector,
  completed,
  billIndex,
  previous,
  next,
}) {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit((prev) => !prev);
  };

  const handleChange = (e) => {
    dataCollector(e.target.name, e.target.value);
  };

  let { name, flat, prevBal, brf, slc, recAmount } = data;
  const interest = 10;
  const total = 400 + +brf + +slc + +interest;
  const netTotal = total + +prevBal - +recAmount;
  const newBill = {
    ...data,
    total,
    netTotal,
    interest,
  };

  return (
    <div className="form details-form">
      <Form>
        <Row className="justify-content-between mb-3">
          <Col sm={10}>
            <h4>Bill Details</h4>
          </Col>
          <Col className="text-right" sm={2}>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="EDIT"
              onChange={toggleEdit}
            />
          </Col>
        </Row>

        <Form.Group as={Row}>
          <Form.Label column sm="1">
            Name
          </Form.Label>
          <Col sm="7">
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              disabled={!edit}
            />
          </Col>
          <Form.Label column sm="1">
            Flat
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="text"
              name="flat"
              value={flat}
              onChange={handleChange}
              disabled={!edit}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Build. repair fund
          </Form.Label>
          <Col sm="2">
            <Form.Control
              type="number"
              name="brf"
              value={brf}
              onChange={handleChange}
              disabled={!edit}
            />
          </Col>
          <Form.Label column sm="2">
            Sub latee charge
          </Form.Label>
          <Col sm="2">
            <Form.Control
              type="number"
              name="slc"
              value={slc}
              onChange={handleChange}
              disabled={!edit}
            />
          </Col>
          <Form.Label column sm="1">
            Interest
          </Form.Label>
          <Col sm="2">
            <p>{interest}</p>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Total
          </Form.Label>
          <Col sm="2">
            <p>{total}</p>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Previous Bal.
          </Form.Label>
          <Col sm="2">
            <Form.Control
              type="number"
              name="prevBal"
              value={prevBal}
              onChange={handleChange}
              disabled={!edit}
            />
          </Col>
          <Form.Label column sm="2">
            Received Amt.
          </Form.Label>
          <Col sm="2">
            <Form.Control
              type="number"
              name="recAmount"
              value={recAmount}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Net Total
          </Form.Label>
          <Col sm="2">
            <p>{netTotal}</p>
          </Col>
        </Form.Group>
      </Form>
      {!completed && (
        <div
          className={
            billIndex === 0
              ? "nav-btns d-flex justify-content-end"
              : "nav-btns d-flex justify-content-between"
          }
        >
          {billIndex !== 0 && (
            <Button variant="dark" onClick={() => previous(newBill)}>
              BACK
            </Button>
          )}
          <Button variant="dark" onClick={() => next(newBill)}>
            {billIndex === 42 ? "DONE" : "NEXT"}
          </Button>
        </div>
      )}
    </div>
  );
}

export default DetailsForm;
