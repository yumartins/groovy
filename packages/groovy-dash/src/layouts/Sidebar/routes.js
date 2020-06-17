import {
  Mic,
  Disc,
  Grid,
  Radio,
  Volume1,
} from 'react-feather';

const routes = [
  {
    label: 'Menu',
    items: [
      {
        icon: <Grid />,
        name: 'Explore',
      },
      {
        icon: <Volume1 />,
        name: 'Genres',
      },
      {
        icon: <Disc />,
        name: 'Albums',
      },
      {
        icon: <Mic />,
        name: 'Artists',
      },
      {
        icon: <Radio />,
        name: 'Radio',
      },
    ],
  },
];

export default routes;
