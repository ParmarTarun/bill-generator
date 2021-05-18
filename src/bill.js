import React from "react";
import { Row, Col } from "react-bootstrap";

const bill = ({ bill, billNo, metaData }) => {
  const {
    name,
    flat,
    brf,
    slc,
    interest,
    total,
    prevBal,
    recAmount,
    netTotal,
  } = bill;
  const { date, month, year } = metaData;
  
  return (
    
      <Row className="bill" noGutters={true}>
        <Col>
          <Row className="heading" noGutters={true}>
            <Col>
              <p>JAY SONALI CO-OP. HSG. SOC LTD</p>
              <p>Regd. No. TNA/(TNA)/HSG/(TC)/19837/2008</p>
              <p>B.P. CROSS ROAD, BHAYANDAR(E), DIST: THANE-401105</p>
            </Col>
          </Row>
          <Row className="bill-details" noGutters={true}>
            <Col lg={6} sm={6} className="vertical-space">
              <Row className="justify-content-between" noGutters={true}>
                <p>Shri/Smt/M/s.:</p>
                <p className="mr-4">{name}</p>
              </Row>
              <Row className="justify-content-between" noGutters={true}>
                <p>Bill for the period of:</p>
                <p>{month}</p>
                <p>{year}</p>
              </Row>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} sm={{span:5, offset:1}}>
              <Row className="justify-content-between" noGutters={true}>
                <p>Bill No.:</p>
                <p>{billNo}</p>
              </Row>
              <Row className="justify-content-between" noGutters={true}>
                <p>Flat/Shop No.:</p>
                <p>{flat}</p>
              </Row>
              <Row className="justify-content-between" noGutters={true}>
                <p>Date:</p>
                <p>{date}</p>
              </Row>
            </Col>
          </Row>
          <Row className="amount-details" noGutters={true}>
            <Col lg={1} sm={1} className="no">
              <p>No</p>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </Col>
            <Col lg={4} sm={4} className="particulars">
              <p>PARTICULARS</p>
              <p>Electricity Charges</p>
              <p>Maintenaince Charges</p>
              <p>Water Charges (MBMC)</p>
              <p>Sinking Fund</p>
              <p>Conveyance dead charges</p>
              <p>Balance c/f</p>
            </Col>
            <Col lg={1} sm={1} className="amount">
              <p>Amount</p>
              <p>0.00</p>
              <p>400.00</p>
              <p>0.00</p>
              <p>0.00</p>
              <p>0.00</p>
              <p>400.00</p>
            </Col>
            <Col lg={1} sm={1} className="no">
              <p>No</p>
              <p>&ensp;</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
            </Col>
            <Col lg={4} sm={4} className="particulars">
              <p>PARTICULARS</p>
              <p>Balance b/f</p>
              <p>Major Repair fund</p>
              <p>Bldng Repair fund</p>
              <p>Sub Latee Charges</p>
              <p>Late fees</p>
              <p>TOTAL</p>
            </Col>
            <Col lg={1} sm={1} className="amount">
              <p>Amount</p>
              <p>400.00</p>
              <p>0.00</p>
              <p>{parseFloat(brf).toFixed(2)}</p>
              <p>{parseFloat(slc).toFixed(2)}</p>
              <p>{parseFloat(interest).toFixed(2)}</p>
              <p>{parseFloat(total).toFixed(2)}</p>
            </Col>
          </Row>
          <Row className="past-amount-details" noGutters={true}>
            <Col lg={{ span: 5, offset: 7 }} sm={{ span: 5, offset: 7 }}>
              <Row className="justify-content-between" noGutters={true}>
                <p>Previous Balance</p>
                <p>{parseFloat(prevBal).toFixed(2)}</p>
              </Row>
              <Row className="justify-content-between" noGutters={true}>
                <p>Less: Payment Received</p>
                <p>{parseFloat(recAmount).toFixed(2)}</p>
              </Row>
            </Col>
          </Row>
          <Row className="amount-total" noGutters={true}>
            <Col lg={{ span: 5, offset: 7 }} sm={{ span: 5, offset: 7 }}>
              <Row className="justify-content-between" noGutters={true}>
                <p>NET TOTAL</p>
                <p>{parseFloat(netTotal).toFixed(2)}</p>
              </Row>
            </Col>
          </Row>
          <Row noGutters={true}>Hon. Secretary/Treasurer</Row>
          <Row className="bill-footer" noGutters={true}>
            <Col lg={6} sm={6}>
              <p>Any objection to bill should be intimated immediately</p>
              <p>
                Payment should be made by cash/cheque within 15 days of the bill
              </p>
              <p>
                Late fees shall be charged @21% P.A. on late &#38; Overdue
                Payments
              </p>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} sm={{ span: 5, offset: 1 }}>
              FOR JAY SONALI CO-OP HSG.SOC.LTD.
            </Col>
          </Row>
          <Row className="bill-sign" noGutters={true}>
            <Col lg={{ span: 5, offset: 7 }}  sm={{ span: 5, offset: 7 }}>
              <p>TREASURER &ensp; &ensp; &ensp; SECREATARY</p>
            </Col>
          </Row>
        </Col>
      </Row>

  );
};
export default bill;
