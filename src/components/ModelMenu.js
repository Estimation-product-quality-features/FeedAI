import * as React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function ModelMenu() {
  const [model, setModel] = React.useState('');

  const handleChange = (event) => {
    setModel(event.target.value);
  };

  return (
    <Box sx={{height:'auto', width: 'auto'}}>
        <FormControl fullWidth variant="filled" color='inherit'>
            <InputLabel id="modelInput">Select model</InputLabel>
            <Select
                labelId="modelLabel"
                id="modelID"
                value={model}
                label="Model"
                displayEmpty
                variant="filled"
                color='inherit'
                onChange={handleChange}
                
            >
                <MenuItem value={10}>SSD mobilenetV1</MenuItem>
                <MenuItem value={20}>RCNN</MenuItem>
            </Select>
        </FormControl>
    </Box>
  );
}