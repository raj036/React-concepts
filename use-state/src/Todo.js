import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
    const [value, setValue] = useState('');
    const [listTodo, setTodoList] = useState([]);
    let addList = (inpText) => {
        setTodoList([...listTodo, inpText]);
        setValue("");
        console.log(listTodo);
    }

    const deleteListItem = (key) => {
        let newList = [...listTodo];
        newList.splice(key, 1);
        setTodoList([...newList])
    }

    return (
        <>
            <h1>Todo List</h1>

            <div>
                <input type="text" value={value} className="inp-todo" onChange={(e) => setValue(e.target.value)} />
                <button onClick={() => addList(value)}>+</button>

            </div>
            <div>
                {listTodo.map((listItem, i) => {
                    return (
                        <TodoList key={i} index={i} list={listItem} deleteList={deleteListItem} />
                    )
                })}

            </div>
        </>
    )
}

export default Todo