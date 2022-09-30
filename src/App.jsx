import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Customer from "./components/Customer";

function App() {
  return (
    <>
      <h1 className="text-center">Gym Customer list</h1>
      <div className="App  d-flex align-items-center justify-content-center">
        <Customer />
      </div>
    </>
  );
}

export default App;
