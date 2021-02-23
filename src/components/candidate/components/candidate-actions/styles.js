const styles = theme => ({
  buttonActive: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    '& svg': {
      color: 'white',
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  button: {
    height: '36px',
    width: '36px',
    '&:not(:first-child)': {
      marginLeft: '8px',
    },
  },
});

export { styles };
