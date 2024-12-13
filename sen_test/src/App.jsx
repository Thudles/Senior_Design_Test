import React from "react";
import { Grid } from "./components/Home/Grid";

const App = () => {
  return (
    // mx-auto my-16 w-11/12 bg-white rounded-lg
    <div className="p-6">
      <div className=" bg-white rounded-2xl h-[calc(100vh-48px)]  p-4 pt-2">
        <Grid />
      </div>
    </div>
  );
};

export default App;
