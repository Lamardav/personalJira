import { BoardEnum } from "./EnumBoards";

export interface IBoardItem {
  id: string;
  text: string;
}

export interface IBoard {
  name: BoardEnum;
  id: string;
  items: IBoardItem[];
}