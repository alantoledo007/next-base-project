import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useState} from 'react';
import Section from '../shared/Section';
import {Box, Container} from '@material-ui/core';
import TitleAndSubtitle from '../shared/TitleAndSubtitle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function FrequentQuestions({items, title, subtitle}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Section>
      <Container>
        {title && <TitleAndSubtitle title={title} subtitle={subtitle} />}
        {items?.map((item, key) => (
          <Accordion
            expanded={expanded === `panel${key}`}
            onChange={handleChange(`panel${key}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${key}bh-content`}
              id={`panel${key}bh-header`}>
              <Typography className={classes.heading} component="h4">
                {item.title}
              </Typography>
              {item.subtitle && (
                <Typography
                  className={classes.secondaryHeading}
                  component="span">
                  {item.subtitle}
                </Typography>
              )}
            </AccordionSummary>
            <AccordionDetails>
              <Box>{item.content}</Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Section>
  );
}
