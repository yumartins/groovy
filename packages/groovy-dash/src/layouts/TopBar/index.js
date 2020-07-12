import { useRef, useState } from 'react';
import { ChevronDown } from 'react-feather';

import { useFetch } from 'groovy-hooks';
import Link from 'next/link';

import Input from '../../components/Input';
import { P2 } from '../../components/Title';
import {
  User,
  Item,
  View,
  Form,
  Navigate,
} from './styles';

const TopBar = () => {
  const [selected, onSelected] = useState(0);

  const ref = useRef(null);

  const { data } = useFetch('/me');

  const items = [
    'Music',
    'Podcast',
    'Live',
  ];

  return (
    <View>
      <Navigate>
        {items.map((item, index) => (
          <Item
            as="li"
            key={item}
            onClick={() => onSelected(index)}
            selected={selected === index}
            uppercase
          >
            {item}
          </Item>
        ))}
      </Navigate>

      <Form ref={ref}>
        <Input
          name="search"
          label="Type to here for search"
          hasIcon
          isSearch
        />
      </Form>

      <Link
        href="/profile"
        passHref
      >
        <User>
          <P2>{data?.display_name}</P2>
          <img src={data?.images[0].url} alt="" />
          <ChevronDown />
        </User>
      </Link>
    </View>
  );
};

export default TopBar;
