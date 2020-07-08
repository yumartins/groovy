import { useState } from 'react';
import Swiper from 'react-id-swiper';

import Link from 'next/link';
import {
  object,
  number,
  string,
  arrayOf,
} from 'prop-types';

import { H5, P2 } from '../../../components/Title';
import CardHome from '../../Card';
import { View, Item } from './styles';

const Card = ({
  route,
  title,
  items,
  slidesPerPage,
}) => {
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const params = {
    slidesPerView: slidesPerPage,
    centeredSlides: true,
    spaceBetween: 16,
  };

  return (
    <CardHome
      title={title}
      route={route}
    >
      <View>
        <button
          type="button"
          onClick={goPrev}
        >
          Prev
        </button>

        {items.length > 0 && (
          <Swiper
            {...params}
            getSwiper={updateSwiper}
          >
            {items.map(({
              id,
              name,
              icons,
              genres,
              images,
              description,
            }) => {
              const image = images ? images[0].url : icons ? icons[0].url : '';

              return (
                <Item key={id}>
                  <Link href={`${route}/${id}`}>
                    <a>
                      <img src={image} alt="" />
                      <div>
                        <H5>{name}</H5>
                        {genres && <span>{genres[0]}</span>}
                        {description && <P2 regular>{description}</P2>}
                      </div>
                    </a>
                  </Link>
                </Item>
              );
            })}
          </Swiper>
        )}

        <button
          type="button"
          onClick={goNext}
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
