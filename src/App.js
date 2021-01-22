import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div className="w-screen max-h-screen overflow-y-hidden flex flex-col font-Roboto">
      <Topbar />
      <div className="_bottom flex flex-1 w-full bg-teal-700 overflow-y-hidden">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
