import React from "react";
import './index.css';
import MainContainer from "./MainContainer";

const App = (): React.ReactElement => {
    return (
        <div className="App">
         <div className="container">
            <MainContainer/>
         </div>
      </div>
    )
}

export default App;