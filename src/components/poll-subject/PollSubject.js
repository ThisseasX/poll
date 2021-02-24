import { memo } from 'react';
import { compose } from 'helpers';
import { Box, Paper } from '@material-ui/core';
import { DisplaySubject, ChangeSubject } from './components';
import { withPollSubjectProps } from './withPollSubjectProps';

const PollSubject = ({
  isEditingSubject,
  handleEditStart,
  handleEditEnd,
}) => (
  <Box component={Paper} mt={3} p={3} pr={1}>
    {isEditingSubject ? (
      <ChangeSubject handleEditEnd={handleEditEnd} />
    ) : (
      <DisplaySubject handleEditStart={handleEditStart} />
    )}
  </Box>
);

export default compose(withPollSubjectProps, memo)(PollSubject);
