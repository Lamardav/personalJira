import React, { useState } from 'react';
import { BoardEnum } from "../../api/dto/EnumBoards";
import styled from "styled-components";
import { IBoard } from "../../api/dto/IBoard";
import { boardMock } from "../../mockData/boardMock";

const Board = () => {
    const [boards] = useState<IBoard[]>(boardMock)
    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>, name: BoardEnum, id: string) => {
      console.log("onDropHandlername", name)

      e.preventDefault()
    };

    const onDragStartHandler = (e: React.DragEvent<HTMLElement>, name: BoardEnum, id: string) => {
      console.log("onDragStarname", name)

    };

    const onDragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {

    };
    const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
      const {target}: React.DragEvent<HTMLElement> = e
      const {style} = target as HTMLElement
      style.background = "white"
    };

    const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      const {target}: React.DragEvent<HTMLElement> = e
      const {style} = target as HTMLElement
      style.background = "red"
    };

    return (
      <Content>
        {boards.map((board, index) => <BoardWrapper key={index}>
          {board.items.map((item) => <BoardItem
            onDrop={(e) => onDropHandler(e, board.name, item.id)}
            onDragStart={(e) => onDragStartHandler(e, board.name, item.id)}
            onDragEnd={(e) => onDragEndHandler(e)}
            onDragLeave={(e) => onDragLeaveHandler(e)}
            onDragOver={(e) => onDragOverHandler(e)} draggable
            key={item.id}>{item.text}</BoardItem>)}
        </BoardWrapper>)}
      </Content>
    );
  }
;

export default Board

const Content = styled.div`
  display: flex;
  grid-column-gap: 3vw;
`

const BoardWrapper = styled.div`
  border: 1px solid black;
  padding: 2vw;
  cursor: grab;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  grid-row-gap: 1vw;
`

const BoardItem = styled.div`
  border: 1px solid black;
  padding: 10px;

`