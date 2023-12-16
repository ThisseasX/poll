const styles = theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  closeIcon: {
    color: 'white',
  },
  inlineIcon: {
    verticalAlign: 'text-bottom',
  },
  tooltip: {
    backgroundColor: 'white',
    width: '100vw',
    height: '100vh',
    maxWidth: 'none',
    maxHeight: 'none',
    margin: 0,
    padding: 0,
    '& > svg': {
      width: '100%',
      height: '100%',
    },
  },
});

export { styles };
