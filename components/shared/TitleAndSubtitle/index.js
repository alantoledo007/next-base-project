import {Box, Typography} from '@material-ui/core';

export default function TitleAndSubtitle({title, subtitle}) {
  return (
    <Box mb={2}>
      <Typography variant="h5" align="center" component="h2">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="overline" align="center" component="h2">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
