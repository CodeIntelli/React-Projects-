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
  const addItem = () => {
    if (!inputData) {
      alert("please enter some data");
    } else {
      const uniqueKey = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setitems([...items, uniqueKey]);

      setinputData("");
    }
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
            <i className="fa fa-plus" title="Add Items" onClick={addItem}></i>
          </div>

          <div className="showItems">
            {items.map((elem) => {
              return (
                <>
                  <div className="eachItem" key={elem.id}>
                    <h3>{elem.name}</h3>
                    {/* <h3>{elem.id}</h3> */}
                    <i
                      className="fa fa-trash"
                      style={{ cursor: "pointer" }}
                      title="Delete Item"
                      onClick={() => delItems(elem.id)}
                    ></i>
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
