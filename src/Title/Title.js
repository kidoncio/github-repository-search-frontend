import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

export default function Title(props) {
  const theme = useTheme();
  const componentColor = theme.palette.type === 'dark' ? 'secondary' : 'primary';

  return (
    <Typography
      color={componentColor}
      component="h2"
      gutterBottom
      variant="h6"
    >
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node
};
