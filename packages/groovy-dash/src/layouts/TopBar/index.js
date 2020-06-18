import { useRef, useState, useEffect } from 'react';
import { ChevronDown } from 'react-feather';

import { api } from 'groovy-auth';

import Input from '../../components/Input';
import {
  User,
  Item,
  View,
  Form,
  Navigate,
} from './styles';

const TopBar = () => {
  const [me, onMe] = useState({});
  const [selected, onSelected] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await api.get('/me');

      onMe(data);
    };

    getUser();
  }, []);

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
            key={item}
            onClick={() => onSelected(index)}
            selected={selected === index}
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

      <User>
        <span>{me.display_name}</span>
        <img src={me.images && me.images[0].url} alt="" />
        <ChevronDown />
      </User>
    </View>
  );
};

export default TopBar;
