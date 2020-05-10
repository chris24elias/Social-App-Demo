export interface PostInterface {
  id: string;
  image: {uri: string};
  likes: number;
  caption: string;
  timestamp: number;
  comments: string[];
  user: User;
}

export interface User {
  profile_picture: string;
  name: string;
  following?: boolean;
  isFollowingMe?: boolean;
  online?: boolean;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  bio: string;
}
