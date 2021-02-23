import { memo } from 'react';
import { compose } from 'helpers';
import { Box, Paper } from '@material-ui/core';
import { ChangePoll, DisplayPoll } from './components';
import { withPollNameProps } from './withPollNameProps';

const PollName = ({ isEditing, handleEdit }) => (
  <Box component={Paper} mt={3} p={3} pr={1}>
    {isEditing ? (
      <ChangePoll />
    ) : (
      <DisplayPoll handleEdit={handleEdit} />
    )}
  </Box>
);

export default compose(withPollNameProps, memo)(PollName);
