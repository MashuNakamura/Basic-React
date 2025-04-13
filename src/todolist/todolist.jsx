// Value of the text and boolean isComplete

import Todo from "./todo.jsx";

export default function TodoList(){
    return (
        <ul>
            <Todo text={"Learn HTML"} isCompleted={true}></Todo>
            <Todo text={"Learn CSS"} isCompleted={true} ></Todo>
            <Todo text={"Learn JavaScript"} isCompleted={true} ></Todo>
            <Todo text={"Learn ReactJS"} isCompleted={false} ></Todo>
        </ul>
    )
}