import React from "react";
import "./styles.css";
import { DataGrid } from "@mui/x-data-grid";
import Radio from "@mui/material/Radio";

const rows = [
  { id: 1, firstName: "Javier", lastName: "Obrien" },
  { id: 2, firstName: "Kate", lastName: "Miles" },
  { id: 3, firstName: "Kim", lastName: "Jimenez" },
  { id: 4, firstName: "Juana", lastName: "Thornton" },
  { id: 5, firstName: "Prashant", lastName: "Jangam" }
];
let radioChecked = [rows[0].id];
const columns = [
  {
    field: "radiobutton",
    headerName: "",
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <Radio checked={radioChecked[0] === params.id} value={params.id} />
    )
  },
  {
    field: "id",
    headerName: "ID"
  },
  {
    field: "firstName",
    headerName: "First Name",
    width: 150
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 150
  }
];
export default function App() {
  const [selectionModel, setSelectionModel] = React.useState(radioChecked);
  radioChecked = selectionModel;

  const selectedRow = rows.filter((item) => {
    return item.id === selectionModel[0];
  });

  return (
    <div className="App">
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        selectionModel={selectionModel}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
      />
      <div style={{ marginTop: "40px" }}>
        You have selected: {selectedRow[0].firstName} {selectedRow[0].lastName}
      </div>
    </div>
  );
}
