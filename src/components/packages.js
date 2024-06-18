import * as React from "react"
import DeleteIcon from "@mui/icons-material/Delete"
import { IconButton } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import packageStore from '../data/packageStore';
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';

const Packages = observer(() => {

  const navigate = useNavigate()
  function change(data) {
    console.log(data)
    packageStore.update(data.id)
  }
  function isCollected(id) {
    return packageStore.getById(id).collected
  }
  const columns = [
    { field: "name", headerName: "name", width: 90 },
    { field: "trackingNumber", headerName: "trackingNumber", width: 90 },
    { field: "lat", headerName: "lat", width: 150 },
    { field: "lng", headerName: "lng", width: 150 },
    {
      field: "delete",
      headerName: "delete",
      width: 100,
      renderCell: (params) => (
        <strong>
          <IconButton
            onClick={() => {
              packageStore.delete(params.id)
              //window.location.reload()
            }}
          >
            <DeleteIcon />
          </IconButton>
        </strong>
      ),
    },
    {
      field: "map",
      headerName: "show in map",
      width: 100,
      renderCell: (params) => (
        <strong>
          <IconButton
            onClick={() => {
              navigate(`/map/${params.id}`)
            }}
          >
            <LocationOnIcon />
          </IconButton>
        </strong>
      ),
    },
    {
      field: "changeCollected",
      headerName: "collected",
      width: 100,
      renderCell: (params) => (
        <strong>
          {isCollected(params.id) && <FormControlLabel control={<Checkbox defaultChecked />} onClick={() => change(params)} />}
          {!isCollected(params.id) && <FormControlLabel control={<Checkbox />} onClick={() => change(params)} />}
        </strong>
      ),
    },

  ]
  return (
    <React.Fragment>
      <Box sx={{ p: 2, display: "flex", justifyContent: "center", alignItem: "center", width: "98vw", height: "90vh" }}>
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", width: "50vw", height: "90vh" }}>
          <Button variant="outlined" onClick={() => navigate("/add")}>Add package</Button>
          <Box sx={{ p: 2, display: "flex", flexDirection: "row" }}>
            <Typography variant="h6" gutterBottom>
              Sum of packages: {packageStore.data.length} |
            </Typography>
            <Typography variant="h6" gutterBottom>
              | Sum of collected packages: {packageStore.data.filter(d => d.collected).length}
            </Typography>
          </Box>
          <div style={{ width: "100%" }}>
            <DataGrid rows={packageStore.data} columns={columns} slots={{ toolbar: GridToolbar }} />
          </div>
        </Box>
      </Box>

    </React.Fragment>

  );
})

export default Packages