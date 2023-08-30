import "./App.css";
import EmployeeDetails from "./components/EmployeeDetails";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <EmployeeDetails
          employeeData={{
            name: "Umakant Vashishtha",
            profileImage: null,
            govtIdLink: null,
            position: "Software Engineer",
            dateOfJoining: "2023-08-30",
          }}
          onSubmit={(employeeData) => {
            console.log(employeeData);
          }}
        />
      </Container>
    </div>
  );
}

export default App;
