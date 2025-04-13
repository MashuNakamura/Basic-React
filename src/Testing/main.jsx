import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Testing from "./Testing.jsx";

createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <Testing />
    </StrictMode>
)