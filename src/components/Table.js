import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import packageStore from '../data/packageStore';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { observer } from "mobx-react-lite"




const PackageTable = observer(() => {

  return (<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">trackingNumber</TableCell>
            <TableCell align="right">collected</TableCell>
            <TableCell align="right">lat</TableCell>
            <TableCell align="right">lng</TableCell>
            <TableCell align="right">delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {packageStore.data.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.trackingNumber}</TableCell>
              <TableCell align="right">{row.collected}</TableCell>
              <TableCell align="right">{row.lat}</TableCell>
              <TableCell align="right">{row.lng}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete" onClick={packageStore.delete(row.key)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
})
export default PackageTable
