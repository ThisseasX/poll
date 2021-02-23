const styles = {
  candidateList: {
    '& > *:not(:last-child)': {
      marginBottom: '16px',
    },
    // maxHeight: 'calc(100vh - 558px)',
    // overflow: 'hidden',
    // '&:hover': {
    //   overflow: 'overlay',
    // },
  },

  '@media (max-width: 1024px)': {
    candidateList: {
      overflow: 'auto',
      '&:hover': {
        overflow: 'auto',
      },
    },
  },
};

export { styles };
