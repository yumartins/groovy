import { useState, useEffect } from 'react';

import { api } from 'groovy-auth';
import Link from 'next/link';

import { H5, P2 } from '../components/Title';
import { CardHome as Card } from '../layouts/Card';
import Carousel from '../layouts/Carousel';
import {
  List,
  View,
  Genres,
  Artists,
  Playlists,
  ListTrack,
  ListAlbums,
  ListAlbumsBottom,
} from '../styles/home';

const Dash = () => {
  const [genres, onGenres] = useState([]);
  const [albums, onAlbums] = useState([]);
  const [artists, onArtists] = useState([]);
  const [playlists, onPlaylists] = useState({});
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

    const getPlaylists = async () => {
      const { data } = await api.get('/browse/featured-playlists', {
        params: {
          country: COUNTRY,
          limit: 4,
        },
      });

      onPlaylists(data);
    };

    getAlbums();
    getGenres();
    getPlaylists();
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

  console.log(playlists);

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
              title="Top Playlists"
              route="/playlists"
            >
              <Playlists>
                {playlists.playlists
                  && playlists.playlists.items.map(({
                    id, name, images, description,
                  }, index) => (
                    <Link
                      key={id}
                      href={`/playlists/${id}`}
                    >
                      <a>
                        <P2>{`0${index + 1}`}</P2>
                        <img src={images[0].url} alt="" />
                        <div>
                          <H5>{name}</H5>
                          <P2 regular>{description}</P2>
                        </div>
                      </a>
                    </Link>
                  ))}
              </Playlists>
            </Card>
          </ListAlbumsBottom>
        </ListAlbums>
        <ListTrack />
      </List>
    </View>
  );
};

export default Dash;
