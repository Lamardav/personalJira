import React, { Suspense } from 'react';
import { publicRoutes } from "./core/routes/privateRoutes";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={publicRoutes.board.link} element={<publicRoutes.board.component/>}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
