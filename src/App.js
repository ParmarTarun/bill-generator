import { useState } from "react";
import "./App.css";
import initialData from "./Data/data.json";
import initialMetaData from "./Data/metaData.json";
import Bill from "./bill";
import DetailsForm from "./detailsForm";
import MetaDetailsForm from "./metaDetailsForm";
import { Button } from "react-bootstrap";

const App = () => {
  const [billIndex, setBillIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [data, setData] = useState(initialData);
  const [metaData, setMetaData] = useState(initialMetaData);

  const dataCollector = (key, val) => {
    const newData = data.map((item, i) => {
      return i === billIndex ? { ...item, [key]: val } : item;
    });
    setData(newData);
  };
  const metaDataCollector = (key, val) => {
    setMetaData((prev) => {
      return { ...prev, [key]: val };
    });
  };

  const next = (newBill) => {
    let newData = data;
    newData[billIndex] = newBill;
    setData(newData);
    if (billIndex === 42) setCompleted(true);
    else setBillIndex((prev) => prev + 1);
  };

  const previous = () => {
    if (billIndex === 0) return;
    else setBillIndex((prev) => prev - 1);
  };

  const submitData = () => {};

  return (
    <div className="App">
      {completed ? (
        <>
          {data.map((billDetails, index) => (
            <Bill
              billDetails={billDetails}
              metaData={metaData}
              billNo={+metaData.lastBillNo + index + 1}
              key={index}
            />
          ))}
          <Button variant="dark" onClick={submitData}>
            OK
          </Button>
        </>
      ) : (
        <>
          <MetaDetailsForm {...{ metaData, metaDataCollector }} />
          <DetailsForm
            {...{ dataCollector, billIndex, previous, next, completed }}
            data={data[billIndex]}
          />
        </>
      )}
    </div>
  );
};

export default App;
