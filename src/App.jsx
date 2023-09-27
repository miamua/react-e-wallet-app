import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Root } from "./pages/Root";
//import { Home } from "./pages/Home";
import { Cards, testInfo } from "./pages/Cards";
import { AddCard } from "./pages/AddCard";

export default function App() {
  const [cards, setCards] = useState(testInfo);
  const [count, setCount] = useState(1);

  const handleAddCard = (card) => {
    if (count < 4) {
      setCards([...cards, card]);
      setCount(count + 1);
    } else {
      alert("You can have max 4 cards");
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Cards cards={cards} />} />
        <Route path="/cards" element={<Cards cards={cards} />} />
        <Route
          path="/addcard"
          element={<AddCard onAddCard={handleAddCard} />} // Pass cards and onAddCard as props
        />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
