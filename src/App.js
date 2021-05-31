import './App.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [todo, setTodo] = useState(
    [
      {
        id: 1,
        title: "Buy copies",
        completed: false
      },
      {
        id: 2,
        title: "Buy mobiles",
        completed: false
      },
      {
        id: 3,
        title: "Buy TV",
        completed: false
      }
    ]
  );
  const [text, setText] = useState("");

  const onchange = (e) => {
    setText(e.target.value);
  }

  const addTodo = () => {
    if (text) {
      setTodo([
        ...todo,
        {
          id: Math.random() * 100,
          title: text,
          completed: false
        }
      ])
    }
  }

  const removeTodo = (id = 1) => {
    const itemArr = [...todo];
    for (var i = 0; i < itemArr.length; i++) {
      if (itemArr[i].id === id) {
        itemArr[i].completed = !itemArr[i].completed
      }
    }

    setTodo(itemArr);
  }

  return (
    <div className="app">
      <div className="container">

        <div className="addtodo">
          <input type="text" name="Todo" placeholder="Your Text Here ...." onChange={onchange} />
          <button onClick={addTodo}>Add</button>
        </div>
        <div className="todos">
          {todo.map((item) => {
            return (
              <div className="item" key={item.id} onClick={() => removeTodo(item.id)} style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                <div className="title">
                  <input type="checkbox" name="completed" />
                  <p>
                    {item.title}
                  </p>
                </div>
                <p className="crossbutton">
                  <FontAwesomeIcon icon={faTimes} />
                </p>
              </div>
            )
          }
          )}
        </div>
      </div>
    </div>
  );
}

export default App;


const multiplyTwoNumbers = (x, y) => {
  console.log(x * y);
}

multiplyTwoNumbers(2, 3);