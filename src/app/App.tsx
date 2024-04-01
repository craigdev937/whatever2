import React from "react";
import "./App.css";
import Kevin from "@public/Kevin.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <img 
                src={Kevin} alt="Kevin Zietler"
                height="600px" width="auto" 
            />
        </React.Fragment>
    );
};


