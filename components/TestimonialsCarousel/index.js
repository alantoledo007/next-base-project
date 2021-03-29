import {
  Avatar,
  Card,
  CardContent,
  Container,
  Typography,
} from '@material-ui/core';
import Section from '../shared/Section';
import styled from 'styled-components';
import TitleAndSubtitle from '../shared/TitleAndSubtitle';
import Carousel from '../shared/Carousel';

const CustomAvatar = styled(Avatar)`
  width: 74px !important;
  height: 74px !important;
  margin: auto;
`;

export default function TestiminialsCarousel({
  items,
  section_props,
  title,
  subtitle,
}) {
  return (
    <Section bgcolor="#fff" {...section_props}>
      <Container>
        {title && <TitleAndSubtitle title={title} subtitle={subtitle} />}
        <Carousel
          breakPoints={[
            {width: 1, itemsToShow: 1},
            {width: 550, itemsToShow: 2},
          ]}>
          {items?.map((item, key) => (
            <Card key={key}>
              <CustomAvatar loading="lazy" {...item.avatar} />
              <CardContent>
                <Typography align="center" variant="h5" component="h4">
                  {item.name}
                </Typography>
                <blockquote>
                  <Typography variant="body1" align="center" component="p">
                    <em>"{item.text}"</em>
                  </Typography>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
}
