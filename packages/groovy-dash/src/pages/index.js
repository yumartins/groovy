import { useState, useEffect } from 'react';

import { api } from 'groovy-auth';

import { CardHome as Card } from '../layouts/Card';
import Carousel from '../layouts/Carousel';
import {
  List,
  View,
  Artist,
  Artists,
  ListTrack,
  ListAlbums,
} from '../styles/home';

const Dash = () => {
  const [albums, onAlbums] = useState([]);
  const [artists, onArtists] = useState([]);
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

  useEffect(() => {
    const listAlbums = albums && albums.slice(0, 5).map((album) => album.artists[0].id).toString();

    const getArtists = async () => {
      const { data } = await api.get('/artists', {
        params: {
          ids: listAlbums || '0',
        },
      });

      onArtists(data.artists);
    };

    getArtists();
  }, [albums]);

  console.log(artists);

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
            >
              <Artists>
                {artists && artists.map(({ id, name, images }) => (
                  <Artist key={id}>
                    <img src={images[0].url} alt="" />
                    <h6>{name}</h6>
                  </Artist>
                ))}
              </Artists>
            </Card>
          </ListAlbums>
          <ListTrack />
        </List>
      </View>
    )
  );
};

export default Dash;
