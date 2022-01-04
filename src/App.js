import React, { Component } from "react";
import Posts from "./component/posts.component";
import Navbar from "./component/navbar.components";

class App extends Component {
    render() {
        return (
            <>
                <div style={{ background: "grey" }}>
                    <Navbar />
                    <Posts />
                </div>
            </>
        );
    }
}

export default App;
