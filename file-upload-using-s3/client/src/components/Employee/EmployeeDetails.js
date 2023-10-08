import React, { useState } from "react";
import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import EditAvatar from "../Forms/EditAvatar/EditAvatar";
import EditFile from "../Forms/EditFile/EditFile";

const EmployeeDetails = ({ employeeData, onSubmit }) => {
  let [employee, setEmployee] = useState(employeeData);

  const onChange = (field, value) => {
    setEmployee((employee) => ({
      ...employee,
      [field]: value,
    }));
  };

  return (
    <div style={{ margin: 10, minWidth: 500 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(employee);
        }}
      >
        <Stack spacing={3} direction="column">
          <Typography variant="h4">Employee Details</Typography>
          <Divider />

          <Stack justifyContent="center" direction="row">
            <EditAvatar
              image={employee.profileImage}
              name={employee.name}
              inputId={"employe-avatar"}
              onChange={(imageLink) => {
                onChange("profileImage", imageLink);
              }}
              prefix={`avatars/${employee.id}`}
            />
          </Stack>
          <TextField
            placeholder="Name"
            value={employee.name}
            label="Name"
            required
            fullWidth
            onChange={(e) => onChange("name", e.target.value)}
          />

          <TextField
            placeholder="Position"
            value={employee.position}
            label="Position"
            required
            onChange={(e) => onChange("position", e.target.value)}
          />

          <TextField
            placeholder="Date of Joining"
            value={employee.dateOfJoining}
            label="Date Of Joining"
            type="date"
            required
            onChange={(e) => onChange("dateOfJoining", e.target.value)}
          />

          <EditFile
            link={employee.govtIdLink}
            label={"Govt ID Document"}
            inputId={"employee-document"}
            accept="application/pdf"
            onChange={(fileLink) => onChange("govtIdLink", fileLink)}
            prefix={`documents/${employee.id}`}
          />

          <div>
            <Button variant="contained" type="submit" fullWidth>
              Save Changes
            </Button>
          </div>
        </Stack>
      </form>
    </div>
  );
};

export default EmployeeDetails;
