import "./App.css";
import data from "./Data/data.json";
import metaData from "./Data/metaData.json";
import Bill from "./bill";

const App = () => {
  return (
    <div className="App">
      {data.map((bill, index) => (
        <Bill
          bill={bill}
          metaData={metaData}
          billNo={metaData.lastBillNo + index + 1}
          key={index}
        />
        // <h4>{bill.name}</h4>
      ))}
    </div>
  );
};

export default App;
