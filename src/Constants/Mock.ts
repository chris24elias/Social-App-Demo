import {User, PostInterface} from './types';

export const MOCK_USERS: User[] = [
  {
    name: 'andrea.schmidt',
    profile_picture:
      'https://firebasestorage.googleapis.com/v0/b/react-native-e.appspot.com/o/6e37e1c924aa55072f25e47ede573285a6fb69bf.png?alt=media&token=ae4e9186-91b8-4748-963a-02138a3e395c',
    bio: 'I love traveling :)',
    followersCount: 2432,
    followingCount: 1200,
    postsCount: 64,
    following: false,
    isFollowingMe: true,
    online: false,
  },
  {
    name: 'monicaa',
    profile_picture:
      'https://firebasestorage.googleapis.com/v0/b/react-native-e.appspot.com/o/a71de5589d604ece4a685c2c270267cebe192be8.png?alt=media&token=0d91856a-8a43-4b58-8e44-57becc3f34eb',
    bio: 'Out on an adventure',
    followersCount: 2432,
    followingCount: 1200,
    postsCount: 64,
    following: false,
    isFollowingMe: true,
    online: false,
  },
  {
    profile_picture: 'https://picsum.photos/200',
    name: 'John Smith',
    following: false,
    isFollowingMe: false,
    online: false,
    bio: 'Out on an adventure',
    followersCount: 2432,
    followingCount: 1200,
    postsCount: 64,
  },
  {
    profile_picture: 'https://picsum.photos/200',
    name: 'Jane Smith',
    following: true,
    isFollowingMe: true,
    online: true,
    bio: 'Out on an adventure',
    followersCount: 2432,
    followingCount: 1200,
    postsCount: 64,
  },
  {
    profile_picture: 'https://picsum.photos/200',
    name: 'Brad Pitt',
    following: false,
    isFollowingMe: true,
    online: false,
    bio: '😎',
    followersCount: 2432,
    followingCount: 1200,
    postsCount: 64,
  },
  {
    profile_picture: 'https://picsum.photos/200',
    name: 'Robert Downey Jr',
    following: false,
    isFollowingMe: true,
    online: false,
    bio: 'The real life Tony Stark',
    followersCount: 10000000,
    followingCount: 2400,
    postsCount: 1000,
  },
  {
    profile_picture: 'https://picsum.photos/200',
    name: 'Tony Stark',
    following: false,
    isFollowingMe: false,
    online: true,
    bio: 'I am IronMan',
    followersCount: 1234,
    followingCount: 240,
    postsCount: 120,
  },
  {
    profile_picture: 'https://picsum.photos/200',
    name: 'Marco Polo',
    following: false,
    isFollowingMe: false,
    online: false,
    bio: 'Where are you?',
    followersCount: 10000,
    followingCount: 2223,
    postsCount: 12,
  },
];

export const posts: PostInterface[] = [
  {
    id: 'ffbeb717-9ffb-4a83-9b71-d47a90b57f60',
    user: {
      ...MOCK_USERS[0],
    },
    image: {
      uri:
        'https://firebasestorage.googleapis.com/v0/b/react-native-ui-kits.appspot.com/o/assets%2Fzurich1.jpg?alt=media&token=8c900be1-b6d6-427d-9739-1f637d8369e6',
    },
    caption: '🇨🇭 Beautiful Zürich Switzerland',
    timestamp: 1514764800,
    comments: ['andrea.schmidt', 'monicaa', 'alexandergarcia', 'jmitch'],
    likes: 42,
  },
  {
    id: 'f5f09829-951e-4d32-a400-0c6a097dd29d',
    user: {
      ...MOCK_USERS[1],
    },
    image: {
      uri:
        'https://firebasestorage.googleapis.com/v0/b/react-native-ui-kits.appspot.com/o/assets%2Fzurich2.jpg?alt=media&token=b213731b-d54b-4072-8268-52f326b635e9',
    },
    caption: 'Finding Balance',
    timestamp: 1514769900,
    likes: 24,
    comments: [],
  },
];
