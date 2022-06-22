import React from "react";
import Menu from "./Menu";
import "./tab.css";
import MenuCat from "./subparts/MenuCat";
import Dishes from "./subparts/MenuItem";
const MenuParts = () => {
  // now if we want unique in array collection then we simply use
  //   ! new Set
  const allCategory = [
    ...new Set(
      Menu.map((curElement) => {
        return curElement.category;
      })
    ),
    "All Dishes",
  ];
  console.log(allCategory);
  const [items, setItems] = React.useState(Menu);
  const [categoryItems, setCategory] = React.useState(allCategory);

  const filterItem = (categoryItem) => {
    if (categoryItem === "All Dishes") {
      setItems(Menu);
      return;
    }
    const updateItem = Menu.filter((elem) => {
      return elem.category === categoryItem;
    });
    setItems(updateItem);
  };
  return (
    <>
      <MenuCat filterItem={filterItem} categoryItems={categoryItems} />
      <Dishes items={items} />
    </>
  );
};

export default MenuParts;
