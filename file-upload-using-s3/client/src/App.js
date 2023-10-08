import "./App.css";
import Container from "@mui/material/Container";
import EmployeeForm from "./components/Employee/EmployeeForm";

function App() {
  return (
    <div className="App">
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <EmployeeForm />
      </Container>
    </div>
  );
}

export default App;
