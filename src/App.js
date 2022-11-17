import './App.css';
import TableauReport from "tableau-react";

function App() {
  return (
    <div className="App">
      <div>
        <h1> Data 1 </h1>
        <TableauReport url="https://10az.online.tableau.com/t/priya228/views/tableau-Book1_test/Test_Dashboard1" />
      </div>
    </div>
  );
}

export default App;
