import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddPackage from './add';
import Box from '@mui/material/Box';

export default function AddCard() {
  return (
    <Box sx={{ p: 2, display: "flex",justifyContent:"center",alignItem:"center", width: "98vw", height: "90vh" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://img.freepik.com/free-photo/belly-band-embossed-box-mockup-design_23-2149783121.jpg"
        />
        <CardContent>
          <AddPackage />
        </CardContent>
      </Card>
    </Box>
  );
}
