import { createRoot } from "react-dom/client";

import "./style.css";

import App from "./App";

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<App />);
