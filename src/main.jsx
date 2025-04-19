import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Testing from "./Testing/Testing.jsx";
import Container from "./Container.jsx";
import TodoList from "./Todolist/Todolist.jsx";
import Table from "./Table/Table.jsx";

createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <Container>
            <Testing />
            <TodoList />
            <Table />
        </Container>
    </StrictMode>
)