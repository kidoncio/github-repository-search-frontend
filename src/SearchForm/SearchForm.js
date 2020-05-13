import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CustomizedSelects() {
  const classes = useStyles();

  const [sortBy, setSortBy] = React.useState('stars');
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.margin}>
        <TextField
          defaultValue="JavaScript"
          id="language"
          label="Language"
          variant="outlined"
        />
      </FormControl>

      <FormControl className={classes.margin}>
        <TextField
          defaultValue=""
          id="name"
          label="Repository name"
          variant="outlined"
        />
      </FormControl>

      <FormControl
        className={classes.formControl}
        variant="outlined"
      >
        <InputLabel id="sort-by-label">
            Sort by
        </InputLabel>

        <Select
          id="sort-by"
          label="Sort by"
          labelId="demo-simple-select-outlined-label"
          onChange={handleSortByChange}
          value={sortBy}
        >
          <MenuItem value={'stars'}>Stars</MenuItem>
          <MenuItem value={'forks'}>Forks</MenuItem>
          <MenuItem value={'help-wanted-issues'}>Help wanted issues</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}