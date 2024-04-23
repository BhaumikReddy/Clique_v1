// import Register from "./Components/auth/Register";
import ImageBoard from "./Components/imageBoard/ImageBoard"
import Navbar from "./Components/Navbar"
import React, { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("images  ");
  return (
    <div>
      {/* <Register/> */}
      <Navbar setQuery={setQuery} />
      <ImageBoard query={query} />
    </div>
  );
};

export default App;
