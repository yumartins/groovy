import { Heart } from 'react-feather';

import { textReduce } from 'groovy-hooks';
import Link from 'next/link';
import {
  func,
  number,
  object,
  arrayOf,
} from 'prop-types';

import Button from '../../components/Button';
import { H1, H6 } from '../../components/Title';
import {
  View,
  Image,
  Items,
  Bullet,
  Content,
  Bullets,
} from './styles';

const Carousel = ({
  items,
  selected,
  onSelected,
}) => (
  <View>
    <H6 uppercase>Trending New Hits</H6>

    {items.map(({
      id,
      name,
      images,
      artists,
    }, index) => (
      <Items
        key={id}
        selected={selected === index}
        data-active={index === selected}
      >
        <Content>
          <H6 uppercase>{artists && artists[0].name}</H6>
          <H1>{textReduce(name, 36)}</H1>

          <div>
            <Link href="/listen">
              <a>
                <Button
                  size="lg"
                  label="Listen Now"
                  appearance="primary"
                />
              </a>
            </Link>

            <Button
              size="lg"
              appearance="secondary"
              hasIcon
            >
              <Heart />
            </Button>
          </div>
        </Content>

        <Image src={images && images[0].url} alt="" />
      </Items>
    ))}

    <Bullets>
      {items && items.slice(0, 5).map((item, index) => (
        <Bullet
          key={item.id}
          aria-label="bullet"
          type="button"
          onClick={() => onSelected(index)}
          selected={selected === index}
        />
      ))}
    </Bullets>
  </View>
);

Carousel.propTypes = {
  items: arrayOf(object),
  selected: number,
  onSelected: func,
};

Carousel.defaultProps = {
  items: [{}],
  selected: 0,
  onSelected: () => {},
};

export default Carousel;
