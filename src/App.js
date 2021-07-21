import { useState, useEffect } from "react";
import "./App.css";
import Bill from "./bill";
import DetailsForm from "./detailsForm";
import MetaDetailsForm from "./metaDetailsForm";
import { Button } from "react-bootstrap";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [billIndex, setBillIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [data, setData] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [displayOk, setDisplayOk] = useState(true);

  useEffect(() => {
    fetch("https://bill-251a9-default-rtdb.firebaseio.com/billsData.json")
      .then((res) => res.json())
      .then((prevData) => {
        const { data, metaData } = prevData;
        setData(data);
        setMetaData(metaData);
      })
      .then((_) => setLoading(false))
      .catch((err) => {
        console.log(err);
        alert("Failed to fetch data, please check console.");
      });
  }, []);

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

  const submitData = () => {
    const sure = window.confirm("Update the data in database?");
    if (!sure) return;
    fetch("https://bill-251a9-default-rtdb.firebaseio.com/billsData.json", {
      method: "PUT",
      body: JSON.stringify({ data, metaData }),
    })
      .then((res) => res.json())
      .then((_) => {
        setDisplayOk(false);
        alert("Database updated, you may print the bills.");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong, please check console.");
      });
  };

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : completed ? (
        <>
          {data.map((billDetails, index) => (
            <Bill
              billDetails={billDetails}
              metaData={metaData}
              billNo={+metaData.lastBillNo + index + 1}
              key={index}
            />
          ))}
          {displayOk && (
            <>
              <Button variant="light" onClick={()=>setCompleted(false)}>
                BACK
              </Button>
              <Button className="ml-4" variant="dark" onClick={submitData}>
                OK
              </Button>
            </>
          )}
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
