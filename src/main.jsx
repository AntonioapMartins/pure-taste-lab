import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { migrateFromLocalStorage } from "./lib/indexedDB";

// Migrate existing localStorage data to IndexedDB (one-time)
migrateFromLocalStorage();

createRoot(document.getElementById("root")).render(<App />);
