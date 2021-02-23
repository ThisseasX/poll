import { memo } from 'react';
import { Box, Paper } from '@material-ui/core';
import { CandidateTitle, CandidateActions } from './components';

const Candidate = ({ candidateId, title, votes }) => (
  <Box component={Paper} p={2} pr={1} display={'flex'} alignItems={'center'}>
    <CandidateTitle title={title} votes={votes} />
    <CandidateActions candidateId={candidateId} />
  </Box>
);

export default memo(Candidate);
