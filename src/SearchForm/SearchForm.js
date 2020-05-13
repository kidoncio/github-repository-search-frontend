import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { TextField, Button, Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  sortByForm: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  searchButton: {
    margin: theme.spacing(1),
    minWidth: 120,
    minHeight: 56,
  }
}));

export default function CustomizedSelects() {
  const classes = useStyles();

  const [sortBy, setSortBy] = React.useState('stars');
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const theme = useTheme();
  const componentColor = theme.palette.type === 'dark' ? 'secondary' : 'primary';

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
        className={classes.sortByForm}
        variant="outlined"
      >
        <InputLabel id="sort-by-label">
            Sort by
        </InputLabel>

        <Select
          id="sort-by"
          label="Sort by"
          labelId="sort-by-label"
          onChange={handleSortByChange}
          value={sortBy}
        >
          <MenuItem value={'stars'}>Stars</MenuItem>
          <MenuItem value={'forks'}>Forks</MenuItem>
          <MenuItem value={'help-wanted-issues'}>Help wanted issues</MenuItem>
        </Select>
      </FormControl>

      <Button
        className={classes.searchButton}
        color={componentColor}
        variant="outlined"
      >
        Search
      </Button>
    </div>
  );
}