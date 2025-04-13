import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Testing from "./testing.jsx";
import Container from "./container.jsx"
import TodoList from "../todolist/todolist.jsx";
import Todo from "../todolist/todo.jsx";

createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <Container>
            <Testing />
            <TodoList />
        </Container>
    </StrictMode>
)