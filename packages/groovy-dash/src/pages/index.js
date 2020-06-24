import { useState, useEffect } from 'react';

import { api } from 'groovy-auth';
import Link from 'next/link';

import { H5 } from '../components/Title';
import { CardHome as Card } from '../layouts/Card';
import Carousel from '../layouts/Carousel';
import {
  List,
  View,
  Genres,
  Charts,
  Artists,
  ListTrack,
  ListAlbums,
  ListAlbumsBottom,
} from '../styles/home';

const Dash = () => {
  const [genres, onGenres] = useState([]);
  const [albums, onAlbums] = useState([]);
  const [artists, onArtists] = useState([]);
  const [selectedAlbum, onSelectedAlbum] = useState(0);

  const COUNTRY = 'BR';

  useEffect(() => {
    const getAlbums = async () => {
      const { data } = await api.get('/browse/new-releases', {
        params: {
          country: COUNTRY,
        },
      });

      onAlbums(data.albums.items);
    };

    const getGenres = async () => {
      const { data } = await api.get('/browse/categories', {
        params: {
          country: COUNTRY,
        },
      });

      onGenres(data.categories.items);
    };

    getAlbums();
    getGenres();
  }, []);

  useEffect(() => {
    const getArtists = async () => {
      const listAlbums = albums && albums.slice(0, 5).map((album) => album.artists[0].id).toString();

      if (listAlbums) {
        const { data } = await api.get('/artists', {
          params: {
            ids: listAlbums,
          },
        });

        onArtists(data.artists);
      }
    };

    getArtists();
  }, [albums]);

  return (
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
            <Artists
              title="Top Artists"
              route="/artists"
            >
              {artists && artists.map(({
                id,
                name,
                genres: categories,
                images,
              }) => (
                <Link
                  key={id}
                  href={`/artists/${id}`}
                >
                  <a>
                    <img src={images[0].url} alt="" />
                    <span>{categories[0]}</span>
                    <H5>{name}</H5>
                  </a>
                </Link>
              ))}
            </Artists>
          </Card>

          <ListAlbumsBottom>
            <Card
              title="Genres"
              route="/genres"
            >
              <Genres>
                {genres && genres.slice(0, 4).map(({ id, name, icons }) => (
                  <Link
                    key={id}
                    href={`/genres/${id}`}
                  >
                    <a>
                      <img src={icons[0].url} alt="" />
                      <H5>{name}</H5>
                    </a>
                  </Link>
                ))}
              </Genres>
            </Card>

            <Card
              title="Top Charts"
              route="/charts"
            >
              <Charts />
            </Card>
          </ListAlbumsBottom>
        </ListAlbums>
        <ListTrack />
      </List>
    </View>
  );
};

export default Dash;
