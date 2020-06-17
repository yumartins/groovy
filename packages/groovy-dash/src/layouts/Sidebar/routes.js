import {
  Mic,
  Disc,
  Play,
  Music,
  Radio,
  Heart,
  Folder,
  Volume1,
} from 'react-feather';

const routes = [
  {
    label: 'Menu',
    items: [
      {
        icon: <Music />,
        name: 'Explore',
        route: '/',
      },
      {
        icon: <Volume1 />,
        name: 'Genres',
        route: '/genres',
      },
      {
        icon: <Disc />,
        name: 'Albums',
        route: '/albums',
      },
      {
        icon: <Mic />,
        name: 'Artists',
        route: '/artists',
      },
      {
        icon: <Radio />,
        name: 'Radio',
        route: '/radio',
      },
    ],
  },
  {
    label: 'Library',
    items: [
      {
        icon: <Heart />,
        name: 'Favorites',
        route: '/favorites',
      },
      {
        icon: <Play />,
        name: 'Playlists',
        route: '/playlists',
      },
      {
        icon: <Folder />,
        name: 'Local',
        route: '/local',
      },
    ],
  },
];

export default routes;
