import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [value, setValue] = useState("");
  const [listTodo, setTodoList] = useState<any>([]);
  let addList = (inpText: any) => {
    setTodoList([...listTodo, inpText]);
    setValue("");
    console.log(listTodo);
  };

  const deleteListItem = (key: any) => {
    let newList = [...listTodo];
    newList.splice(key, 1);
    setTodoList([...newList]);
  };

  return (
    <>
      <h1>Todo List</h1>

      <div>
        <input
          type="text"
          value={value}
          className="inp-todo"
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => addList(value)}>+</button>
      </div>
      <div>
        {listTodo.map((listItem: any, i: any) => {
          return (
            <TodoList
              key={i}
              index={i}
              list={listItem}
              deleteList={deleteListItem}
            />
          );
        })}
      </div>
    </>
  );
};

export default Todo;
