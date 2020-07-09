import { useRef, useCallback } from 'react';
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
  const ref = useRef(null);

  // console.log(ref.current !== null && ref.current.swiper !== null && ref.current);

  const params = {
    slidesPerView: slidesPerPage,
    // slidesPerGroup: slidesPerPage,
    spaceBetween: 16,
    speed: 1600,
    loop: true,
    rebuildOnUpdate: true,
    centeredSlides: true,
    grabCursor: true,
  };

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };

  const renderItem = useCallback(({
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
  }, [route]);

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
          <Swiper ref={ref} {...params}>
            {items.map(renderItem)}
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
