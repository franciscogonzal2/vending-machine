import React, { Component } from "react";
import ReactDOM from "react-dom";
import Products from "./Components/Products";
import "./Customize.scss"

class App extends Component {
    render() {
        return (
            <div className="containerApp">
                <Products />
            </div>
        );
    }
}

export default App;

const wrapper = document.getElementById("root");
ReactDOM.render(<App />, wrapper);