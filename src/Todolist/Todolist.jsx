// Value of the text and boolean isComplete or isDeleted

import Todo from "./Todo.jsx";

// Kalau menggunakan List JavaScript

export default function TodoList(){
    const data = [
        {   
            id : 1,
            text : "Learn HTML",
            isCompleted : true
        },
        {
            id : 2,
            text : "Learn CSS",
            isCompleted : true
        },
        {
            id : 3,
            text : "Learn JavaScript",
            isCompleted : false
        },
        {
            id : 4,
            text : "Learn React",
            isCompleted : false
        },
        {
            id : 5,
            text : "Learn NodeJS",
            isCompleted : false
        }
    ]

    // Return value versi simpel

    return(
        <ul>
            {data.map((todo) => <Todo key = {todo.id} {...todo} />)}
        </ul>
    )

    // Sama halnya dengan ini (disimpen di variable lain (todos))

    // const todos = data.map((todo) => <Todo key = {todo.id} {...todo} />)
    // return (
    //     <ul>
    //         {todos}
    //     </ul>
    // )

    // List text manual tanpa menggunakan Array JavaScript

        // <ul>
        //     <Todo text={"Learn HTML"} isCompleted={true} isDeleted={true}></Todo>
        //     <Todo text={"Learn CSS"} isCompleted={true} ></Todo>
        //     <Todo text={"Learn JavaScript"} isCompleted={true} ></Todo>
        //     <Todo text={"Learn ReactJS"} isCompleted={false} ></Todo>
        // </ul>
}