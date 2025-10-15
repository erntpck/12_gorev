import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import HomeList from "./pages/HomeList";
import HomeDetail from "./pages/HomeDetail";
import AddHome from "./pages/AddHome";
import EditHome from "./pages/EditHome";
import { BrowserRouter, Route, Routes } from "react-router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeList />} />

        <Route path="/homes/new" element={<AddHome />} />

        <Route path="/homes/:id" element={<HomeDetail />} />

        <Route path="/homes/:id/edit" element={<EditHome />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
