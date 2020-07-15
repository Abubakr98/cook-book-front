export interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}

export interface IPost {
  name: string;
  description: string;
  ingredients: string[];
  date: Date;
}
interface IOldV {
  name: string;
  description: string;
  ingredients: string[];
  date: Date;
  _id: string;
  id: number;
}
export interface IGet extends IPost {
  oldVersions?: IOldV[];
  _id?: string;
  __v?: number;
}
