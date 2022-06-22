import React from "react";
import Menu from "./Menu";
import "./tab.css";
// import MenuRepresentation from "./components/Menu Representation";
const MenuRepresentation = () => {
  const [items, setItems] = React.useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItem = Menu.filter((elem) => {
      return elem.category === categoryItem;
    });
    setItems(updateItem);
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => {
              setItems(Menu);
            }}
          >
            All Dishes
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              filterItem("breakfast");
            }}
          >
            BreakFast
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              filterItem("lunch");
            }}
          >
            Lunch
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              filterItem("evening");
            }}
          >
            Evening
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              filterItem("dinner");
            }}
          >
            Dinner
          </button>
        </div>
      </div>

      {/* my main item section */}
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {/* <MenuRepresentation /> */}

              {items.map((elem) => {
                const { id, image, name, price, description } = elem;
                return (
                  <>
                    <div
                      className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5"
                      key={id}
                    >
                      <div className="row Item-inside shadow">
                        {/* for images */}
                        <div className="col-12 col-md-12 col-lg-4 col-xl-4 img-div">
                          <img src={image} alt={name} className="img-fluid" />
                        </div>

                        {/* menu items description */}
                        <div className="col-12 col-md-12 col-lg-8">
                          <div className="main-title pt-4 pb-3">
                            <h1>{name}</h1>
                            <p>{description}</p>
                          </div>
                          <div className="menu-price-book">
                            <div className="price-book-divide d-flex justify-content-between ">
                              <h2>Price : {price}</h2>
                              <a href="/">
                                <button className="btn btn-primary">
                                  Order Now
                                </button>
                              </a>
                            </div>
                            <p className="subtext">
                              *Prices may vary on selected date.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuRepresentation;
