import { useRef } from 'react';

import Link from 'next/link';
import {
  object,
  number,
  string,
  arrayOf,
} from 'prop-types';

import { H5, P2 } from '../../../components/Title';
import CardHome from '../../Card';
import { View, Carousel } from './styles';

const Card = ({
  route,
  title,
  items,
  slidesPerPage,
}) => {
  const slider = useRef(null);

  const settings = {
    infinite: true,
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    speed: 500,
    slidesToShow: slidesPerPage,
    swipeToSlide: true,
  };

  return (
    <CardHome
      title={title}
      route={route}
    >
      <View>
        <button
          type="button"
          onClick={() => slider.current.slickPrev()}
        >
          Prev
        </button>

        <Carousel
          {...settings}
          ref={slider}
        >
          {items && items.map(({
            id,
            name,
            icons,
            genres,
            images,
            description,
          }) => (
            <Link
              key={id}
              href={`${route}/${id}`}
            >
              <a>
                <img src={images[0].url || icons[0].url} alt="" />
                <div>
                  <H5>{name}</H5>
                  {genres && <span>{genres[0]}</span>}
                  {description && <P2 regular>{description}</P2>}
                </div>
              </a>
            </Link>
          ))}
        </Carousel>

        <button
          type="button"
          onClick={() => slider.current.slickNext()}
        >
          Next
        </button>
      </View>
    </CardHome>
  );
};

Card.propTypes = {
  route: string,
  title: string,
  items: arrayOf(object),
  slidesPerPage: number,
};

Card.defaultProps = {
  route: '',
  title: '',
  items: [{}],
  slidesPerPage: 4,
};

export default Card;
