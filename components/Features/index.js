import {Box, Container, Grid, Paper, Typography} from '@material-ui/core';
import Section from '../shared/Section';
import Image from 'next/image';
import TitleAndSubtitle from '../shared/TitleAndSubtitle';

const Feature = ({item: {img, title, text}}) => {
  return (
    <Grid item xs={12} sm={6} md={4} elevation={1}>
      <Paper css={{height: '100%'}}>
        <Box p={3}>
          {img && (
            <Box display="flex" mb={2} justifyContent="center">
              <Image width="128" height="128" {...img} />
            </Box>
          )}
          <Typography variant="h6" component="h4" paragraph align="center">
            {title}
          </Typography>
          <Typography variant="body1" component="p" align="center">
            {text}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default function Features({items, title, subtitle}) {
  return (
    <Section>
      <Container>
        {title && <TitleAndSubtitle title={title} subtitle={subtitle} />}
        <Grid container spacing={3}>
          {items?.map((item, key) => (
            <Feature item={item} key={key} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
