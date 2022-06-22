import React from "react";

const MenuCat = ({ filterItem, categoryItems }) => {
  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          {categoryItems.map((elem, indx) => {
            return (
              <>
                <button
                  key={indx}
                  className="btn btn-warning"
                  onClick={() => {
                    filterItem(elem);
                  }}
                >
                  {elem}
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuCat;
