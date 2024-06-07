export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PopUpInterface {
  id: number;
  title: string;
  body: string;
  handleClose: () => void;
}
