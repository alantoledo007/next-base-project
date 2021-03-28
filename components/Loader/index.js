import {Box} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loader() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh">
      <CircularProgress />
    </Box>
  );
}
