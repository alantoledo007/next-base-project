import {Container} from '@material-ui/core';
import Section from '../shared/Section';
import styled from 'styled-components';
import TitleAndSubtitle from '../shared/TitleAndSubtitle';
import Carousel from '../shared/Carousel';

const Image = styled.img`
  width: 200px;
`;

const ImageContainer = styled.div`
  position: relative;
  filter: grayscale(100%);
  opacity: 0.2;
  width: 250px !important;
  height: 150px;
  background-color: #f1f1f1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in;
  border-radius: 5px;
  :hover {
    filter: grayscale(20%);
    opacity: 1;
  }
`;

export default function BrandsCarousel({
  items,
  section_props,
  title,
  subtitle,
}) {
  return (
    <Section bgcolor="#fff" {...section_props}>
      <Container>
        {title && <TitleAndSubtitle title={title} subtitle={subtitle} />}
        <Carousel>
          {items?.map((item, key) => (
            <ImageContainer key={key}>
              <Image draggable="false" {...item} />
            </ImageContainer>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
}
