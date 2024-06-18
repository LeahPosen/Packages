import * as React from 'react';
import { observer } from "mobx-react-lite"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useForm } from "react-hook-form"
import Button from '@mui/material/Button';
import { FormControl } from '@mui/base/FormControl';
import packageStore from '../data/packageStore';
import { useNavigate } from "react-router-dom"

const AddPackage = observer(() => {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()

  function add(data) {
    data = {...data,id:packageStore.data.length*5}
    console.log(JSON.stringify(data))
    packageStore.add(data)
    navigate("/");
    reset()
  }
  return (

    <form on onSubmit={handleSubmit(add)}>
      <FormControl>
        <Box
          height={"100%"}
          width={"80%"}
          my={4}
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap={1}
          p={2}
          sx={{ border: '2px solid grey' }}
        >

        <TextField
          id="outlined-required"
          label="Name"
          {...register("name")}
        />
        <TextField
          id="outlined-required"
          label="Tracking Number"
          {...register("trackingNumber")}

        />
        <TextField
          id="outlined-required"
          label="Lat"
          {...register("lat")}
        />
        <TextField
          id="outlined-required"
          label="Lng"
          {...register("lng")}
        />
        <FormControlLabel control={<Checkbox />} label="Collceted" {...register("collected")}
        />
        <Button type="submit" variant="contained">Contained</Button>
        </Box>
      </FormControl>

    </form>
  );
})
export default AddPackage



