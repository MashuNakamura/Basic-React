import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "./Container.jsx";
import Testing from "./Testing/Testing.jsx";
import TodoList from "./Todolist/Todolist.jsx";
import Table from "./Table/Table.jsx";
import Button from "./Button/AllertButton.jsx"
import AlertButton from "./Button/AllertButton.jsx";
import MyButton from "./Button/MyButton.jsx";
import Toolbar from "./Button/Toolbar.jsx";
import SearchForm from "./Button/SearchForm.jsx";
import SayHelloForm from "./Button/SayHelloForm.jsx";

createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <Container>
            {/* <Testing />
            <TodoList /> */}
            {/* <Table /> */}
            {/* <AlertButton text="Button" message={"You click me"}/> */}
            {/* <MyButton text="Smash Me" onSmash={() => alert("You Smash Me !")}/> */}
            {/* <Toolbar onClick={(e) =>{
                e.stopPropagation();
                alert("You click Tool")
            }}/> */}
            {/* <SearchForm /> */}
            <SayHelloForm />
        </Container>
    </StrictMode>
)