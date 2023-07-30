import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    //BEM naming convention
    <div className="app">
      <div className="app__body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Home Screen</h1>} />
            <Route
              path="/app"
              element={
                <>
                  <Sidebar />
                  <Chat />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
