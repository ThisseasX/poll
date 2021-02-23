import { memo } from 'react';
import { compose, withModelProps } from 'helpers';
import { Box, Container } from '@material-ui/core';
import { Poll, PollName, PollSubject } from 'components';
import { setUserId, setPollId } from 'models/app';
import { withMainProps } from './withMainProps';

const Main = () => (
  <Container component={'main'} maxWidth={'xs'}>
    <Box pb={3}>
      <PollName />
      <PollSubject />
      <Poll />
    </Box>
  </Container>
);

export default compose(
  withModelProps({ setUserId, setPollId }),
  withMainProps,
  memo,
)(Main);
