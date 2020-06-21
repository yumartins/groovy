import { useState, useEffect } from 'react';

import { api } from 'groovy-auth';

import { CardHome as Card } from '../layouts/Card';
import Carousel from '../layouts/Carousel';
import {
  List,
  View,
  ListTrack,
  ListAlbums,
} from '../styles/home';

const Dash = () => {
  const [albums, onAlbums] = useState([]);
  const [selectedAlbum, onSelectedAlbum] = useState(0);

  useEffect(() => {
    const getAlbums = async () => {
      const { data } = await api.get('/browse/new-releases', {
        params: {
          country: 'US',
        },
      });

      onAlbums(data.albums.items);
    };

    getAlbums();
  }, []);

  return (
    (
      <View>
        <Carousel
          items={albums}
          selected={selectedAlbum}
          onSelected={onSelectedAlbum}
        />

        <List>
          <ListAlbums>
            <Card
              title="Top Artists"
              route="/artists"
            />
          </ListAlbums>
          <ListTrack />
        </List>
      </View>
    )
  );
};

export default Dash;
