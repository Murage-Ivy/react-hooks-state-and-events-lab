import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [colorMode, setColorMode] = useState(false);

  const [selectedCategory, setSelectCategory] = useState("All");

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = colorMode ? "App dark" : "App light"


  function handleColorMode () {
    setColorMode(ColorMode => !ColorMode)
  }

  function handleCategory (event) {
   setSelectCategory(event.target.value);
   console.log(selectedCategory)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleColorMode}>{colorMode ? "Dark Mode": "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} selectedCategory = {selectedCategory}  onChangeCategory={handleCategory}/>
    </div>
  );
}

export default App;
