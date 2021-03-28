import {Box, Button, Container, Grid, Typography} from '@material-ui/core';
import Section from '../shared/Section';

export default function Cover(props) {
  const {
    title,
    title_props,
    text,
    text_props,
    primary_button_text,
    secondary_button_text,
    primary_button_props,
    secondary_button_props,
    MediaArea,
    grid_props,
    container_props,
  } = props;

  return (
    <Section>
      <Container {...container_props}>
        <Grid alignItems="center" container spacing={3} {...grid_props}>
          <Grid item md={6} xs={12}>
            <Typography variant="h3" paragraph component="h1" {...title_props}>
              {title}
            </Typography>
            <Typography variant="body1" paragraph component="p" {...text_props}>
              {text}
            </Typography>
            {primary_button_text && (
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    component="a"
                    fullWidth={!!secondary_button_text}
                    {...primary_button_props}>
                    {primary_button_text}
                  </Button>
                </Grid>
                {secondary_button_text && (
                  <Grid item xs={12} sm={6}>
                    <Button
                      size="large"
                      variant="outlined"
                      color="primary"
                      component="a"
                      fullWidth
                      {...secondary_button_props}>
                      {secondary_button_text}
                    </Button>
                  </Grid>
                )}
              </Grid>
            )}
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display="flex" justifyContent="center">
              {MediaArea}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
