export interface PostInterface {
  id: string;
  avatar: string;
  username: string;
  image: {uri: string};
  likes: number;
  caption: string;
  timestamp: number;
  comments: string[];
}
