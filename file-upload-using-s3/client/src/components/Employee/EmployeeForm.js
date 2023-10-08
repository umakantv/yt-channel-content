import React from "react";
import EmployeeDetails from "./EmployeeDetails";

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = React.useState({
    id: "1234abcd",
    name: "Umakant Vashishtha",
    profileImage:
      "https://yt-file-upload-tutorial.s3.ap-south-1.amazonaws.com/public/test/image/profile.png",
    govtIdLink: null,
    position: "Software Engineer",
    dateOfJoining: "2023-10-01",
  });

  const saveEmployee = React.useCallback((employeeData) => {
    console.log(employeeData);

    // API call to save employee
    setEmployeeData(employeeData);
  }, []);

  return (
    <EmployeeDetails employeeData={employeeData} onSubmit={saveEmployee} />
  );
};

export default EmployeeForm;
