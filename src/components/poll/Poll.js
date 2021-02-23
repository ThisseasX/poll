import { memo } from 'react';
import { Box, Paper } from '@material-ui/core';
import { CandidateInput, CandidateList } from 'components';

const Poll = () => (
  <Box component={Paper} mt={3} pt={3} pb={2}>
    <CandidateInput />
    <CandidateList />
  </Box>
);

export default memo(Poll);
