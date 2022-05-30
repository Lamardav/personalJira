import React from "react";
import { IRoute } from "../../api/dto/IRoute";

const Board = React.lazy(() => import("../../pages/board/board"))

export type PublicKeys = "board"

export const publicRoutes: Record<PublicKeys, IRoute> = {
  board: {
    link: "/board",
    component: Board
  }
}