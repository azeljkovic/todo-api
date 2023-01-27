export interface TodoInterface {
  id: string;
  text: string;
}

export interface TodoArrayInterface {
  posts: TodoInterface[];
}

export interface ResponseInterface {
  status: number;
  message: string;
}
