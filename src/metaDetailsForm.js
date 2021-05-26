import { Row, Col, Form } from "react-bootstrap";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function MetaDetailsForm({ metaDataCollector, metaData }) {
  const handleChange = (e) => {
    metaDataCollector(e.target.name, e.target.value);
  };
  const { month, year, date, lastBillNo } = metaData;
  return (
    <div className="form meta-details-form">
      <Form>
        <Row className="justify-content-between mb-3">
          <Col sm={10}>
            <h4>Meta Details</h4>
          </Col>
        </Row>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Month
          </Form.Label>
          <Col sm="2">
            <Form.Control
              as="select"
              onChange={handleChange}
              value={month}
              name="month"
            >
              {months.map((month, i) => (
                <option value={month} key={i}>
                  {month}
                </option>
              ))}
            </Form.Control>
          </Col>
          <Form.Label column sm="1">
            Year
          </Form.Label>
          <Col sm="2">
            <Form.Control
              type="number"
              name="year"
              onChange={handleChange}
              value={year}
            />
          </Col>
          <Form.Label column sm="1">
            Date
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="date"
              name="date"
              onChange={handleChange}
              value={date}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Last Bill No
          </Form.Label>
          <Col sm="2">
            <Form.Control
              type="number"
              name="lastBillNo"
              onChange={handleChange}
              value={lastBillNo}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default MetaDetailsForm;
