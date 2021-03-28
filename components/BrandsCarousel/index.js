import {Box, Container, Fab} from '@material-ui/core';
import BaseCarousel, {consts} from 'react-elastic-carousel';
import Section from '../shared/Section';
import styled from 'styled-components';
import {
  ArrowBackIos,
  ArrowBackRounded,
  ArrowForwardIos,
  ArrowForwardRounded,
} from '@material-ui/icons';

const CustomCarousel = styled(BaseCarousel)`
  justify-content: space-between;
  .rec-slider-container {
    .rec-slider {
      .rec-carousel-item {
        div {
          outline: none;
        }
      }
    }
  }
`;

const Image = styled.img`
  width: 200px;
`;

const ImageContainer = styled.div`
  position: relative;
  filter: grayscale(100%);
  opacity: 0.2;
  width: 250px;
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

export default function Carousel({items, section_props}) {
  return (
    <Section bgcolor="#fff" {...section_props}>
      <Container>
        <CustomCarousel
          renderArrow={Arrow}
          renderPagination={Pagination}
          breakPoints={[
            {width: 1, itemsToShow: 1},
            {width: 550, itemsToShow: 2, itemsToScroll: 2},
            {width: 850, itemsToShow: 4, itemsToScroll: 2},
            {width: 1450, itemsToShow: 5},
            {width: 1750, itemsToShow: 6},
          ]}>
          {items?.map((item, key) => (
            <ImageContainer key={key}>
              <Image draggable="false" {...item} />
            </ImageContainer>
          ))}
        </CustomCarousel>
      </Container>
    </Section>
  );
}

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Arrow = ({type, onClick, isEdge}) => {
  return (
    <ArrowContainer>
      <Fab color="primary" onClick={onClick} disabled={isEdge}>
        {type === consts.PREV ? <ArrowBackRounded /> : <ArrowForwardRounded />}
      </Fab>
    </ArrowContainer>
  );
};

const Circle = styled(Box)`
  padding: 10px;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  transition: all 0.4s ease-in;
  opacity: 0.8;
`;

const Pagination = ({pages, activePage, onClick}) => {
  return (
    <Box display="flex" justifyContent="center" width="100%" direction="row">
      {pages.map((page) => {
        const isActivePage = activePage === page;
        return (
          <Circle
            mx={1}
            mt={2}
            shadow={1}
            bgcolor={isActivePage ? 'primary.main' : '#e1e1e1'}
            key={page}
            onClick={() => onClick(page)}
            component="span"
          />
        );
      })}
    </Box>
  );
};
