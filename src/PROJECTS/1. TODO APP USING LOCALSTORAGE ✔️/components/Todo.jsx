import React from "react";

const getItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setinputData] = React.useState("");
  const [items, setitems] = React.useState(getItems());
  const [toggle, setToggle] = React.useState(true);
  const [editItem, seteditItem] = React.useState(null);
  const addItem = () => {
    if (!inputData) {
      alert("please enter some data");
    } else if (inputData && !toggle) {
      setitems(
        items.map((elem) => {
          if (elem.id === editItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setinputData(""); 
      setToggle(true);
      seteditItem(null);
    } else {
      const uniqueKey = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setitems([...items, uniqueKey]);
    }
    setinputData("");
  };
  const delItems = (index) => {
    const updatedItem = items.filter((elem) => {
      return index !== elem.id;
    });
    setitems(updatedItem);
  };

  const removeAll = () => {
    setitems([]);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const editItems = (indx) => {
    console.log(indx);
    let newEditItem = items.find((elem) => {
      return elem.id === indx;
    });

    setinputData(newEditItem.name);
    setToggle(false);
    seteditItem(indx);
    console.log(newEditItem);
  };

  React.useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption className="text-light">
              Add Your Todo Task here 👌✍
            </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items...."
              value={inputData}
              onChange={(e) => setinputData(e.target.value)}
              onKeyPress={handleKey}
            />

            {toggle ? (
              <i className="fa fa-plus" title="Add Items" onClick={addItem}></i>
            ) : (
              <i
                className="fa fa-edit"
                title="Update Items"
                onClick={addItem}
              ></i>
            )}
          </div>

          <div className="showItems">
            {items.map((elem) => {
              return (
                <>
                  <div className="eachItem" key={elem.id}>
                    <h3>{elem.name}</h3>
                    <div className="todo-btn">
                      <i
                        className="fa fa-edit add-btn"
                        style={{ cursor: "pointer" }}
                        title="Edit Item"
                        onClick={() => editItems(elem.id)}
                      ></i>
                      <i
                        className="fa fa-trash"
                        style={{ cursor: "pointer" }}
                        title="Delete Item"
                        onClick={() => delItems(elem.id)}
                      ></i>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04 bg-fr"
              data-sm-link-text="Remove All"
              onClick={removeAll}
              onKeyPress={handleKey}
            >
              <span> CHECK LIST </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
