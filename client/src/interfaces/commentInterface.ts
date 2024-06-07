export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface initComment {
  comments: Comment[];
  status: string;
}
