import { BoardEnum } from "../api/dto/EnumBoards";

export const boardMock = [
  {
    name: BoardEnum.WillDo,
    id: "9122cd74-efa4-45cc-9af7-79fd04383579",
    items: [
      {
        id: "80bc503f-e459-438d-b984-360988a8f095",
        text: "juice"
      },
      {
        id: "0ca7ccab-6162-45d5-a3b1-967a2c86462b",
        text: "slice"
      }, {
        id: "ff4ab388-deb2-4a40-8a5b-d48ff38fcd48",
        text: "js"
      },
      {
        id: "a39035f4-254c-4732-8a37-d86b6dbb8219",
        text: "cors"
      }]
  },
  {
    name: BoardEnum.DoingNow,
    id: "fd83e1c4-50d7-4102-8a78-dadbbea5d235",
    items: [
      {
        id: "ec00798c-002f-4cab-92d3-75e82ea6cbe6",
        text: "bread"
      },
      {
        id: "ba03e22e-8475-4533-86a6-5d370748948f",
        text: "table"
      }]
  }, {
    id: "ec632808-550a-4341-8634-e137af335aab",
    name: BoardEnum.HaveDone,
    items: [
      {
        id: "cfa57345-c930-4df8-98b0-de0e1b68d72a",
        text: "news"
      },
      {
        id: "13def187-203e-4a73-a9d5-ba5fc64102a8",
        text: "keyboard"
      },
      {
        id: "41825bea-c05c-4694-ad99-75f4f7634186",
        text: "mouse"
      }]
  }]